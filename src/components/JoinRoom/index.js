import { useForm } from 'react-hook-form';
import { validateUrl } from '../../utils/validation';
import styles from '../../styles/Form.module.css';
import { useState } from 'react';

export default function Index() {
  //handling form submit and validation errors
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState('');

  const onSubmit = (data) => {
    if (validateUrl(data.link)) window.location.href = data.link;
    else setErrors('Некорректный адрес комнаты');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        autoComplete="off"
        placeholder="Ссылка на комнату"
        {...register('link', { required: true })}
      />
      <button type="submit">Подключиться</button>
      <span className={styles.form__error}>{errors}</span>
    </form>
  );
}
