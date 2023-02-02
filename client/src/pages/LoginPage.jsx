import React, { useState, useEffect } from 'react';
import { loginUser } from '../redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const LoginPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { status } = useSelector((status) => status.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (status) {
			toast(status);
		}
	}, [status, navigate]);

	const handleSubmit = () => {
		try {
			dispatch(loginUser({ username, password }));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={(e) => e.preventDefault()} className="">
			<h1>Авторизация</h1>
			<label>
				Username:
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Username"
					className=""
				/>
			</label>
			<label>
				Password:
				<input
					type="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					className=""
				/>
			</label>
			<button type="submit" onClick={handleSubmit}>
				Войти
			</button>
		</form>
	);
};
