const Express = require("express");
const express = Express();

const events = require("../static/events.json")

// proper fr 

express.get("/v1/events", async (req, res) => {
    res.json(events)
});

module.exports = express
