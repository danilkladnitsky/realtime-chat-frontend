import styles from '../../../../styles/Chat.module.css';

function index({ userName }) {
  return <div className={styles.chat__list__item}>💻 {userName}</div>;
}

export default index;
