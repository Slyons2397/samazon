import { PRODUCTS } from "../PRODUCTS";

export const selectAllProducts = () => {
    return PRODUCTS
};

export const selectProductById = (id) => {
    return PRODUCTS.find( (product) => product.id === parseInt(id));
}

export const selectFeaturedProduct = () => {
    return PRODUCTS.find((product) => product.featured)
};