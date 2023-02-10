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
import style from './navbar.module.css';

export const Navbar = () => {
	const isAuth = useSelector(checkIsAuth);
	const user = useSelector(thisUser);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const activeStyles = {
		color: 'red',
	};

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
				<header className={style.header}>
					<NavLink to={'/'} href="/" className={style.logo}>
						<Logo />
					</NavLink>

					<nav className={style.nav}>
						<ul className={style.nav__list}>
							{user.access === 'Администратор' && (
								<li className={style.nav__item}>
									<NavLink
										to={'/register'}
										href="/"
										className=""
										style={({ isActive }) =>
											isActive ? activeStyles : undefined
										}
									>
										Управление учетными записями{' '}
									</NavLink>
								</li>
							)}

							<li className={style.nav__item}>
								<NavLink
									to={'/'}
									href="/"
									className=""
									style={({ isActive }) =>
										isActive ? activeStyles : undefined
									}
								>
									Записать пациента{' '}
								</NavLink>
							</li>
							<li className={style.nav__item}>
								<NavLink
									to={'/'}
									href="/"
									className=""
									style={({ isActive }) =>
										isActive ? activeStyles : undefined
									}
								>
									Создать расписание{' '}
								</NavLink>
							</li>
							<li className={style.nav__item}>
								<NavLink
									to={'/'}
									href="/"
									className=""
									style={({ isActive }) =>
										isActive ? activeStyles : undefined
									}
								>
									Добавть квоты{' '}
								</NavLink>
							</li>
							<li className={style.nav__item}>
								<NavLink
									to={'/'}
									href="/"
									className=""
									style={({ isActive }) =>
										isActive ? activeStyles : undefined
									}
								>
									Сформировать отчет{' '}
								</NavLink>
							</li>
						</ul>
					</nav>
					<div className={style.nav__right}>
						<div className={style.user}>
							<span className={style.user__name}>
								{user.surname
									.split(/\s+/)
									.map((w, i) =>
										i ? w.substring(0, 1).toUpperCase() + '.' : w
									)
									.join(' ')}
							</span>
							<span className={style.user__access}>{user.access}</span>
						</div>

						<button className={style.btn__exit} onClick={logoutHandler}>
							<svg
								width="22"
								height="22"
								viewBox="0 0 22 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									className={style.btn__exit_path}
									d="M16.5308 6.71428L21 11M21 11L16.5308 15.2857M21 11L7.15385 11M16.3846 21L4.07692 20.9971C2.37846 20.9957 1 19.7171 1 18.14L1 3.86143C1 3.10367 1.32418 2.37694 1.90121 1.84112C2.47825 1.30531 3.26087 1.00429 4.07692 1.00429L16.3846 1"
									stroke="#4A3D52"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>
				</header>
			)}
		</div>
	);
};
