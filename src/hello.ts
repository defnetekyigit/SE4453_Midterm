import { Request, Response } from "express";

export const helloHandler = (req: Request, res: Response) => {
  return res.json({ message: "Hello from Azure Midterm Project!" });
};
