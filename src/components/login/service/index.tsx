import mybearRequest from "@/service";

export const getQRCodeKey = () => {
  const timestamp = +new Date();
  return mybearRequest.get({
    url: "/login/qr/key",
    params: {
      timestamp,
    },
  });
};

export const getQRImg = (key: number) => {
  const qrimg = true;
  const timestamp = +new Date();
  return mybearRequest.get({
    url: "/login/qr/create",
    params: {
      key,
      qrimg,
      timestamp,
    },
  });
};

export const getQRStatus = (key: number) => {
  const timestamp = +new Date();
  return mybearRequest.get({
    url: "/login/qr/check",
    params: {
      key,
      timestamp,
    },
  });
};

export const getMyLoginStatus = (cookie: string) => {
  return mybearRequest.post({
    url: "/login/status",
    params: {
      cookie,
    },
  });
};

export const getLoginData = (uid: number) => {
  return mybearRequest.get({
    url: "/user/detail",
    params: { uid },
  });
};

export const getLoginStatus = (cookie: string) => {
  return mybearRequest.get({
    url: "/user/account",
    params: {
      cookie
    }
  });
};

export const exitLoginAction = (cookie: string) => {
  return mybearRequest.post({
    url: "/logout",
    params: {
      cookie
    }
  })
}