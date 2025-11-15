import { Request, Response } from "express";

import { Client } from "pg";
 
export const helloHandler = async (req: Request, res: Response) => {

  try {

    const client = new Client({

      connectionString: process.env.POSTGRES_URL,

      ssl: false,

    });
 
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

 