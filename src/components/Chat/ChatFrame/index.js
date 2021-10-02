import React, { useEffect, useRef } from 'react';
import styles from '../../../styles/Chat.module.css';
import Message from './Message';
import SkeletonMessage from './SkeletonMessage';

export default React.memo(function Index({ messages }) {
  const chatRef = useRef(null);

  const scrollToBottom = () => {
    let chat = chatRef.current;
    chat.scrollTop = chat.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.chat__frame}>
      <div className={styles.chat__messages} ref={chatRef}>
        <Message
          key={0}
          senderName="👨‍💻 chatty.io"
          messageText={'Ссылка на чат: ' + window.location.href}
        />
        {Array.isArray(messages) ? (
          messages.map((message) => (
            <Message
              key={message.messageId}
              senderName={message.senderName}
              messageText={message.messageText}
              sendingDate={message.sendingDate}
            />
          ))
        ) : (
          <SkeletonMessage />
        )}
      </div>
    </div>
  );
});
