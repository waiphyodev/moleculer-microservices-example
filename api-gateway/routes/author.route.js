const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const result = await req.app.locals.broker.call("author.list");

    return res.status(result.code).json(result);
});

router.post("/", async (req, res) => {
    const payload = {
        body: req.body,
    };

    const result = await req.app.locals.broker.call("author.create", payload);

    return res.status(result.code).json(result);
});

router.get("/:id", async (req, res) => {
    const payload = {
        id: req.params.id,
    };

    const result = await req.app.locals.broker.call("author.detail", payload);

    return res.status(result.code).json(result);
});

router.put("/:id", async (req, res) => {
    const payload = {
        id: req.params.id,
        body: req.body,
    };

    const result = await req.app.locals.broker.call("author.update", payload);

    return res.status(result.code).json(result);
});

router.delete("/:id", async (req, res) => {
    const payload = {
        id: req.params.id,
    };

    const result = await req.app.locals.broker.call("author.delete", payload);

    return res.status(result.code).json(result);
});

module.exports = router;
