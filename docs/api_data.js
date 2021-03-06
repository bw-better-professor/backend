define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C:\\Users\\Emily\\lambdaprojects\\backend\\docs\\main.js",
    "groupTitle": "C:\\Users\\Emily\\lambdaprojects\\backend\\docs\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "api/auth/login",
    "title": "Login as a user",
    "name": "loginUser",
    "group": "Login/Register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's desired login- can be an email address or a username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's desired password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"username\": \"bruce@banner.com\",\n\t\"password\": \"pass\"   \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>welcome message with user's username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJydWNlQGJhbm5lci5jb20iLCJ1c2VySWQiOjMsImlhdCI6MTU4MDY4OTUzNywiZXhwIjoxNTgwNjkzMTM3fQ.YEJbwZVYl05mG6loRYlsMbAfpce36y3f3J-6fudoxsk\",\n   \"message\": \"Welcome bruce@banner.com!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/login.js",
    "groupTitle": "Login/Register"
  },
  {
    "type": "post",
    "url": "api/auth/register",
    "title": "Add/Create a new user",
    "name": "registerUser",
    "group": "Login/Register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's desired login- can be an email address or a username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's desired password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"username\": \"bruce@banner.com\",\n\t\"password\": \"pass\"   \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n[\n   3\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/login.js",
    "groupTitle": "Login/Register"
  },
  {
    "type": "post",
    "url": "api/projects",
    "title": "Add/Create a new project",
    "name": "addProject",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "student_id",
            "description": "<p>id of student the project is connected to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>project title</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "due_date",
            "description": "<p>date the project is due</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "reminder_time",
            "description": "<p>time to send reminder</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>notes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n   \"student_id\": 1,\n   \"title\": \"Final Exam Due\",\n   \"due_date\": \"03-13-2020\",\n   \"reminder_time\": \"3:00\",\n   \"notes\": \"Student must take final exam\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "student_id",
            "description": "<p>id of student the project is connected to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>project title</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "due_date",
            "description": "<p>date the project is due</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "reminder_time",
            "description": "<p>time to send reminder</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>notes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": 6,\n   \"student_id\": 1,\n   \"title\": \"Final Exam Due\",\n   \"due_date\": \"03-13-2020\",\n   \"reminder_time\": \"3:00\",\n   \"notes\": \"Student must take final exam\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./projects/projects-router.js",
    "groupTitle": "Projects"
  },
  {
    "type": "delete",
    "url": "api/projects/:id",
    "title": "DELETE a Project",
    "name": "deleteProject",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Project Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"removed\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./projects/projects-router.js",
    "groupTitle": "Projects"
  },
  {
    "type": "put",
    "url": "api/projects/:id",
    "title": "EDIT a Project by Id",
    "name": "editProject",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Project id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./projects/projects-router.js",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "api/projects/:id",
    "title": "GET a Project by Id",
    "name": "getProjectById",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Student id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "student_id",
            "description": "<p>id of the student that this project belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Project title</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "due_date",
            "description": "<p>date the project is due</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "reminder_time",
            "description": "<p>time to send reminder</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>notes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": 1,\n   \"student_id\": 1,\n   \"title\": \"Recommendation Due\",\n   \"due_date\": \"02-13-2020\",\n   \"reminder_time\": \"3:00\",\n   \"notes\": \"Must write recommendation for masters program\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./projects/projects-router.js",
    "groupTitle": "Projects"
  },
  {
    "type": "post",
    "url": "api/students",
    "title": "Add/Create a new student",
    "name": "addStudent",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "professor_id",
            "description": "<p>id of professor the student is connected to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>student name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>student email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>image url, optional field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n   \"professor_id\": 3,\n   \"name\": \"Emily Bruner\",\n   \"email\": \"emily@gmail.com\",\n   \"image_url\": \"https://images.unsplash.com/photo-1580490390526-9fe5df5e68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80\"   \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Student id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "professor_id",
            "description": "<p>Id of the professor that the student is connected to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Student Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Student Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>image url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 9,\n  \"professor_id\": 3,\n  \"name\": \"Emily Bruner\",\n  \"email\": \"emily@gmail.com\",\n  \"image_url\": \"https://images.unsplash.com/photo-1580490390526-9fe5df5e68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./students/student-router.js",
    "groupTitle": "Students"
  },
  {
    "type": "delete",
    "url": "api/students/:id",
    "title": "DELETE a Student",
    "name": "deleteStudent",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Student Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"removed\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./students/student-router.js",
    "groupTitle": "Students"
  },
  {
    "type": "put",
    "url": "api/students/:id",
    "title": "EDIT a Student by Id",
    "name": "editStudent",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Student id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./students/student-router.js",
    "groupTitle": "Students"
  },
  {
    "type": "get",
    "url": "api/students/:id/projects",
    "title": "GET a list of Projects belonging to a student",
    "name": "getProjectList",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Student id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"projectId\": 2,\n       \"title\": \"Comments on Research Paper Due\",\n       \"due_date\": \"02-23-2020\",\n       \"reminder_time\": \"4:00\",\n       \"notes\": \"Must return comments and edits for midterm paper\"\n   },\n   {\n       \"projectId\": 3,\n       \"title\": \"Give feedback on mock interview\",\n       \"due_date\": \"02-28-2020\",\n       \"reminder_time\": \"12:00\",\n       \"notes\": \"Give feedback for mock interview excercise\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./students/student-router.js",
    "groupTitle": "Students"
  },
  {
    "type": "get",
    "url": "api/students/:id",
    "title": "GET a Student by Id",
    "name": "getStudentById",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Student id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>id of user who created that student</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Student name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Student email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>image url for student photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 3,\n  \"professor_id\": 1,\n  \"name\": \"John Smith\",\n  \"email\": \"john@gmail.com\",\n  \"image_url\": \"https://ibb.co/Pr9g04c\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./students/student-router.js",
    "groupTitle": "Students"
  },
  {
    "type": "get",
    "url": "api/students",
    "title": "GET a list of all students",
    "name": "getStudents",
    "group": "Students",
    "version": "0.0.0",
    "filename": "./students/student-router.js",
    "groupTitle": "Students"
  },
  {
    "type": "delete",
    "url": "api/users/:id",
    "title": "DELETE a User",
    "name": "deleteUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"removed\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users/users-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "api/users/:id",
    "title": "EDIT a User by Id",
    "name": "editUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User email is used for username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users/users-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/users/:id/students",
    "title": "GET a list of Students belonging to a professor/user",
    "name": "getStudentList",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"studentId\": 1,\n       \"name\": \"Calvin Riley\",\n       \"email\": \"calvin@gmail.com\",\n       \"image_url\": \"https://ibb.co/D517kWp\"\n   },\n   {\n       \"studentId\": 2,\n       \"name\": \"Cindy Lou\",\n       \"email\": \"cindy@gmail.com\",\n       \"image_url\": \"https://ibb.co/gjnrsxT\"\n   },\n   {\n       \"studentId\": 3,\n       \"name\": \"John Smith\",\n       \"email\": \"john@gmail.com\",\n       \"image_url\": \"https://ibb.co/Pr9g04c\"\n   },\n  {\n       \"studentId\": 4,\n       \"name\": \"Julian Mills\",\n       \"email\": \"julian@gmail.com\",\n       \"image_url\": \"https://ibb.co/R6kSgDG\"\n   },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users/users-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/users/:id",
    "title": "GET a User by Id",
    "name": "getUserById",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 2,\n  \"username\": \"test2@test.com\",\n  \"password\": \"pass\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users/users-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/users",
    "title": "GET a list of all users",
    "name": "getUsers",
    "group": "Users",
    "version": "0.0.0",
    "filename": "./users/users-router.js",
    "groupTitle": "Users"
  }
] });
