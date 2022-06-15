/**
 * Configuration
 */

import dotenv from "dotenv";

dotenv.config();

export const config = {
    port: process.env.PORT || 3333,
    dbURL: process.env.MONGO_URI,
};
