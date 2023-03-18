import React, { ReactNode, useRef, useState, useEffect } from "react";
import { memo } from "react";
import { ChatRoomWrapper } from "./style";
import { Input, Button } from "antd";
import { message } from "antd";
import { Dropdown } from "antd";
import { CopyOutlined } from "@ant-design/icons";

import { ElementRef } from "react";
import PersonItem from "../person-item/index";
import Emoji from "../emoji";

import Dexie from "dexie";
import { useBearSelector } from "@/store";

import SparkMD5 from "spark-md5";

interface IMessage {
  id: string;
  text: string;
  name: string;
  socketID: string;
  time: string;
  type: number;
  realTime: number;
  sender: string;
  render: string;
}

class ChatDatabase extends Dexie {
  messages: Dexie.Table<IMessage, string>;

  constructor() {
    super("ChatDatabase");
    this.version(1).stores({
      messages:
        "id, text, name, socketID, time, type, realTime, sender, render",
    });
    this.messages = this.table("messages");
  }
}

const db = new ChatDatabase();

interface IProps {
  children?: ReactNode;
  id?: number;
  socket?: any;
  selectUser?: string;
}
interface Chunk {
  md5: string;
  chunk: Blob;
}

class Scheduler {
  max;
  count;
  queue: any[];
  constructor(max: number) {
    this.max = max;
    this.count = 0;
    this.queue = [];
  }
  async add(fn: any) {
    if (this.count >= this.max) {
      await new Promise((resolve) => this.queue.push(resolve));
    }
    this.count++;
    const res = fn();
    this.count--;
    this.queue.length && this.queue.shift()();
    return res;
  }
}

