const store = require("./store");

function addUser(name) {

    if (!name) {
        return Promise.reject("Invalid name");
    }

    const user = {
        name: name,
    }
    return store.add(user);
}

function getUsers() {
    return new Promise((resolve, reject) => {
        try {
            resolve(store.list());
        }catch (err) {
            reject(err);
        }
    })
}

module.exports = {
    addUser,
    getUsers,
}