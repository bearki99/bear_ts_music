#  网易云项目



##  技术栈说明

本项目接口使用开源项目  [Binaryify/NeteaseCloudMusicApi: 网易云音乐 Node.js API service (github.com)](https://github.com/Binaryify/NeteaseCloudMusicApi)

本项目技术栈：React18 + Hooks + Antd + Axios + TypeScript + React-Router-DOM V6 + Redux Toolkit + Socket.io

计划：我的音乐改成我的私信 目前已完成初步聊天功能，接下来进行界面的升级改造(3-4 初步聊天功能结束)
增加文件传输、图片传输、emoji功能（Emoji 3-8结束）
对Redux持久化进行配置（3-7结束）

下一步计划：增加文件切片传输，图片传输功能
文件传输考虑拖拽（注意文件过大问题），断点续传，并发限制等



 ##  项目目录说明

assets - 公用样式设置、公用资源（图片等）文件夹

base-ui

components - 公用组件文件夹

router - 路由配置文件夹

service - Axios配置

store - Redux配置

utils - 工具文件夹

views - 页面文件夹



##  页面目录说明

主路由：

与网易云音乐保持相同

发现音乐 - Discover

我的私信 - Mine

关注 - Focus

下载客户端 - Download

![image-20230111095404909](C:\Users\beary\AppData\Roaming\Typora\typora-user-images\image-20230111095404909.png)



发现音乐下二级路由：

推荐	- Recommend

排行榜 - Ranking

歌单	- Songs

主播电台- Radio

歌手	- Singers

新碟上架- Album

![image-20230111095546344](C:\Users\beary\AppData\Roaming\Typora\typora-user-images\image-20230111095546344.png)
