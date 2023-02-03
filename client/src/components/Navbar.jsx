import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	checkIsAdmin,
	checkIsAuth,
	logout,
} from '../redux/features/auth/authSlice';
import { toast } from 'react-toastify';

export const Navbar = () => {
	const isAuth = useSelector(checkIsAuth);
	const isAdmin = useSelector(checkIsAdmin);

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

	return (
		<div className="">
			{isAuth && (
				<ul className="">
					{isAdmin.access === 'admin' && (
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
					)}

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
				{isAuth && <button onClick={logoutHandler}>Выйти</button>}
			</div>
		</div>
	);
};
