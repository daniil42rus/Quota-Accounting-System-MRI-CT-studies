import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../../redux/features/auth/authSlice';
import { Modal } from '../../../components/Modal/Modal';
import { ChangeUser } from './changeUser/ChangeUser';
import styles from './alluser.module.css';

export const UsersItem = ({ user }) => {
	const dispatch = useDispatch();

	const removeUserHandler = (_id) => {
		try {
			dispatch(removeUser({ _id }));
		} catch (error) {
			console.log(error);
		}
	};

	const [openModal, setopenModal] = useState(false);

	if (!user) {
		return <div className="">Загрузка...</div>;
	}

	return (
		<li className={styles.list__item}>
			<div className={styles.item__container}>
				{/* <span className={styles.name}>{user._id}</span> */}
				<span className={styles.name}>{user.username}</span>
				<span className={styles.name}>{user.surname}</span>
				<span className={styles.access}>{user.access}</span>
			</div>
			<div className={styles.item__btns}>
				<button
					className={styles.btn__edit}
					onClick={() => setopenModal(true)}
				></button>

				{openModal && (
					<Modal open={openModal} setOpen={setopenModal}>
						<ChangeUser user={user} />
					</Modal>
				)}

				<button
					className={styles.btn__delete}
					onClick={() => removeUserHandler(user._id)}
				></button>
			</div>
		</li>
	);
};
