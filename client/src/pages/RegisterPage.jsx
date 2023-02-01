import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/features/auth/authSlice';

export const RegisterPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = () => {
		try {
			dispatch(registerUser({ username, password }));
			setPassword('');
			setUsername('');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={(e) => e.preventDefault()} className="">
			<h1 className="">Регистрация</h1>
			<label className="">
				Username:
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Username"
					className=""
				/>
			</label>

			<label className="">
				Password:
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					className=""
				/>
			</label>

			<div className="">
				<button type="submit" onClick={handleSubmit} className="">
					Подтвердить
				</button>
			</div>
		</form>
	);
};
