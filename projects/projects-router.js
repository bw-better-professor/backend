const express = require("express");
const router = express.Router();

const Projects = require('./project-model')


router.post("api/project", (req, res) => {
    Projects.addProject()
        then(project =>{

        })
        .catch(error=>{
            res.status(500).json({
                message: "error adding the project"
            })
        })
})


router.put("api/project/:id", (req, res) => {
    Projects.updateProject(req.params.id)
        .then(project)
        .catch

})



router.delete("api/project/:id", (req, res) => {
    Projects.deleteProject(req.params.id)
    .then(delete => { 
        res.status(200).json({ message: "recipe delete"})

    })
    .catch(error => {
        res.status(500).json({
          message: "error deleting the recipe"
        });
      });


})