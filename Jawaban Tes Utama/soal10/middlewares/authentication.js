module.exports = (req, res, next) => {
    const userId = req?.headers['user-id'];
    const scope = req?.headers?.scope;

    if (userId !== 'ifabula' || scope !== 'user') {
        return res.status(401).send({
                responseCode: 401,
                responseMessage: "UNAUTHORIZED"
            });
    } else {
        next()
    }
}