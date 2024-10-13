const helpers = {
    ok: (data, message) => ({
        code: 200,
        status: "OK",
        message: message ? message : "Success",
        data: data && data,
    }),
    created: (message) => ({
        code: 201,
        status: "CREATED",
        message: message ? message : "Resource is created.",
    }),
    badRequest: (message) => ({
        code: 400,
        status: "BAD REQUEST",
        message: message ? message : "Something went wrongs.",
    }),
    notFound: (message) => ({
        code: 404,
        status: "NOT FOUND",
        message: message ? message : "Resource is not found.",
    }),
    unknown: (message) => ({
        code: 500,
        status: "UNKNOWN",
        message: message ? message : "Internal Server Error",
    }),
};

module.exports = helpers;
