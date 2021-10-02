import React from 'react';
import styles from '../../../styles/Chat.module.css';
import UserItem from './UserItem';
import ItemSkeleton from './ItemSkeleton';

export default React.memo(function Index({ users }) {
  //we also can render rooms or another structured information,
  //that's why I created the function for rendering purposes
  const renderList = () => {
    return (
      <>
        {Array.isArray(users) ? (
          users.map((user) =>
            user.isOnline ? <UserItem {...user} key={user.userId} /> : <></>
          )
        ) : (
          <ItemSkeleton />
        )}
      </>
    );
  };

  return (
    <div className={styles.chat__sidebar}>
      <div className={styles.chat__list}>{renderList()}</div>
    </div>
  );
});
