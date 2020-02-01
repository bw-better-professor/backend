
exports.seed = function(knex) {

      return knex('users').insert([
        {username: "demo@test.com", password: "pass"},
        {username: 'demo2@test.com', password: "pass2"}
       
      ]);
};
