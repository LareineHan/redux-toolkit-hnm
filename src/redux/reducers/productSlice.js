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
			let url = `https://my-json-server.typicode.com/lareinehan/hnm-hw/products?q=${searchQuery}`;
			let res = await fetch(url);
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
			let url = `https://my-json-server.typicode.com/lareinehan/hnm-hw/product/${id}`;
			let res = await fetch(url);
			console.log('res: ', res);
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
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.productList = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.err = action.payload;
			})
			.addCase(fetchProductDetail.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchProductDetail.fulfilled, (state, action) => {
				state.isLoading = false;
				state.productDetail = action.payload;
			})
			.addCase(fetchProductDetail.rejected, (state, action) => {
				state.isLoading = false;
				state.err = action.payload;
			});
	},
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
