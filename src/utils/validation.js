export const validateUrl = (url) => {
  let roomId = url.split(':');
  roomId = roomId[roomId.length - 1];
  return roomId.length === 5;
};
