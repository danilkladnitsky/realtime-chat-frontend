import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const videoConstraints = {
  height: window.innerHeight / 2,
  width: window.innerWidth / 2,
};
const SERVER_URL = 'http://localhost:5000';
const Room = () => {
  const socketRef = useRef();
  const userVideo = useRef();

  useEffect(() => {
    socketRef.current = io.connect(SERVER_URL);
    navigator.mediaDevices
      .getUserMedia({ video: videoConstraints, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
      });
  }, []);

  return (
    <div>
      <video muted ref={userVideo} autoPlay playsInline />
    </div>
  );
};

export default Room;
