# moleculer-microservices-example

## api-gateway

### required packages

-   moleculer
-   express
-   cors
-   dotenv
-   nats

### networking

In order to communicate with other nodes (ServiceBrokers) you need to configure a transporter. Most of the supported transporters connect to a central message broker that provide a reliable way of exchanging messages among remote nodes. These message brokers mainly support publish/subscribe messaging pattern.

![networking](https://moleculer.services/docs/0.14/assets/networking.svg)

I use nats in this example.
