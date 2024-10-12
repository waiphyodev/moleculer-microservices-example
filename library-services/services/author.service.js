const authorModel = require("../models/author.model");

const services = {
    name: "author",
    actions: {
        async list(ctx) {
            try {
                const authorList = await authorModel.find({});

                return 
            } catch (error) {
                
            }
        },
    },
};
