const Express = require("express");
const express = Express();

express.get("/testt", async (req, res) => {
    res.json({
        metadata: {
            "Version": "1.0.0"
        }
    })
});

module.exports = express