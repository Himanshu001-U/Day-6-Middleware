import express from "express"
import { info } from "./info.js";

const app = express();
const port = 6969;
const hostname = "127.0.0.1"

app.use(express.json());
app.use(info)

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})