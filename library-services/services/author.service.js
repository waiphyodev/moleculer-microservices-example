const authorModel = require("../models/author.model");

const services = {
    name: "author",
    actions: {
        async list(ctx) {
            return await authorModel.find();
        },
        async detail(ctx) {
            const { id } = ctx.params;
            return await authorModel.findById(id);
        },
        async create(ctx) {
            const payload = ctx.params;
            const { body } = payload;

            return await authorModel.create(body);
        },
        async update(ctx) {
            const payload = ctx.params;
            const { id, body } = payload;

            return await authorModel.findByIdAndUpdate(id, body);
        },
        async delete(ctx) {
            const { id } = ctx.params;

            return await authorModel.findByIdAndDelete(id);
        },
    },
};

module.exports = services;
