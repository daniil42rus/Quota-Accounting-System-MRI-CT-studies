import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	thisUser,
	checkIsAuth,
	logout,
} from '../../redux/features/auth/authSlice';

import { toast } from 'react-toastify';
import { Logo } from '../Logo/Logo';
import styles from './navbar.module.css';

export const Navbar = () => {
	const isAuth = useSelector(checkIsAuth);
	const user = useSelector(thisUser);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutHandler = () => {
		dispatch(logout());
		window.localStorage.removeItem('token');
		navigate('/login');
		toast('Вы вышли из системы');
	};
	// console.log(user);

	return (
		<div className="">
			{isAuth && (
				<header className={styles.header}>
					<NavLink to={'/'} href="/" className={styles.logo}>
						<Logo />
					</NavLink>

					<div className={styles.nav__right}>
						<div className={styles.user}>
							<span className={styles.user__name}>
								{user.surname
									.split(/\s+/)
									.map((w, i) =>
										i ? w.substring(0, 1).toUpperCase() + '.' : w
									)
									.join(' ')}
							</span>
							<span className={styles.user__access}>{user.access}</span>
						</div>

						<button
							className={styles.btn__exit}
							onClick={logoutHandler}
						></button>
					</div>
				</header>
			)}
		</div>
	);
};
