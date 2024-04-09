const Express = require("express");
const express = Express();
const fs = require("fs");
const path = require("path")
require('dotenv').config()

const PORT = process.env.PORT

express.use((req, res, next) => {
  if (process.env.DEBUG === 'true') {
    console.log(`${req.method} ${req.path}`);
  }
  next(); 
});

express.get("/", async (req, res ) => {
    res.send("express is best c:")
});

// these will start the other routes 
fs.readdirSync(path.join(__dirname, './main/routes')).forEach(file => {
    if (file.endsWith('.js')) {
      const service = require(path.join(__dirname, './main/routes', file));
      express.use(service);
    }
});

fs.readdirSync(path.join(__dirname, './main/operations')).forEach(file => {
  if (file.endsWith('.js')) {
    const service = require(path.join(__dirname, './main/operations', file));
    express.use(service);
  }
});

express.listen(PORT, () => {
    console.log("hooray")
});

module.exports = express