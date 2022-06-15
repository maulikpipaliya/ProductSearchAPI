/**
 * Configuration
 */

import dotenv from "dotenv";

dotenv.config();

export const config = {
    port: process.env.PORT,
    dbURL: process.env.MONGO_URI,
};
