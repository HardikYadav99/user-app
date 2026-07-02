const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.get("/api/hello", (req, res) => {
    res.json({
        message: "Hello from backend",
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
