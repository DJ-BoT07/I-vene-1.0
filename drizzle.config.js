import dotenv from 'dotenv';
dotenv.config();

/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: "postgresql://DB_owner:o13WMjGNIdEU@ep-young-sea-a5w49dvm-pooler.us-east-2.aws.neon.tech/DB?sslmode=require",
    }
};
