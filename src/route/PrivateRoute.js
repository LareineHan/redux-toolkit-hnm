import React from 'react';
import ProductDetail from '../page/ProductDetail';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
	const authenticate = useSelector((state) => state.auth.authenticate);
	console.log('Private Route: authenticate is? ', authenticate);
	return authenticate === true ? <ProductDetail /> : <Navigate to='/signup' />;
};

export default PrivateRoute;
