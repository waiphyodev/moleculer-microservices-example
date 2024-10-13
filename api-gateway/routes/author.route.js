const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const list = await req.app.locals.broker.call("author.list");

        return res.status(200).json({ success: true, data: list });
    } catch (error) {
        console.log("author list error => ", error?.message);

        return res
            .status(500)
            .json({ success: false, message: error?.message });
    }
});

module.exports = router;
