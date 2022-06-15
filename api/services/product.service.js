import productModel from "../../models/product.model.js";
import {
    errorMessage,
    getRandomId,
    getRandomInteger,
    responseSuccess,
    successMessage,
} from "./util.service.js";

import { productData } from "../../models/productsDataDump.js";

export default class ProductService {
    static async getProductById(productId) {
        try {
            const productFound = await productModel.findOne({
                productId,
            });

            return productFound
                ? successMessage("Product Found", productFound)
                : errorMessage("No product found");
        } catch (error) {
            return errorMessage("Some error occurred", error);
        }
    }

    static async getProducts() {
        try {
            const products = await productModel.find({
                status: "ACTIVE",
            });

            return products
                ? successMessage("Products have been fetched", products)
                : errorMessage("Products could not be fetched");
        } catch (error) {
            return errorMessage(
                "Some error occurred while fetching products",
                error
            );
        }
    }

    static async addProduct() {
        const productId = getRandomId();

        const randomProductObject =
            productData[getRandomInteger(0, productData.length - 1)];

        const productToAdd = Object.assign({ productId }, randomProductObject);

        try {
            const product = new productModel(productToAdd);

            await product.save();

            return {
                success: true,
                message:
                    "No Object was provided and thus we have added random product from our own database. Product Added Successfully",
                data: productToAdd,
            };
        } catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }
    }

    static async setProductInactive(productId) {
        try {
            const productFound = await productModel.findOneAndUpdate(
                {
                    productId,
                },
                {
                    status: "INACTIVE",
                }
            );

            return productFound
                ? successMessage("Product Set TO INACTIVE", productFound)
                : errorMessage("No product found");
        } catch (error) {
            return errorMessage("Some error occurred", error);
        }
    }

    static async searchProduct(filters) {
        console.log(filters);

        let query = [
            {
                $match: {
                    $and: [],
                },
            },
        ];

        let allConditions = query[0].$match.$and;

        const {
            keyword = null,
            minPrice = null,
            maxPrice = null,
            minRating = null,
            maxRating = null,
            type: productType = null,
        } = filters;

        // let productType = type;
        if (productType) {
            allConditions.push({
                type: {
                    $regex: productType,
                    $options: "i",
                },
            });
        }

        if (keyword) {
            allConditions.push({
                $or: [
                    {
                        title: {
                            $regex: keyword,
                            $options: "i",
                        },
                    },
                    {
                        description: {
                            $regex: keyword,
                            $options: "i",
                        },
                    },
                ],
            });
        }

        if (minPrice > 0) {
            allConditions.push({
                price: { $gt: parseInt(minPrice) },
            });
        }

        if (maxPrice > 0) {
            allConditions.push({
                price: { $lt: parseInt(maxPrice) },
            });
        }

        if (minRating > 0) {
            allConditions.push({
                rating: { $gt: parseInt(minRating) },
            });
        }

        if (maxRating > 0) {
            allConditions.push({
                rating: { $lt: parseInt(maxRating) },
            });
        }

        try {
            const filteredProducts = await productModel.aggregate(query);
            if (filteredProducts)
                return successMessage(
                    "Filtered products found",
                    filteredProducts
                );

            return errorMessage("No products found with such query");
        } catch (error) {
            return errorMessage(
                "Some error occurred while filtering product",
                error
            );
        }
    }
}
