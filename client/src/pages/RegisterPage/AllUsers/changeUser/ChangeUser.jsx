import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../../redux/features/auth/authSlice';

import styles from './changeUser.module.css';

export const ChangeUser = ({ user }) => {
	const dispatch = useDispatch();

	const [username, setUsername] = useState(user.username);
	const [password, setPassword] = useState('');
	const [surname, setSurname] = useState(user.surname);
	const [access, setAccess] = useState(user.access);

	const handleSubmit = (_id) => {
		try {
			dispatch(updateUser({ _id, username, password, surname, access }));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={(e) => e.preventDefault()} className={styles.form}>
			<h3>Изменение пользователя {user.surname}</h3>
			<span>{user._id}</span>
			<label className={styles.form__lable}>
				<span className={styles.form__heading}>Логин</span>
				<input
					minLength={2}
					maxLength={20}
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className={styles.form__imput}
					required
				/>
			</label>

			<label className={styles.form__lable}>
				<span className={styles.form__heading}>Пароль</span>
				<input
					minLength={5}
					maxLength={20}
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Новый пароль"
					className={styles.form__imput}
					required
				/>
			</label>

			<label className={styles.form__lable}>
				<span className={styles.form__heading}>ФИО</span>
				<input
					minLength={3}
					maxLength={50}
					type="text"
					value={surname}
					onChange={(e) => setSurname(e.target.value)}
					placeholder="Петрова Галина Владимировна"
					className={styles.form__imput}
					required
				/>
			</label>

			<label className={styles.form__lable}>
				<span className={styles.form__heading}>Права</span>
				<select
					name="access"
					type="text"
					value={access}
					onChange={(e) => setAccess(e.target.value)}
					className={styles.form__imput}
					required
				>
					<option>Администратор</option>
					<option>Заведующий</option>
					<option>Регистратор</option>
				</select>
			</label>

			<button
				className={styles.btn__update}
				type="submit"
				onClick={() => handleSubmit(user._id)}
			>
				Обновить и сохранить
			</button>
		</form>
	);
};
