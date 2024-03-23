import React, { useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // 디스패치를 사용하기 위해 임포트
import { fetchProducts } from '../redux/reducers/productSlice';
const Products = () => {
	const [query] = useSearchParams(); // query를 state로 만들어준다.
	const dispatch = useDispatch(); // 디스패치를 사용하기 위해 선언
	const productList = useSelector((state) => state.product.productList);
	const getProducts = async () => {
		let searchQuery = query.get('q') || '';
		console.log('searchQuery ?? ', searchQuery);
		dispatch(fetchProducts(searchQuery)); // 액션을 디스패치한다.
	};

	useEffect(() => {
		getProducts();
		// eslint-disable-next-line
	}, [query]);

	return (
		<div>
			<Container>
				<Row>
					{productList.length > 0 ? (
						productList.map((item) => (
							<Col lg={4} key={item.id}>
								<ProductCard item={item} />
							</Col>
						))
					) : (
						<Container>
							<Row className='no-search-container'>
								<h1 className='no-search-result'>상품이 없습니다.</h1>
							</Row>
						</Container>
					)}
				</Row>
			</Container>
		</div>
	);
};

export default Products;
