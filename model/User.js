const BaseModel = require("./BaseModel");

class Users extends BaseModel {
    constructor() {
        super();
    }

    get(id) {
        return this.db.collection("users").doc(id).get();
    }

    getBy(conditions) {
        let query = this.db.collection("users");

        conditions.forEach((condition) => {
            query = query.where(condition.field, condition.operator, condition.value);
        });

        return query.get();
    }
}

module.exports = Users;
