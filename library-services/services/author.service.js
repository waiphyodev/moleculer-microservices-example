const authorModel = require("../models/author.model");
const responseHelper = require("../helpers/response.helper");

const services = {
    name: "author",
    actions: {
        async list(ctx) {
            try {
                const authorList = await authorModel.find();

                return responseHelper.ok(authorList);
            } catch (error) {
                console.log("author list error => ", error?.message);

                return responseHelper.unknown(error?.message);
            }
        },
        async detail(ctx) {
            const { id } = ctx.params;

            try {
                const author = await authorModel.findById(id);
                if (!author)
                    return responseHelper.notFound("Author is not found.");

                return responseHelper.ok(author);
            } catch (error) {
                console.log("author detail error => ", error?.message);

                return responseHelper.unknown(error?.message);
            }
        },
        async create(ctx) {
            const payload = ctx.params;
            const { body } = payload;

            try {
                await authorModel.create(body);

                return responseHelper.created("Author is created.");
            } catch (error) {
                console.log("author create error => ", error?.message);

                return responseHelper.unknown(error?.message);
            }
        },
        async update(ctx) {
            const payload = ctx.params;
            const { id, body } = payload;

            try {
                const updatedAuthor = await authorModel.findByIdAndUpdate(
                    id,
                    body
                );
                if (!updatedAuthor)
                    return responseHelper.notFound("Author is not found.");

                return responseHelper.ok(null, "Author is updated.");
            } catch (error) {
                console.log("author update error => ", error?.message);

                return responseHelper.unknown(error?.message);
            }
        },
        async delete(ctx) {
            const { id } = ctx.params;

            try {
                const deletedAuthor = await authorModel.findByIdAndDelete(id);
                if (!deletedAuthor)
                    return responseHelper.notFound("Author is not found.");

                return responseHelper.ok(null, "Author is deleted.");
            } catch (error) {
                console.log("author delete error => ", error?.message);

                return responseHelper.unknown(error?.message);
            }
        },
    },
};

module.exports = services;
