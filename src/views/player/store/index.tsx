import { parseLyric } from "@/utils/parseLyric";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentSong, getSongLyric } from "../service";
export const fetchPlayerDataAction = createAsyncThunk(
  "player",
  async (id: number, { dispatch, getState }) => {
    const playsongList = (getState() as any).player.songList;
    const findIndex = playsongList.findIndex((item: any) => item.id === id);
    if (findIndex === -1) {
      getCurrentSong(id).then((res) => {
        const newPlaySongList = [...playsongList, res.songs[0]];
        const newLen = newPlaySongList.length - 1;
        dispatch(changesongListAction(newPlaySongList));
        dispatch(changeCurrentSongIndexAction(newLen));
        dispatch(changeCurrentSongAction(res.songs[0]));
      });
    } else {
      const song = playsongList[findIndex];
      dispatch(changeCurrentSongAction(song));
      dispatch(changeCurrentSongIndexAction(findIndex));
    }

    getSongLyric(id).then((res) => {
      const lyricString = res.lrc.lyric;
      const lyrics = parseLyric(lyricString);
      dispatch(changeCurrentSongLyricAction(lyrics));
    });
  }
);
export const changeMusicAction = createAsyncThunk(
  "currentSong",
  (isNext: boolean, { dispatch, getState }) => {
    const player = (getState() as any).player;
    const playMode = player.playMode;
    const songIndex = player.currentSongIndex;
    const songList = player.songList;
    let newIndex = songIndex;
    switch (playMode) {
      case 1: //随机播放
        newIndex = Math.floor(Math.random() * songList.length);
        break;
      default:
        newIndex = isNext ? songIndex + 1 : songIndex - 1;
    }
    if (newIndex >= songList.length) newIndex = 0;
    else if (newIndex < 0) newIndex = songList.length - 1;
    const song = songList[newIndex];
    dispatch(changeCurrentSongAction(song));
    dispatch(changeCurrentSongIndexAction(newIndex));
    dispatch(changeLyricsAction(song.id));
  }
);
export const changeLyricsAction = createAsyncThunk(
  "newLyric",
  (id: number, { dispatch }) => {
    getSongLyric(id).then((res) => {
      const lyricString = res.lrc.lyric;
      const lyrics = parseLyric(lyricString);
      dispatch(changeCurrentSongLyricAction(lyrics));
    });
  }
);
export const addMusicAction = createAsyncThunk(
  "addnewSong",
  async (id: number, { dispatch, getState }) => {
    getCurrentSong(id).then(res => {
      const song = res.songs[0];
      const originList = (getState() as any).player.songList;
      const newList = [...originList, song];
      dispatch(changesongListAction(newList));
    })
  }
);
const initialState: any = {
  currentSong: {},
  currentSongLyric: {},
  songList: [
    {
      name: "最好的我",
      id: 1975753397,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 29588305,
          name: "刘大拿",
          tns: [],
          alias: [],
        },
        {
          id: 12030367,
          name: "刘思达LOFTHESTAR",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 6,
      crbt: null,
      cf: "",
      al: {
        id: 150424307,
        name: "最好的我",
        picUrl:
          "https://p2.music.126.net/C-g1ts0ttaPB6iVhx7vQkA==/109951167823958296.jpg",
        tns: [],
        pic_str: "109951167823958296",
        pic: 109951167823958300,
      },
      dt: 238159,
      h: {
        br: 320000,
        fid: 0,
        size: 9529005,
        vd: -38541,
        sr: 48000,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5717421,
        vd: -35989,
        sr: 48000,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3811629,
        vd: -34429,
        sr: 48000,
      },
      sq: {
        br: 997371,
        fid: 0,
        size: 29691705,
        vd: -38694,
        sr: 48000,
      },
      hr: {
        br: 1766299,
        fid: 0,
        size: 52582678,
        vd: -38525,
        sr: 48000,
      },
      a: null,
      cd: "01",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536870912,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 82532,
        name: "最好的我",
        artists: [
          {
            id: 2741,
            name: "房祖名",
          },
          {
            id: 7837,
            name: "龚芝怡",
          },
        ],
        albumMeta: {
          id: 8137,
          name: "乱",
        },
      },
      tagPicList: null,
      resourceState: true,
      version: 6,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rurl: null,
      mst: 9,
      cp: 0,
      rtype: 0,
      mv: 0,
      publishTime: 1661616000000,
      tns: ["我明白要你爱是荒谬的要求"],
    },
    {
      name: "Hurt",
      id: 1998568947,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 54699580,
          name: "BradJeans",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 2,
      crbt: null,
      cf: "",
      al: {
        id: 154950767,
        name: "Hurt",
        picUrl:
          "https://p1.music.126.net/SuyXeRalZRHfRcMsTeSxlw==/109951168061730250.jpg",
        tns: [],
        pic_str: "109951168061730250",
        pic: 109951168061730260,
      },
      dt: 135325,
      h: {
        br: 320000,
        fid: 0,
        size: 5415750,
        vd: -71992,
        sr: 44100,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 3249467,
        vd: -69386,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 2166326,
        vd: -67781,
        sr: 44100,
      },
      sq: {
        br: 904709,
        fid: 0,
        size: 15303820,
        vd: -72155,
        sr: 44100,
      },
      hr: null,
      a: null,
      cd: "01",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 270336,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 2,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1416692,
      mv: 0,
      publishTime: 1668096000000,
    },
    {
      name: "ELEVEN -Japanese ver.-",
      id: 1981596112,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 50377945,
          name: "IVE",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 2,
      crbt: null,
      cf: "",
      al: {
        id: 151641331,
        name: "ELEVEN -Japanese ver.-",
        picUrl:
          "https://p1.music.126.net/rB5GruF0vaXoQI8_zcOEUg==/109951167879628356.jpg",
        tns: [],
        pic_str: "109951167879628356",
        pic: 109951167879628350,
      },
      dt: 178494,
      h: {
        br: 320000,
        fid: 0,
        size: 7140876,
        vd: -69615,
        sr: 44100,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4284543,
        vd: -67155,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 2856377,
        vd: -65676,
        sr: 44100,
      },
      sq: null,
      hr: null,
      a: null,
      cd: "01",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 270336,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 2,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mst: 9,
      cp: 2706476,
      rtype: 0,
      rurl: null,
      mv: 0,
      publishTime: 1663516800000,
    },
    {
      name: "Queen of Hearts",
      id: 1988803392,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 50377945,
          name: "IVE",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 90,
      st: 0,
      rt: "",
      fee: 8,
      v: 2,
      crbt: null,
      cf: "",
      al: {
        id: 153077647,
        name: "ELEVEN -Japanese ver.-",
        picUrl:
          "https://p2.music.126.net/NUZ2Mfdyb8iCvjzNUaM9vg==/109951167959116201.jpg",
        tns: [],
        pic_str: "109951167959116201",
        pic: 109951167959116210,
      },
      dt: 145371,
      h: {
        br: 320000,
        fid: 0,
        size: 5815946,
        vd: -68916,
        sr: 44100,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 3489585,
        vd: -66469,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 2326404,
        vd: -65081,
        sr: 44100,
      },
      sq: null,
      hr: null,
      a: null,
      cd: "01",
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 270336,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 2,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 2706476,
      mv: 0,
      publishTime: 1666108800000,
    },
  ],
  currentSongIndex: -1,
  playMode: 0, //0-顺序播放  1-随机播放 2-单曲循环
};
const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload;
    },
    changeCurrentSongLyricAction(state, { payload }) {
      state.currentSongLyric = payload;
    },
    changeCurrentSongIndexAction(state, { payload }) {
      state.currentSongIndex = payload;
    },
    changesongListAction(state, { payload }) {
      state.songList = payload;
    },
    changePlaymodeAction(state, { payload }) {
      state.playMode = payload;
    },
  },
});
export const {
  changeCurrentSongAction,
  changeCurrentSongLyricAction,
  changeCurrentSongIndexAction,
  changesongListAction,
  changePlaymodeAction,
} = playerSlice.actions;
export default playerSlice.reducer;
