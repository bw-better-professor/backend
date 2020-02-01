const db = require('../database/dbConfig');

module.exports = {
    getUsers,
    findUserById,
    updateUser,
    removeUser

}

function getUsers() {
    return db.select("*").from('users')
}

function findUserById(id) {
    return db('users')
    .where({id})
    .first()
}

function updateUser(changes, id){
    return db('users')
    .where('id', id)
    .update(changes)
    .then(updated => {
        updated > 0 ? findById(id) : null
    })
}

function removeUser (id) {
    return db('users')
    .where('id', id)
    .del()
    
}

