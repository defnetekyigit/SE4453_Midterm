import express from "express";
import { helloHandler } from "./hello";

const app = express();

app.get("/hello", helloHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;