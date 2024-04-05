const Express = require("express");
const express = Express();

const PORT = 6969

express.get("/", async (req, res ) => {
    res.send("express is best c:")
});

express.listen(PORT, () => {
    console.log("hooray")
});

module.exports = express