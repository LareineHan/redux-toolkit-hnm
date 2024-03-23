import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let initialState = {
	productList: [],
	detailProduct: {},
	isLoading: false,
	err: null,
};

export const fetchProducts = createAsyncThunk(
	'product/fetchAll',
	async (searchQuery, thunkApi) => {
		try {
			let url = `https://my-json-server.typicode.com/lareinehan/redux-toolkit-hnm/products?q=${searchQuery}`;
			let res = await fetch(url);
			console.log('res fetchProducts: ', res);
			return await res.json();
		} catch (err) {
			thunkApi.rejectWithValue(err.message);
		}
	}
);

export const fetchProductDetail = createAsyncThunk(
	'product/fetchDetail',
	async (id, thunkApi) => {
		try {
			let url = `https://my-json-server.typicode.com/lareinehan/redux-toolkit-hnm/products/${id}`;
			let res = await fetch(url);
			await console.log('id received from thunk: ', id, 'res: ', res);
			return await res.json();
		} catch (err) {
			thunkApi.rejectWithValue(err.message);
		}
	}
);

export const productSlice = createSlice({
	name: 'product',
	initialState,

	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.isLoading = true;
				console.log('fetchProducts pending');
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.productList = action.payload;
				console.log('fetchProducts fulfilled');
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.err = action.payload;
				console.log('fetchProducts rejected');
			})

			.addCase(fetchProductDetail.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchProductDetail.fulfilled, (state, action) => {
				state.isLoading = false;
				state.detailProduct = action.payload;
				console.log(
					'fetchProductDetail fulfilled with ',
					action.payload,
					'state: ',
					state.detailProduct
				);
			})
			.addCase(fetchProductDetail.rejected, (state, action) => {
				state.isLoading = false;
				state.err = action.payload;
				console.log('fetchProductDetail rejected');
			});
	},
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
