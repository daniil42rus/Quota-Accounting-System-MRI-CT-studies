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
	// console.log(allUsers);

	useEffect(() => {
		if (status) {
			toast(status);
		}
	}, [status]);

	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);

	const handleSubmit = () => {
		try {
			dispatch(registerUser({ username, password, surname, access }));
			setPassword('');
			setUsername('');
			setSurname('');
			
			document
				.getElementById('disabled')
				.removeAttribute('disabled', 'disabled');
			setAccess('');

			console.log(username, password, surname, access);
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

	const disableOption = () => {
		document.getElementById('disabled').setAttribute('disabled', 'disabled');
	};

	return (
		<div className="">
			<h2 className={styles.heading}>Управление учетными записями</h2>
			<div className={styles.content}>
				<div className={styles.left}>
					<h3 className={styles.left__heading}>Список учетных записей</h3>
					<div className={styles.box}>
						<ul className={styles.user__list}>
							{allUsers?.map((user, id) => (
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
									type="text"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									placeholder="g.petrova"
									className={styles.form__imput}
								/>
							</label>

							<label className={styles.form__lable}>
								<span className={styles.form__heading}>Пароль</span>
								<input
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="********"
									className={styles.form__imput}
								/>
							</label>

							<label className={styles.form__lable}>
								<span className={styles.form__heading}>ФИО</span>
								<input
									type="test"
									value={surname}
									onChange={(e) => setSurname(e.target.value)}
									placeholder="Петрова Галина Владимировна"
									className={styles.form__imput}
								/>
							</label>

							<label className={styles.form__lable}>
								<span className={styles.form__heading}>Права</span>
								<select
									name="access"
									type="test"
									value={access}
									onChange={(e) => setAccess(e.target.value)}
									onClick={disableOption}
									// placeholder="Регистратор"
									className={styles.form__imput}
								>
									<option id="disabled">Выбирите права</option>
									<option>Администратор</option>
									<option>Заведующий</option>
									<option>Регистратор</option>
								</select>
							</label>
						</form>
						<div className={styles.form__btns}>
							<button
								type="submit"
								onClick={handleEmpty}
								className={styles.btn__delete}
							>
								Удалить
							</button>
							<button
								type="submit"
								onClick={handleSubmit}
								className={styles.btn__save}
							>
								Сохранить
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
