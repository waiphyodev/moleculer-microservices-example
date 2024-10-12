require("dotenv").config();

const moleculerBroker = require("./brokers/moleculer.broker");

moleculerBroker.start().then(() => {
    const express = require("express");
    const cors = require("cors");

    const app = express();
    app.disable("x-powered-by");
    app.use(express.json());
    app.use(express.urlencoded({ limit: "10mb", extended: true }));
    app.use(cors());

    app.locals.broker = moleculerBroker;
    const port = process.env.PORT;

    app.use(require("./routes"))

    const http = require("http");
    const httpServer = http.createServer(app);
    httpServer.listen(port);
    moleculerBroker.logger.info(`API gateway is started at port ${port}`);
});
