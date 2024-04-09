const Express = require("express");
const express = Express();
 

// test thing that will be removed soon
express.get("/testt", async (req, res) => {
    res.json({
        metadata: {
            "Version": "1.0.0"
        }
    })
});

module.exports = express