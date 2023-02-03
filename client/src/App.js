import './App.css';
import { Layout } from './components/Layout.jsx';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkIsAuth, getMe } from './redux/features/auth/authSlice';
import { NotFind } from './pages/NotFind/NotFind';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMe());
	}, [dispatch]);

	// const isAuth = useSelector(checkIsAuth);

	const isAuth = useSelector(checkIsAuth);

	return (
		<Layout>
			{/* {
				isAuth ? (
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="register" element={<RegisterPage />} />
						<Route path="login" element={<LoginPage />} />
						<Route path="*" element={<NotFind />} />
					</Routes>
				) : (
					<Routes>
						<Route path="login" element={<LoginPage />} />
						<Route path="*" element={<LoginPage />} />
					</Routes>
				)
			} */}
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="register" element={<RegisterPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="*" element={<NotFind />} />
			</Routes>

			<ToastContainer to position="bottom-right" />
		</Layout>
	);
}

export default App;
