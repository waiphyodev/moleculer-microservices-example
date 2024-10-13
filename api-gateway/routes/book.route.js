const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const result = await req.app.locals.broker.call("book.list");

    return res.status(result.code).json(result);
});

router.post("/", async (req, res) => {
    const payload = {
        body: req.body,
    };

    const result = await req.app.locals.broker.call("book.create", payload);

    return res.status(result.code).json(result);
});

router.get("/:id", async (req, res) => {
    const payload = {
        id: req.params.id,
    };

    const result = await req.app.locals.broker.call("book.detail", payload);

    return res.status(result.code).json(result);
});

router.put("/:id", async (req, res) => {
    const payload = {
        id: req.params.id,
        body: req.body,
    };

    const result = await req.app.locals.broker.call("book.update", payload);

    return res.status(result.code).json(result);
});

router.delete("/:id", async (req, res) => {
    const payload = {
        id: req.params.id,
    };

    const result = await req.app.locals.broker.call("book.delete", payload);

    return res.status(result.code).json(result);
});

module.exports = router;
