import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/ProductDetail.css';
import { fetchProductDetail } from '../redux/reducers/productSlice';

const ProductDetail = () => {
	const dispatch = useDispatch();
	const item = useSelector((state) => state.product.detailProduct);
	// const productDetail = useSelector((state) => state.product.detailProduct);
	let { id } = useParams(); // useParams()를 사용하여 URL 파라미터를 가져온다.
	const productDetail = async () => {
		await dispatch(fetchProductDetail(id));
	};
	console.log('productDetail: ', item);

	let productImg = item.img;
	let productTitle = item.title;
	let productPrice = item.price;
	let isNew = item.new;
	let isChoice = item.choice;
	let sizeOptions = item.size;

	// const getProductDetail = async () => {
	// 	await dispatch(fetchProductDetail(id));
	// 	console.log('getProductDetail id: ', id, 'productDetail: ', productDetail);
	// };
	useEffect(() => {
		productDetail(id);
	}, [id]);

	return (
		<div>
			<Container className='detail-product-container'>
				<div className='detail-product-img'>
					<img src={productImg} alt='product' />
				</div>
				<div className='detail-description-area'>
					<h2 className='detail-product-title'>{productTitle}</h2>
					<div className='detail-product-price'>{productPrice} KRW</div>
					<div className='detail-is-new'>
						{isNew === true ? 'New Arrival' : ''}
					</div>
					<div className='detail-is-choice'>
						{isChoice === true ? 'Conscious choice' : ''}
					</div>
					<select name='detail-size' id='size'>
						<option value=''>Select Size</option>
						{sizeOptions?.map((size) => (
							<option key={`help_${size}`} value={size}>
								{size}
							</option> // sizeOptions가 있을 때만 실행
						))}
					</select>
				</div>
			</Container>
		</div>
	);
};
export default ProductDetail;
