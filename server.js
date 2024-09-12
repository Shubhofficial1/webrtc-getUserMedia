// We have created server only to serve the page in a secure context, it won't work in file/non secure context
import express from "express";
import path from "path";

const app = express();

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname)));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
