import io from 'socket.io-client';
import { useEffect, useRef, useState } from 'react';

const SERVER_URL = 'http://localhost:5000';

export const useChat = (roomId) => {
  const [users, setUsers] = useState('');
  const [messages, setMessages] = useState('');
  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName');

  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(SERVER_URL, {
      query: { roomId, userId },
    });

    //getting online users in the room
    socketRef.current.on('users', (users) => {
      setUsers(users);
    });

    socketRef.current.emit('user:add', { userName, userId, roomId });

    //getting all messages
    socketRef.current.emit('message:get');

    socketRef.current.on('messages', (messages) => {
      setMessages(messages);
    });

    return () => {
      //preventing memory leak and closing socket connection
      socketRef.current.disconnect();
    };
  }, [roomId, userId, userName]);

  const sendMessage = ({ messageText, senderName }) => {
    socketRef.current.emit('message:add', {
      userId,
      messageText,
      senderName,
    });
  };
  return { users, messages, sendMessage };
};
