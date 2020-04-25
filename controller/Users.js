const UserModel = require("../model/User");
const userModel = new UserModel();

class Users {
    get(req, res) {
        const { id } = req.params;

        userModel
            .get(id)
            .then((user) => {
                if (!user.exists) {
                    res.status(404).send({ message: "User not found" });
                    return;
                }

                res.json(user.data());
            })
            .catch((error) => {
                res.status(500).send(error);
                console.error(error);
            });
    }
}

module.exports = Users;
