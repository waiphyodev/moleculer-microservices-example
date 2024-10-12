require("dotenv").config();

const moleculerBroker = require("./brokers/moleculer.broker");

moleculerBroker.start().then(() => {
    require("./configs/mongo.config");
    console.log("library services is started.");
})