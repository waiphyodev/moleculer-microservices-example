const { Schema, model } = require("mongoose");

const authorSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required."],
        },
    },
    {
        versionKey: false,
        collection: "authors",
    }
);

module.exports = model("Author", authorSchema);