const ChatRoom: React.FC<IProps> = (props) => {
  const { socket, selectUser } = props;
  const [messageApi, contextHolder] = message.useMessage();

  const [inputVal, setInputVal] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const ref = useRef<ElementRef<typeof Input>>(null);
  const myRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const from = localStorage.getItem("username") as string;
  const { to } = useBearSelector((state) => ({
    to: state.counter.to,
  }));

  const smoothScrollToBottom = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      const chatContentHeight = chatContainer.scrollHeight;
      const scrollDuration = 500;
      let startTime = 0;
      const startScrollTop = chatContainer.scrollTop;
      const endScrollTop = chatContentHeight - chatContainer.clientHeight;

      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      const animateScroll = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp;
        }
        const elapsedTime = timestamp - startTime;
        const progress = easeInOutCubic(elapsedTime / scrollDuration);
        const newScrollTop =
          startScrollTop + progress * (endScrollTop - startScrollTop);
        chatContainer.scrollTo({ top: newScrollTop, behavior: "auto" });
        if (elapsedTime < scrollDuration) {
          requestAnimationFrame(animateScroll);
        } else {
          chatContainer.scrollTo({ top: chatContentHeight, behavior: "auto" });
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };
  const handleTransmit = () => {
    myRef.current?.click();
  };
  useEffect(() => {
    // 加载现有的聊天消息
    db.messages
      // .where("[sender+receiver]")
      // .equals([from, to])
      // .or("[sender+receiver]")
      // .equals([to, from])
      // .orderBy("realTime")
      .toArray()
      .then((msgs) => {
        msgs.sort((a, b) => a.realTime - b.realTime);
        const newData = msgs.filter(
          (item: IMessage) =>
            (item.sender === from && item.render === to) ||
            (item.sender === to && item.render === from)
        );
        setMessages(newData);
        smoothScrollToBottom();
      });
  }, [to]);
  useEffect(() => {
    socket.on("messageResponse", (data: IMessage) => {
      if (
        (data.sender === from && data.render === to) ||
        (data.sender === to && data.render === from)
      ) {
        setMessages([...messages, data]);
      }

      db.messages.add(data);
    });
    smoothScrollToBottom();
  }, [socket, messages]);

  function handleSubmit() {
    let val = inputVal;
    val = val?.replaceAll(" ", "");
    if (val == "") warning();
    else {
      socket.emit("message", {
        text: val,
        name: localStorage.getItem("username"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        time: new Date().toLocaleString(),
        realTime: +new Date(),
        type: 0, //把0设置为文本,
        sender: localStorage.getItem("username"),
        render: to,
      });
      setInputVal("");
    }
  }
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "输入不能为空",
    });
  };
  const handleEmoji = (item: string) => {
    setShowEmoji(false);
    socket.emit("message", {
      text: item,
      name: localStorage.getItem("username"),
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
      realTime: +new Date(),
      time: new Date().toLocaleString(),
      type: 1, //把1设置为Emoji，2为文件，3为图片,
      sender: localStorage.getItem("username"),
      render: to,
    });
  };
  const handleUpload = async (file: any) => {
    const CHUNK_SIZE = 2 * 1024 * 1024;
    const allFile = file.target.files;
    const scheduler = new Scheduler(4);
    const handleUpLoadSingle = async (file: File) => {
      const selectedFile = file;
      const fileReader = new FileReader();
      const fileChunkList: Chunk[] = [];

      let cursor = 0;
      // 加密，计算文件的md5值
      const calculateMD5 = () => {
        return new Promise<string>((resolve, reject) => {
          fileReader.onload = (event) => {
            const spark = new SparkMD5.ArrayBuffer();
            spark.append(event.target?.result as ArrayBuffer);
            const md5 = spark.end();
            resolve(md5);
          };
          fileReader.onerror = () => {
            reject("Failed to calculate MD5");
          };
          fileReader.readAsArrayBuffer(
            (selectedFile as File).slice(0, CHUNK_SIZE)
          );
        });
      };

      // 文件切片
      const sliceFile = (md5: string) => {
        return new Promise<void>((resolve, reject) => {
          while (cursor < (selectedFile as File).size) {
            const chunkSize = Math.min(
              CHUNK_SIZE,
              (selectedFile as File).size - cursor
            );
            const chunk = (selectedFile as File).slice(
              cursor,
              cursor + chunkSize
            );
            fileChunkList.push({ md5, chunk });
            cursor += chunkSize;
          }
          resolve();
        });
      };

      const checkFileExists = async (md5: string) => {
        const response = await fetch(
          `http://localhost:4000/checkFile?md5=${md5}`
        );
        const { fileExists, uploadedChunks } = await response.json();

        if (fileExists) {
          console.log(
            "File already exists on the server, starting upload of remaining chunks"
          );
          return uploadedChunks;
        } else {
          return null;
        }
      };

      const uploadChunks = async (uploadedChunks: number[] | null) => {
        try {
          for (let i = 0; i < fileChunkList.length; i++) {
            if (uploadedChunks?.includes(i)) {
              console.log(`Chunk ${i} already uploaded, skipping`);
              continue;
            }

            const formData = new FormData();
            formData.append("file", fileChunkList[i].chunk);
            formData.append("index", i.toString());
            formData.append("total", fileChunkList.length.toString());
            formData.append("md5", fileChunkList[i].md5);

            await fetch("http://localhost:4000/upload", {
              method: "POST",
              body: formData,
              // onUploadProgress: (progressEvent) => {
              //   const percentCompleted = Math.round(
              //     ((i * CHUNK_SIZE + progressEvent.loaded) * 100) /
              //       (selectedFile as File).size
              //   );
              // setProgress(percentCompleted);
              // },
            });
          }
          console.log("All chunks uploaded successfully");
        } catch (error) {
          console.error("Failed to upload chunks:", error);
        }
      };

      try {
        const md5 = await calculateMD5();
        console.log(`File MD5: ${md5}`);
        const uploadedChunks = await checkFileExists(md5);

        if (uploadedChunks) {
          await uploadChunks(uploadedChunks);
        } else {
          await sliceFile(md5);
          await uploadChunks(null);
        }
        // setProgress(100);
        // 上传结束
      } catch (error) {
        console.error("Failed to upload file:", error);
      }
    };
    for (let i = 0; i < allFile.length; i++) {
      scheduler.add(() => handleUpLoadSingle(allFile[i]));
    }
  };
  return (
    <ChatRoomWrapper>
      {selectUser == "" && <div>欢迎来到聊天室</div>}
      {selectUser !== "" && (
        <>
          <div className="header">
            <div className="left">
              <div className="icon">
                <img
                  src={require(`@/assets/img/head_portrait_${selectUser}.jpg`)}
                  alt=""
                />
                <span>{selectUser}</span>
              </div>
            </div>
            <div className="right">
              <button className="right-btn">
                <div className="transmit" onClick={handleTransmit}>
                  <input
                    type="file"
                    multiple={true}
                    className="input"
                    onChange={(e) => handleUpload(e)}
                    ref={myRef}
                  />
                  <CopyOutlined />
                </div>
              </button>
            </div>
          </div>
          <div className="main-content" ref={chatContainerRef}>
            {messages &&
              messages.map((item: any) => {
                return (
                  <PersonItem
                    key={item.realTime}
                    infoData={item}
                    type={item.type}
                  />
                );
              })}
          </div>
          <div className="footer">
            <Input.Group size="large" className="input-group">
              {/* emoji表情 */}
              <Dropdown
                placement="topLeft"
                trigger={["click"]}
                open={showEmoji}
                onOpenChange={setShowEmoji}
                dropdownRender={() => <Emoji handleEmoji={handleEmoji} />}
                arrow={{ pointAtCenter: true }}
              >
                <Button className="my-btn1">
                  <img
                    src={require("@/assets/img/emoji/smiling-face.png")}
                    alt=""
                  />
                </Button>
              </Dropdown>
              <Input
                style={{ width: "calc(100% - 200px)" }}
                placeholder="请输入聊天内容"
                onPressEnter={handleSubmit}
                onChange={(e) => setInputVal(e.target.value)}
                value={inputVal}
                ref={ref}
                className="my-input"
              />
              <Button
                type="primary"
                size="large"
                onClick={handleSubmit}
                className="mybtn"
              >
                发送
              </Button>
            </Input.Group>
          </div>
        </>
      )}
    </ChatRoomWrapper>
  );
};
export default memo(ChatRoom);
ChatRoom.displayName = "ChatRoom";
