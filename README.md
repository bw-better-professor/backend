# Backend

# API Documentation

#### 1️⃣ Backend delpoyed at [Heroku](🚫add URL here) <br>

## 1️⃣ Getting started

To get the server running locally:

🚫 adjust these scripts to match your project

- Clone this repo
- **npm i** to install all required dependencies
- **npm run server** to start the local server
- **npm test** to start server using testing environment


## 2️⃣ Endpoints

The following Endpoints have been provided for the project

#### Login/Register Routes

| Method | Endpoint                |  Description                                  |
| ------ | ----------------------- |  -------------------------------------------- |
| POST   | `/api/auth/login`       |  Allows a user to login and returns token     |
| POST   | `/api/auth/register`    |  Creates a new user                           |


#### User Routes

| Method | Endpoint                |  Description                                  |
| ------ | ----------------------- |  -------------------------------------------- |
| GET    | `/api/user`             |  Returns all users registered                 |
| GET    | `/api/user/:id`         |  Returns user info with the corresponding id  |
| GET    | `/api/user/:id/students`|  Returns all students belonging to that user  |
| PUT    | `/api/user/:id`         |  Edits user with the corresponding id         |
| DELETE | `/api/user/:id`         |  Deletes user with the corresponding id       |

#### Student Routes

| Method | Endpoint                     |  Description                                        |
| ------ | -----------------------      |  -------------------------------------------------- |
| GET    | `/api/students`              |  Returns ALL students in the database               |
| GET    | `/api/students/:id`          |  Returns student info with the corresponding id     |
| GET    | `/api/students/:id/projects` |  Returns all projects belonging to that student     |
| POST   | `/api/students`              |  Creates a new student                              |
| PUT    | `/api/students/:id`          |  Edits info for student with corresponding id       |
| DELETE | `/api/students/:id`          |  Deletes student with the corresponding id          |

#### Project Routes

| Method | Endpoint                     |  Description                                        |
| ------ | -----------------------      |  -------------------------------------------------- |
| GET    | `/api/project:id`            |  Returns project with the corresponding id          |
| POST   | `/api/projects`              |  Creates a new project                              |
| PUT    | `/api/projects/:id`          |  Edits info for project with corresponding id       |
| DELETE | `/api/projects/:id`          |  Deletes project with the corresponding id          |

#### Login/Register Routes

| Method | Endpoint                     |  Description                                        |
| ------ | -----------------------      |  -------------------------------------------------- |
| POST   | `/api/auth/login`            |  Allows a user to login                             |
| POST   | `/api/auth/register`         |  Creates a new user                                 |

# Data Model

Below demonstrates the shape of the data for users, students, and projects

#### USERS

---

```
{
    id: UUID
    username: STRING
    password: STRING
}
```

#### STUDENTS

---

```
{
    id: UUID
    professor_id: UUID foreign key in USERS table
    name: STRING
    email: STRING
    image_url: STRING
}
```

#### PROJECTS

---

```
{
    id: UUID
    student_id: UUID foreign key in STUDENT table
    title: STRING
    due_date: DATE
    reminder_time: TIME
    notes: STRING
}
```

## 2️⃣ Actions

Actions that pertain to this backend: 

`getUsers()` -> Returns all users

`findUserById(id)` -> Returns a single user by ID

`updateUser(changes, id)` -> Update a user by ID

`removeUser(id)` -> Delete a user by ID

`getStudentList(id)` -> Returns a list of students that are assigned to the user with the selected id
<br>
<br>
<br>

`getStudents()` -> Returns all students in the database 

`findStudentById(id)` -> Returns a single user by user ID

`addStudent(newStudent)` --> Creates a new student and returns that student.

`updateStudent(id, changes)` -> Updates a single student by ID.

`deleteStudent(id)` -> deletes the student

`getProjectsList(id)` -> Returns a list of projects assigned to that student

<br>
<br>
<br>

`findById(id)` -> Returns a single project by user ID

`addProject(newProject)` --> Creates a new project and returns that project.

`updateProject(id, changes)` -> Updates a single project by ID.

`deleteProject(id)` -> deletes the project


## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

FrontEnd Documentation Pending
