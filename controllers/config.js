exports.getConfig = (req, res) => {
    const payload = {
        status: 'ok',
    }
    res.status(200).send(payload)
}
