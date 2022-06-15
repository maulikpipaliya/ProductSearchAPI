import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import { config } from "../config.js";

/**
 * Sets up the express server and middlewares
 *
 * @returns Express Application Object
 */
export const setUpExpressServer = () => {
    const app = express();

    dotenv.config();
    app.use(cors());

    //Middleware
    app.use(express.json());

    app.listen(config.port, (r) => {
        console.log(`server started at ${config.port}`);
        console.log();
    });

    return app;
};
