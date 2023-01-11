interface Ilyric {
  time: number;
  text: string;
}
const timeRegExp = /^\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export function parseLyric(lyricString: string) {
  //每一行是一句歌词
  const lineString = lyricString.split("\n");
  const lyrics: Ilyric[] = [];
  //之后对每一句进行解析
  for (const line of lineString) {
    const res = timeRegExp.exec(line);
    if (!res) continue;
    //转换为总毫秒数
    const number3 =
      res[3].length === 3 ? parseInt(res[3]) : parseInt(res[3]) * 10;
    const time: number =
      parseInt(res[1]) * 60 * 1000 + parseInt(res[2]) * 1000 + number3;
    const text = line.replace(timeRegExp, "");
    lyrics.push({ time, text });
  }
  return lyrics;
}
