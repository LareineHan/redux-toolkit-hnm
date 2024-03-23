import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './page/Products';
import Signup from './page/Signup';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import PrivateRoute from './route/PrivateRoute';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Products />}></Route>
				<Route path='/signup' element={<Signup />}></Route>
				<Route path='/product/:id' element={<PrivateRoute />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
