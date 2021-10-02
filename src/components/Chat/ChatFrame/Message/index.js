import styles from '../../../../styles/Chat.module.css';
import ReactTimeago from 'react-timeago';

export default function Index({ senderName, messageText, sendingDate }) {
  return (
    <div className={styles.message}>
      <div className={styles.message__author}>{senderName}</div>
      <div className={styles.message__text}>{messageText}</div>
      {sendingDate ? (
        <div className={styles.message__date}>
          <ReactTimeago date={sendingDate} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
