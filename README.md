# moleculer-microservices-example

## api-gateway

### required packages

-   moleculer
-   express
-   cors
-   dotenv
-   nats

### networking - [docs](https://moleculer.services/docs/0.14/networking)

In order to communicate with other nodes (ServiceBrokers) you need to configure a transporter. Most of the supported transporters connect to a central message broker that provide a reliable way of exchanging messages among remote nodes. These message brokers mainly support publish/subscribe messaging pattern.

![networking](https://moleculer.services/docs/0.14/assets/networking.svg)

I use nats in this example.

## library-services

### required packages

-   moleculer
-   dotenv
-   nats
-   mongoose

### services - [docs](https://moleculer.services/docs/0.14/services)

The Service represents a microservice in the Moleculer framework. You can define actions and subscribe to events. To create a service you must define a schema: name, version, settings, actions, methods, events.
