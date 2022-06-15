import mongoose from "mongoose";
import { getRandomId, getRandomInteger } from "../api/services/util.service.js";

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    description: {
        type: String,
    },
    filename: {
        type: String,
    },
    height: {
        type: String,
    },
    width: {
        type: Number,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE",
    },
    unitsInStock: {
        type: Number,
        default: getRandomInteger(5, 165),
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
