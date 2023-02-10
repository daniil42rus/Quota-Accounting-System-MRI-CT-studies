import React from 'react';
import styles from './alluser.module.css';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../../redux/features/auth/authSlice';

export const UsersItem = ({ user }) => {
	const dispatch = useDispatch();
	const removeUserHandler = (_id) => {
		try {
			dispatch(removeUser({ _id }));
			console.log(_id);
		} catch (error) {
			console.log(error);
		}
	};

	if (!user) {
		return <div className="">Загрузка...</div>;
	}

	return (
		<li className={styles.list__item}>
			<div className={styles.item__container}>
				<span className={styles.name}>{user._id}</span>
				<span className={styles.name}>{user.surname}</span>
				<span className={styles.access}>{user.access}</span>
			</div>
			<div className={styles.item__btns}>
				<button className={styles.btn__edit}></button>
				<button
					className={styles.btn__delete}
					onClick={() => removeUserHandler(user._id)}
				></button>
			</div>
		</li>
	);
};
