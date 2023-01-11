export function transformUrl(imgUrl: string, width: number, height: number = width) {
  return imgUrl + `?param=${width}x${height}`;
}
