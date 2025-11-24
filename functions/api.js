// This is the catch all /api routes. It helps to avoid 404 errors
exports.handler = async (request) => {
    return {
        statusCode: 404, // Not found
        body: JSON.stringify({
            error: `${request.path} not found`,
        }),
    };
};
