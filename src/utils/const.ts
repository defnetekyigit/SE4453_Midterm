import dotenv from "dotenv";
dotenv.config();
export const env = {
  POSTGRES_URL: process.env.POSTGRES_URL
};