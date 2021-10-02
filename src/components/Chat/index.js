import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useWindowSize } from 'react-use';
import { useChat } from '../../hooks/useChat';

import ChatFrame from './ChatFrame';
import ChatSidebar from './ChatSidebar';
import ChatInput from './ChatInput';
import styles from '../../styles/Chat.module.css';

export default function Index() {
  //getting device width
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 576;

  //handling first appeareance of widgets
  const [sidebarOpened, setSidebarOpened] = useState(!isMobile);
  const [chatOpened, setChatOpened] = useState(true);

  useEffect(() => {
    setSidebarOpened(!isMobile);
    if (!isMobile) setChatOpened(true);
  }, [isMobile]);

  //getting user info
  const userName = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');
  const { roomId } = useParams();

  //connecting chat functions
  const { messages, users, sendMessage } = useChat(roomId);

  //send message to room users
  const handleMessageSending = (message) => {
    //e.preventDefault();
    sendMessage({
      messageText: message,
      senderName: userName,
      senderId: userId,
    });
  };

  //for future purposes
  const startVideoCall = () => {
    window.location.href = window.location.href + '/video';
  };

  //handling sidebar toggling on mobile and desktop devices
  const toggleSidebar = () => {
    setSidebarOpened((prev) => !prev);
    if (isMobile) setChatOpened((prev) => !prev);
  };

  return (
    <div className={styles.chat}>
      {chatOpened ? <ChatFrame messages={messages} /> : <></>}
      {sidebarOpened ? <ChatSidebar users={users} /> : <></>}
      <div className={styles.chat__break} />
      <ChatInput
        handleMessageSending={handleMessageSending}
        toggleSidebar={toggleSidebar}
        startVideoCall={startVideoCall}
      />
    </div>
  );
}
