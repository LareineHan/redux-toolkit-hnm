import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import '../styles/ProductDetail.css';
import { fetchProductDetail } from '../redux/reducers/productSlice';

const ProductDetail = () => {
	const dispatch = useDispatch();
	const item = useSelector((state) => state.product.detailProduct);
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

					<Form.Select aria-label='detail-page-size' id='size'>
						<option>Select Size</option>
						{sizeOptions?.map((size) => (
							<option value={size}>{size}</option>
						))}
					</Form.Select>
					<Container className='Btns'>
						<Button variant='outline-dark' className='add-btn'>
							ADD TO CART
						</Button>
						<Button variant='dark' className='buy-btn'>
							BUY NOW
						</Button>
					</Container>
				</div>
			</Container>
		</div>
	);
};
export default ProductDetail;
