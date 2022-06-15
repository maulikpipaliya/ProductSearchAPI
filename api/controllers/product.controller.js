import asyncHandler from "express-async-handler";
import ProductService from "../services/product.service.js";
import { responseSuccess, responseError } from "../services/util.service.js";

/**
 * Add a random product from product data dump
 * @author  Maulik Pipaliya
 */
export const addProduct = asyncHandler(async (req, res) => {
    const response = await ProductService.addProduct();

    if (response.success) responseSuccess(res, 200, response);
    else responseError(res, 400, response);
});

/**
 * Gets product by product ID
 */
export const getProductById = asyncHandler(async (req, res) => {
    const { productId } = req.params;

    const productFound = await ProductService.getProductById(productId);

    if (productFound.success) responseSuccess(res, 200, productFound);
    else responseError(res, 404, productFound.error);
});

/**
 * Gets all products in database
 */
export const getAllProducts = asyncHandler(async (req, res) => {
    const products = await ProductService.getProducts();

    return products.success
        ? responseSuccess(res, 200, products)
        : responseError(res, 404, products.error);
});

export const deleteProduct = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const products = await ProductService.setProductInactive(productId);

    return products.success
        ? responseSuccess(res, 200, products)
        : responseError(res, 404, products.error);
});


/**
 * Filter Keywords:
 *  - keyword
 *  - type
 *  - minPrice
 *  - maxPrice
 *  - minRating
 *  - maxRating
 */
export const searchProducts = asyncHandler(async (req, res) => {
    const filters = req.query;

    console.log("filters", filters);
    const filteredProducts = await ProductService.searchProduct(filters);

    return filteredProducts.success
        ? responseSuccess(res, 200, filteredProducts)
        : responseError(res, 404, filteredProducts.error);
});
