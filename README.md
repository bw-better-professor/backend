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

🚫 This is an example, replace this with the actions that pertain to your backend

`getOrgs()` -> Returns all organizations

`getOrg(orgId)` -> Returns a single organization by ID

`addOrg(org)` -> Returns the created org

`updateOrg(orgId)` -> Update an organization by ID

`deleteOrg(orgId)` -> Delete an organization by ID
<br>
<br>
<br>
`getUsers(orgId)` -> if no param all users

`getUser(userId)` -> Returns a single user by user ID

`addUser(user object)` --> Creates a new user and returns that user. Also creates 7 availabilities defaulted to hours of operation for their organization.

`updateUser(userId, changes object)` -> Updates a single user by ID.

`deleteUser(userId)` -> deletes everything dependent on the user

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app
    
    *  STAGING_DB - optional development db for using functionality not available in SQLite
    *  NODE_ENV - set to "development" until ready for "production"
    *  JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    *  SENDGRID_API_KEY - this is generated in your Sendgrid account
    *  stripe_secret - this is generated in the Stripe dashboard
    
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

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.
