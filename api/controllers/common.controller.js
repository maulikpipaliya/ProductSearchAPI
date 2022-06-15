import asyncHandler from "express-async-handler"

export const sayHello = asyncHandler(async (req, res) => {
    res.status(200).send({
        success: true,
        message: "Welcome to Product Search API",
    })
})