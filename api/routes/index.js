import commonRouter from "./common.router.js";
import productRouter from "./product.router.js";

import { errorHandler, notFound } from "../middlewares/error.middleware.js";

export const setUpRoutes = (app) => {
    app.use("/", commonRouter);
    app.use("/product", productRouter);

    app.use(notFound);
    app.use(errorHandler);
};
