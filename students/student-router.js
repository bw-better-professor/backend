const express = require('express');

const Students = require('./students-model');

const router = express.Router();

// router.get('/', (req, res) => {
//     Students.getStudents()
//     .then(students => {
//         res.json(students)
//     })
//     .catch(err => {
//         console.log(err)
//         res.status(500).json({errorMessage: "Database failed to get users. Contact your backend"})
//     })
//  });

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Students.findStudentById(id)
    .then(student => {
        if (student) {
            res.json(student)
        } else {
            res.status(404).json({message: 'There is no user with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: 'Failed to get user. Contact your backend'})
    })
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Students.findStudentById(id)
    .then(student => {
        if (student) {
            Students.updateStudent(changes, id)
            .then(updatedStudent => {
                res.json(updatedStudent);
            })
        } else {
            res.status(404).json({message: "No user with that id exists"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to update user. Contact your backend"})
    })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Students.removeStudent(id)
    .then(deleted => {
        if (deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: 'No user with that id exists'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Failed to delete user. Contact your backend"})
    })
});
 module.exports = router;