import { Router } from "express";

import {
    getProductById,
    addProduct,
    getAllProducts,
    searchProducts,
    deleteProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/search", searchProducts);
router.get("/:productId", getProductById);
router.delete("/:productId", deleteProduct);
router.get("/", getAllProducts);
router.post("/", addProduct);

export default router;
