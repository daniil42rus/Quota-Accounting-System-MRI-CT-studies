import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
	const inAuth = false;

	const activeStyles = {
		color: 'red',
	};

	return (
		<div className="">
			{inAuth && (
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
		</div>
	);
};
