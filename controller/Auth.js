const UserModel = require("../model/User");
const userModel = new UserModel();
class Auth {
    validate(req, res) {
        const { email, password } = req.body;
        userModel
            .getBy([
                {
                    field: "email",
                    operator: "==",
                    value: email,
                },
                {
                    field: "password",
                    operator: "==",
                    value: password,
                },
            ])
            .then((users) => {
                if (users.empty) {
                    res.status(401).send({ message: "Usuario nao autorizado" });
                    return;
                }

                res.json(users.docs[0].data());
            })
            .catch((error) => {
                res.status(500).send(error);
                console.error(error);
            });
    }
}

module.exports = Auth;
