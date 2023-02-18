import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
	user: null,
	token: null,
	isLoading: false,
	status: null,
	allUsers: [],
};

export const registerUser = createAsyncThunk(
	'auth/registerUser',
	async ({ username, password, surname, access }) => {
		try {
			const { data } = await axios.post('/auth/register', {
				username,
				password,
				surname,
				access,
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async ({ username, password }) => {
		try {
			const { data } = await axios.post('/auth/login', {
				username,
				password,
			});
			if (data.token) {
				window.localStorage.setItem('token', data.token);
			}
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const getMe = createAsyncThunk('auth/getMe', async () => {
	try {
		const { data } = await axios.get('/auth/me');
		return data;
	} catch (error) {
		console.log(error);
	}
});

export const getAllUsers = createAsyncThunk('auth/getAllUsers', async () => {
	try {
		const { data } = await axios.get('/auth/register');
		return data;
	} catch (error) {
		console.log(error);
	}
});

export const removeUser = createAsyncThunk(
	'auth/register/removeUser',
	async ({ _id }) => {
		try {
			const { data } = await axios.post(`/auth/register/removeUser`, { _id });
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const updateUser = createAsyncThunk(
	'auth/register/updateUser',
	async ({ _id, username, password, surname, access }) => {
		try {
			const { data } = await axios.post('/auth/register/updateUser', {
				_id,
				username,
				password,
				surname,
				access,
			});

			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.user = null;
			state.token = null;
			state.isLoading = false;
			state.status = null;
		},
	},
	extraReducers: {
		// Register user
		[registerUser.pending]: (state) => {
			state.isLoading = true;
			state.status = null;
		},
		[registerUser.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.status = action.payload.message;
		},
		[registerUser.rejectWithValue]: (state, action) => {
			state.isLoading = false;
			state.status = action.payload.message;
		},
		// Login user
		[loginUser.pending]: (state) => {
			state.isLoading = true;
			state.status = null;
		},
		[loginUser.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.status = action.payload.message;
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		[loginUser.rejectWithValue]: (state, action) => {
			state.status = action.payload.message;
			state.isLoading = false;
		},
		// Проверка авторизации
		[getMe.pending]: (state) => {
			state.isLoading = true;
			state.status = null;
		},
		[getMe.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.status = null;
			state.user = action.payload?.user;
			state.token = action.payload?.token;
		},
		[getMe.rejectWithValue]: (state, action) => {
			state.status = action.payload.message;
			state.isLoading = false;
		},

		// Получить всех пользователей
		[getAllUsers.pending]: (state) => {
			state.isLoading = true;
		},
		[getAllUsers.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.allUsers = action.payload.allUsers;
		},
		[getAllUsers.rejectWithValue]: (state, action) => {
			state.isLoading = false;
		},

		// Удалить пользователя
		[removeUser.pending]: (state) => {
			state.isLoading = true;
		},
		[removeUser.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.status = action.payload.message;
			state.allUsers = state.allUsers.filter(
				(user) => user._id !== action.meta.arg._id
			);
		},
		[removeUser.rejectWithValue]: (state, action) => {
			state.isLoading = false;
			state.status = action.payload.message;
		},

		// Обновить пользователя
		[updateUser.pending]: (state) => {
			state.isLoading = true;
			state.status = null;
		},
		[updateUser.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.status = action.payload.message;
		},
		[updateUser.rejectWithValue]: (state, action) => {
			state.isLoading = false;
			state.status = action.payload.message;
		},
	},
});

export const checkIsAuth = (state) => Boolean(state.auth.token);

export const thisUser = (state) => state.auth.user;

export const { logout } = authSlice.actions;
export default authSlice.reducer;
