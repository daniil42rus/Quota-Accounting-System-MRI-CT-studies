import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, getAllUsers } from '../../redux/features/auth/authSlice';
import { UsersItem } from './AllUsers/AllUsers';
import { toast } from 'react-toastify';
import styles from './registerpage.module.css';

export const RegisterPage = () => {
	const dispatch = useDispatch();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [surname, setSurname] = useState('');
	const [access, setAccess] = useState('');

	const { status } = useSelector((status) => status.auth);
	const { allUsers } = useSelector((status) => status.auth);

	useEffect(() => {
		if (status) {
			toast(status);
		}
	}, [status]);

	useEffect(() => {
		dispatch(getAllUsers());

		const interval = setInterval(() => {
			dispatch(getAllUsers());
		}, 1000);

		return () => clearInterval(interval);
	}, [dispatch]);

	const handleSubmit = () => {
		try {
			dispatch(registerUser({ username, password, surname, access }));
			// setPassword('');
			// setUsername('');
			// setSurname('');
			// setAccess('');
		} catch (error) {
			console.log(error);
		}
	};

	const handleEmpty = () => {
		try {
			setPassword('');
			setUsername('');
			setSurname('');
			setAccess('');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="">
			<h2 className={styles.heading}>Управление учетными записями</h2>
			<div className={styles.content}>
				<div className={styles.left}>
					<h3 className={styles.left__heading}>Список учетных записей</h3>
					<div className={styles.box}>
						<ul className={styles.user__list}>
							{/* {setInterval(() => alert('tick'), 10000)} */}

							{allUsers.map((user, id) => (
								<UsersItem key={id} user={user} />
							))}
						</ul>
					</div>
				</div>
				<div className={styles.right}>
					<h3 className={styles.right__heading}>Добавить пользователя</h3>

					<div className={styles.box}>
						<form onSubmit={(e) => e.preventDefault()} className={styles.form}>
							<label className={styles.form__lable}>
								<span className={styles.form__heading}>Логин</span>
								<input
									minLength={2}
									maxLength={20}
									type="text"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									placeholder="g.petrova"
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
									placeholder="********"
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
									<option value="">Выбирите права</option>
									<option value="Администратор">Администратор</option>
									<option value="Регистратор">Регистратор</option>
									<option value="Заведующий">Заведующий</option>
								</select>
							</label>
							<div className={styles.form__btns}>
								<button
									type="submit"
									onClick={handleEmpty}
									className={styles.btn__delete}
								>
									Очистить форму
								</button>
								<button
									type="submit"
									onClick={handleSubmit}
									className={styles.btn__save}
								>
									Сохранить
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
