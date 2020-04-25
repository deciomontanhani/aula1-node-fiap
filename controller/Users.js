class Users {
    get(req, res) {
        res.send(`Eu recebi o parametro ${req.params.id}`);
    }
}

module.exports = Users;