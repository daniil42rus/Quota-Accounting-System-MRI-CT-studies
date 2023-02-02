import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth, logout } from '../redux/features/auth/authSlice';
import { toast } from 'react-toastify';

export const Navbar = () => {
	const isAuth = useSelector(checkIsAuth);
	const dispatch = useDispatch();

	const activeStyles = {
		color: 'red',
	};

	const logoutHandler = () => {
		dispatch(logout());
		window.localStorage.removeItem('token');
		toast('Вы вышли из системы');
	};

	return (
		<div className="">
			{isAuth && (
				<ul className="">
					<li className="">
						<NavLink
							to={'/register'}
							href="/"
							className=""
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Управление учетными записями{' '}
						</NavLink>
					</li>
					<li className="">
						<NavLink
							to={'/'}
							href="/"
							className=""
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Записать пациента{' '}
						</NavLink>
					</li>
					<li className="">
						<NavLink
							to={'/'}
							href="/"
							className=""
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Создать расписание{' '}
						</NavLink>
					</li>
					<li className="">
						<NavLink
							to={'/'}
							href="/"
							className=""
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Добавть квоты{' '}
						</NavLink>
					</li>
					<li className="">
						<NavLink
							to={'/'}
							href="/"
							className=""
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Сформировать отчет{' '}
						</NavLink>
					</li>
				</ul>
			)}
			<div className="">
				{isAuth ? (
					<button onClick={logoutHandler}>Выйти</button>
				) : (
					<Link to={'/login'}> Войти </Link>
				)}
			</div>
		</div>
	);
};
