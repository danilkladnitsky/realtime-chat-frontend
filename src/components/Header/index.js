import styles from '../../styles/Header.module.css';

export default function Index() {
  //rendering menu items
  let menuItems = [
    {
      name: 'Мой чат',
      link: '/:' + localStorage.getItem('roomId') || '/',
    },
    {
      name: 'Подключиться к чату',
      link: '/join',
    },

    {
      name: 'Авторизация',
      link: '/login',
    },
  ];

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>👨‍💻 CHATTY.IO</h1>
      <ul className={styles.navbar}>
        {menuItems.map((menuItem) => (
          <li key={menuItem.name}>
            <a href={menuItem.link}>{menuItem.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
