const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required."],
        },
        authorId: {
            type: Schema.Types.ObjectId,
            ref: "Author",
            required: [true, "Author is required."],
        },
    },
    {
        collection: "books",
        versionKey: false,
    }
);

module.exports = model("Book", bookSchema);
