import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Food Munch Backend Running...");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});