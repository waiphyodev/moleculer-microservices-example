require("dotenv").config();

const moleculerBroker = require("./brokers/moleculer.broker");

moleculerBroker.loadService("./services/author.service");

moleculerBroker.start().then(() => {
    require("./configs/mongo.config");
    console.log("library services is started.");
})