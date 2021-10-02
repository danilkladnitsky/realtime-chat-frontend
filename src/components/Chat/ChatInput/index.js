import { useState } from 'react';
import styles from '../../../styles/Chat.module.css';

export default function Index({
  handleMessageSending,
  toggleSidebar,
  startVideoCall,
}) {
  const [message, setMessage] = useState('');

  //handling form and clearing the input after sending
  const handleInput = (e) => {
    e.preventDefault();
    if (message) handleMessageSending(message);
    setMessage('');
  };

  return (
    <div className={styles.chat__input}>
      <form className={styles.input} onSubmit={(e) => handleInput(e)}>
        <input
          autoComplete="off"
          placeholder="Текст сообщения..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">💬</button>
        <button type="button" onClick={toggleSidebar}>
          🌐
        </button>
        <button type="button" onClick={startVideoCall}>
          📷
        </button>
      </form>
    </div>
  );
}
