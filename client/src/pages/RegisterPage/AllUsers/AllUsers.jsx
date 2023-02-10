import React from 'react';
import styles from './alluser.module.css';

export const UsersItem = ({ user }) => {
	if (!user) {
		return <div className="">Загрузка...</div>;
	}

	return (
		<li className={styles.list__item}>
			<div className={styles.item__container}>
				{/* <div className="">{user.username}</div> */}
				{/* <div className="">{user.password}</div> */}
				<span className={styles.name}>{user.surname}</span>
				<span className={styles.access}>{user.access}</span>
			</div>
			<div className={styles.item__btns}>
				<button className={styles.btn__edit}></button>
				<button className={styles.btn__delete}></button>
			</div>
		</li>
	);
};
