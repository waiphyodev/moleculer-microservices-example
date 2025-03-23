const { randomBytes } = require("crypto");

module.exports = {
    // check here https://moleculer.services/docs/0.14/configuration#Full-options-object
    namespace: process.env.NAMESPACE,
    nodeID: process.env.NODE_ID || randomBytes(8).toString("base64"),

    logger: [
        {
            type: "Console",
            options: {
                level: "info",
                formatter: "{timestamp} {level} {nodeID}: {msg}",
            },
        },
        {
            type: "File",
            options: {
                level: "info",
                folder: "../gateway-logs",
                filename: "info-{date}.log",
                formatter: "{timestamp} {level} {nodeID}: {msg}",
            },
        },
        {
            type: "File",
            options: {
                level: "warn",
                folder: "../gateway-logs",
                filename: "warn-{date}.log",
                formatter: "{timestamp} {level} {nodeID}: {msg}",
            },
        },
        {
            type: "File",
            options: {
                level: "error",
                folder: "../gateway-logs",
                filename: "error-{date}.log",
                formatter: "{timestamp} {level} {nodeID}: {msg}",
            },
        },
    ],

    transporter: process.env.TRANSPORTER_URI,

    requestTimeout: 5000,
    retryPolicy: {
        enabled: true,
        retries: 5,
        delay: 100,
        maxDelay: 1000,
        factor: 2,
        check: (err) => err && !!err.retryable,
    },

    contextParamsCloning: false,
    maxCallLevel: 100,
    heartbeatInterval: 5,
    heartbeatTimeout: 15,

    tracking: {
        enabled: true,
        shutdownTimeout: 5000,
    },

    disableBalancer: false,

    registry: {
        strategy: "RoundRobin",
        preferLocal: true,
    },

    circuitBreaker: {
        enabled: true,
        threshold: 0.5,
        windowTime: 60,
        minRequestCount: 20,
        halfOpenTime: 10 * 1000,
        check: (err) => err && err.code >= 500,
    },

    bulkhead: {
        enabled: true,
        concurrency: 10,
        maxQueueSize: 100,
    },

    transit: {
        maxQueueSize: 50 * 1000,
        disableReconnect: false,
        disableVersionCheck: false,
        packetLogFilter: ["HEARTBEAT"],
    },

    uidGenerator: () => randomBytes(8).toString("base64"),

    errorHandler: null,

    cacher: "MemoryLRU",
    serializer: "JSON",

    validator: true,
    errorRegenerator: null,

    // metrics: {
    //     enabled: true,
    //     reporter: ["Console"],
    // },

    tracing: {
        enabled: true,
        exporter: ["Console"],
    },

    internalServices: true,
    internalMiddlewares: true,

    hotReload: true,

    replDelimiter: "mol $",
    replCommands: [],

    metadata: {
        region: "eu-west1",
    },

    skipProcessEventRegistration: false,
    maxSafeObjectSize: null,

    ServiceFactory: null,
    ContextFactory: null,

    created(broker) {
        broker.logger.info("created");
    },

    started(broker) {
        broker.logger.info("started");
    },

    stopped(broker) {
        broker.logger.info("stopped");
    },
};
