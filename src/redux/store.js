import { configureStore } from '@reduxjs/toolkit';
import authenticateReducer from './reducers/authenticateReducer';
import productSlice from './reducers/productSlice';

const store = configureStore({
	reducer: {
		auth: authenticateReducer,
		product: productSlice,
	},
});

export default store;
