import mongoose from "mongoose";
import colors from "colors";

/**
 * Connect to MongoDB by providing connection string
 * 
 * @param {databaseURL} DatabaseConnectionString
 */
export const connectToMongoDB = async (databaseURL) => {
    console.log(`Connecting to database...`);

    try {
        const conn = await mongoose.connect(databaseURL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        if (conn) {
            console.log(
                `[INFO] : SUCCESS. Connected to Database ${conn.connection.name}`
                    .green
            );
        }
    } catch (error) {
        console.error(`[ERROR] : Error : ${error.message}`.red);
        process.exit(1);
    }
};
