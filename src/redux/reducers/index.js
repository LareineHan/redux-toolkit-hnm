import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import productSlice from './productSlice';
export default combineReducers({
	auth: authenticateReducer,
	product: productSlice,
});
