const db = require('../database/dbConfig');

module.exports = {
    getStudents,
    findStudentById,
    updateStudent,
    removeStudent,

}

function getStudents() {
    return db.select("*").from('students')
}

function findStudentById(id) {
    return db('students')
    .where({id})
    .first()
}

function updateStudent(changes, id){
    return db('students')
    .where('id', id)
    .update(changes)
    .then(updated => {
        updated > 0 ? findStudentById(id) : null
    })
}

function removeStudent (id) {
    return db('students')
    .where('id', id)
    .del()
    
}

function getStudentList() {
    return db('students as s')
    .join('users as u', 's.professor_id', 'u.id')
    .select('s.id as studentId', 's.name', 's.email', 's.image_url')
    .where('s.professor_id', 'u.id')
}


