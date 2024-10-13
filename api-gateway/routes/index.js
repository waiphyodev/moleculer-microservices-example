const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res.send("API gateway is running...")
})

router.use("/api/authors", require("./author.route"));

module.exports = router;