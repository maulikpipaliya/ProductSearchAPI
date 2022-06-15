import asyncHandler from "express-async-handler";

/**
 * Default Test API Function
 */
export const sayHello = asyncHandler(async (req, res) => {
    res.status(200).send({
        success: true,
        message: "Welcome to Product Search API",
    });
});
