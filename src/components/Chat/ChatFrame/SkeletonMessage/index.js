import styles from '../../../../styles/Chat.module.css';

export default function Index() {
  return (
    <div className={styles.skeleton__message}>
      <div className={styles.message__author}></div>
      <div className={styles.message__text}></div>
      <div className={styles.message__text}></div>
    </div>
  );
}
