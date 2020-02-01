const db = require('../database/dbConfig')


module.exports = {
    
    addProject,
    updateProject,
    deleteProject,
}

function addProject () {
    return db('projects')
    .insert({name:name, type: type, duedate:due})
    
}

function updateProject(filter){
    return db('users')
    .where(filter).update()
}

function deleteProject(){
    return db('project').where({id}).del()
}