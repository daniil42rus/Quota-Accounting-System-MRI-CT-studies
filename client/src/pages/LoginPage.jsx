import React from 'react';

export const LoginPage = () => {
	return (
		<form onSubmit={(e) => e.preventDefault()} className="">
			<h1>Авторизация</h1>
			<label>
			Username:
				<input type="text" placeholder="Username" className="" />
			</label>
			<label>
				Password:
				<input type="Password" placeholder="Password" className="" />
			</label>
			<button type='submit'>Войти</button>
		</form>
	);
};
