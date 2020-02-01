
exports.seed = function(knex) {

  return knex('projects').del()
    .then(function () {

      return knex('projects').insert([
        {id: 1, student_id: 1, title: "Recommendation Due", due_date: "02-13-2020", reminder_time: "3:00", notes: "Must write recommendation for masters program"},
        {id: 2, student_id: 2, title: "Comments on Research Paper Due", due_date: "02-23-2020", reminder_time: "4:00", notes: "Must return comments and edits for midterm paper"},
        {id: 3, student_id: 2, title: "Give feedback on mock interview", due_date: "02-28-2020", reminder_time: "12:00", notes: "Give feedback for mock interview excercise"},
        {id: 4, student_id: 3, title: "Letter of Recommendation", due_date: "03-13-2020", reminder_time: "1:00", notes: "Must write recommendation for job application"},
        {id: 5, student_id: 4, title: "Due from Student", due_date: "02-10-2020", reminder_time: "7:00", notes: "Remind student that research paper is due"},
      ]);
    });
};
