import e, { Request, Response } from "express";
import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

export const helloHandler = async (req: Request, res: Response) => {
  console.log("Env controls:", process.env.POSTGRES);
  try {
    const client = new Client({
      connectionString: process.env.POSTGRES,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    console.log("Attempting to connect to the database...");
    await client.connect();
    console.log("Connected to the database successfully");
    const result = await client.query("SELECT NOW()");
    await client.end();

    return res.json({
      message: "Hello from Azure Midterm Project!",
      db_time: result.rows[0].now,
    });
  } catch (error) {
    console.error("DB Connection Error:", error);
    return res.status(500).json({ error: "Database connection failed" });
  }
};
