
exports.seed = function(knex) {

  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: "test@test.com", password: "pass"},
        {id: 2, username: 'test2@test.com', password: "pass"}
       
      ]);
    });
};
