const bookModel = require("../models/book.model");
const responseHelper = require("../helpers/response.helper");
const authorModel = require("../models/author.model");

const services = {
    name: "book",
    actions: {
        async list(ctx) {
            try {
                const bookList = await bookModel.find();

                return responseHelper.ok(bookList);
            } catch (error) {
                console.log("book list error => ", error?.message);

                return responseHelper.unknown(error?.message);
            }
        },
        async create(ctx) {
            const payload = ctx.params;
            const { body } = payload;

            try {
                const existingAuthor = await authorModel.findById(
                    body.authorId
                );
                if (!existingAuthor)
                    return responseHelper.notFound("Author is not found.");

                await bookModel.create(body);

                return responseHelper.ok(null, "Book is created.");
            } catch (error) {
                console.log("book create error => ", error?.message);

                return responseHelper.unknown(error?.message);
            }
        },
        async detail(ctx) {
            const payload = ctx.params;
            const { id } = payload;

            try {
                const existingBook = await bookModel.findById(id);
                if (!existingBook)
                    return responseHelper.notFound("Book is not found.");

                return responseHelper.ok(existingBook);
            } catch (error) {
                console.log("book detail error => ", error?.message);

                return responseHelper.unknown(error?.message);
            }
        },
        async update(ctx) {
            const payload = ctx.params;
            const { id, body } = payload;

            try {
                const existingAuthor = await authorModel.findById(
                    body.authorId
                );
                if (!existingAuthor)
                    return responseHelper.notFound("Author is not found.");

                const updatedBook = await bookModel.findByIdAndUpdate(id, body);
                if (!updatedBook)
                    return responseHelper.notFound("Book is not found.");

                return responseHelper.ok(null, "Book is updated.");
            } catch (error) {
                console.log("book update error => ", error?.message);

                return responseHelper.unknown(error?.message);
            }
        },
        async delete(ctx) {
            const payload = ctx.params;
            const { id } = payload;

            try {
                const deletedBook = await bookModel.findByIdAndDelete(id);
                if (!deletedBook)
                    return responseHelper.notFound("Book is not found.");

                return responseHelper.ok(null, "Book is deleted.");
            } catch (error) {
                console.log("book delete error => ", error?.message);

                return responseHelper.unknown(error?.message);
            }
        },
    },
};

module.exports = services;
