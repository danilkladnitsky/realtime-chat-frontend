import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import styles from '../../styles/Form.module.css';
export default function Index() {
  const pathToChat = '/';
  const { setUser } = useAuth(pathToChat);

  //validating user input
  const { register, handleSubmit, watch } = useForm();
  const watchUsername = watch('username', '');

  const onSubmit = (data) => {
    if (data.username.length > 4) setUser(data.username);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        autoComplete="off"
        placeholder="Имя пользователя"
        {...register('username', { required: true })}
      />
      <button type="submit">Войти</button>
      {watchUsername?.length < 5 && (
        <span className={styles.form__error}>
          Никнейм должен состоять как минимум из 5 символов
        </span>
      )}
    </form>
  );
}
