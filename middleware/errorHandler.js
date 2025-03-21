const { constants } = require("../constants")
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "validation Failed",
                message: err.message || "Internal Server Error",
                stackTrace: err.stack
            })
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "not found",
                message: err.message || "Internal Server Error",
                stackTrace: err.stack

            })
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "un authorized",
                message: err.message || "Internal Server Error",
                stackTrace: err.stack

            })
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "forbidden",
                message: err.message || "Internal Server Error",
                stackTrace: err.stack

            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "internal server error ",
                message: err.message || "Internal Server Error",
                stackTrace: err.stack

            })
        default:
            console.log("No error")
            break;
    }

};

module.exports = errorHandler;
