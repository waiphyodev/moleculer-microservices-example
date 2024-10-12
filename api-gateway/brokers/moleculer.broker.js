const { ServiceBroker } = require("moleculer");
const moleculerConfig = require("../configs/moleculer.config");

const moleculerBroker = new ServiceBroker(moleculerConfig);

module.exports = moleculerBroker;
