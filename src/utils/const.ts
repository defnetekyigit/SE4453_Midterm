import dotenv from "dotenv";
dotenv.config();
export const env = {
  POSTGRES: process.env.POSTGRES
};