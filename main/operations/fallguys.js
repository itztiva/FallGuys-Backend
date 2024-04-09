const Express = require("express");
const express = Express();

// idk if this works iike this yet ig
express.get("/api/fallguys/*/content", async (req, res) => {
    res.json({
        access: true,
    });
});

module.exports = express
