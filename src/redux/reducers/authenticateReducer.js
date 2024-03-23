import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let initialState = {
	id: '',
	password: '',
	authenticate: false,
	err: 'failed to authenticate',
};

export const handleAuthenticate = createAsyncThunk(
	'auth/getLogin', // 액션의 이름
	async ({ id, password }) => {
		return { id, password };
	}
);
export const handleFalseAuthenticate = createAsyncThunk(
	'auth/getLogout', // 액션의 이름
	{ id: '', password: '' }
);

// 위 handleAuthenticate에서 사용자가 입력한 데이터를 받아온다.
// 받아온 데이터는 id와 password이다.
// 받아온 데이터를 state에 저장한다.
// 받아온 데이터를 state에 저장할 때는 action.payload를 사용한다.
// action.payload는 사용자가 입력한 데이터이다.
export const authenticateSlice = createSlice({
	name: 'auth', // 슬라이스의 이름 즉 액션의 이름이다.
	initialState,
	reducers: {
		getLogin: (state, action) => {
			state.id = action.payload.id;
			state.password = action.payload.password;
			state.authenticate = true;
		},
		getLogout: (state) => {
			state.id = '';
			state.password = '';
			state.authenticate = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(handleAuthenticate.fulfilled, (state, action) => {
				state.id = action.payload.id;
				state.password = action.payload.password;
				state.authenticate = true;
			})
			.addCase(handleFalseAuthenticate.fulfilled, (state, action) => {
				state.id = '';
				state.password = '';
				state.authenticate = false;
			});
	},
});
// 위에서 만든 reducer를 export한다.
export const authenticateAction = authenticateSlice.actions;
export default authenticateSlice.reducer;

// function authenticateReducer(state = initialState, action) {
// 	let { type, payload } = action;

// 	switch (type) {
// 		case 'LOGIN_SUCCESS':
// 			console.log(
// 				'LOGIN_SUCCESS! authenticateReducer type: ',
// 				type,
// 				' payload: ',
// 				payload
// 			);
// 			return {
// 				...state,
// 				id: payload.id,
// 				password: payload.password,
// 				authenticate: true,
// 			};
// 		case 'LOGOUT_SUCCESS':
// 			console.log(
// 				'LOGOUT_SUCCESS! authenticateReducer type: ',
// 				type,
// 				' payload: ',
// 				payload
// 			);
// 			return {
// 				...state,
// 				id: '',
// 				password: '',
// 				authenticate: false,
// 			};
// 		default:
// 			return { ...state };
// 	}
// }

// export default authenticateReducer;
