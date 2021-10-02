import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const useAuth = (pathToChat) => {
  const [user, setUser] = useState('');
  //validating input
  const [errors, setErrors] = useState('');

  useEffect(() => {
    if (user) {
      //generating or picking existing information about user
      if (!localStorage.getItem('userId'))
        localStorage.setItem('userId', nanoid(8));

      if (!localStorage.getItem('roomId'))
        localStorage.setItem('roomId', nanoid(5));

      localStorage.setItem('userName', user);

      window.location.href = `${pathToChat}:${localStorage.getItem('roomId')}`;
    }
  }, [user]);

  return { setUser, errors };
};
