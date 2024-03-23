import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
	const navigate = useNavigate();
	const showDetail = () => {
		navigate(`/product/${item.id}`);
		console.log(`item id ${item.id} is clicked`);
	};
	return (
		<div className='each-product-container' onClick={showDetail}>
			<img className='product-img' src={item?.img} alt='product' />

			<div>{item.title}</div>
			<div>{item.price}</div>
			<div>{item?.new === true ? 'New Arrival' : ''}</div>
			<div className='choice'>
				{item?.choice === true ? 'Conscious choice' : ''}
			</div>
		</div>
	);
};

export default ProductCard;
