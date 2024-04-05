const Express = require("express");
const app = Express();

const PORT = 6969

app.get("/", async (req, res ) => {
    res.send("express is best c:")
});

app.listen(PORT, () => {
    console.log("hooray")
})