const UserModel = require('../model/User');
const userModel = new UserModel();

class Users {
    get(req, res) {
        const { id } = req.params;

        userModel.get(id)
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error)
            })

        res.send(`Eu recebi o parametro ${id}`);
    }
}

module.exports = Users;