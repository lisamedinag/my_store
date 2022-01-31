import productService from "../services/productService";

import {FETCH_PRODUCTS, FETCH_PRODUCT, SELECTED_PRODUCT} from "./types";

export const fetchProducts = () => async dispatch => {
    const response = await productService.get('/products');
    console.log("getting all products", response.data)
    dispatch({type: FETCH_PRODUCTS, payload: response.data});
};

export const fetchProduct = (id) => async dispatch => {
    const response = await productService.get(`/products/:${id}`);

    dispatch({type: FETCH_PRODUCT, payload: response.data});
};

export const selectProduct = (product) => {
    return {
        type: SELECTED_PRODUCT,
        payload: product
    };
};