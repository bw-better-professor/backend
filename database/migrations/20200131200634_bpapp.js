exports.up = async function(knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id").unique()
        table.string("email").unique().notNullable()
        table.string("password").notNullable()
  
    })
  
    await knex.schema.createTable("students", (table) => {
      table.increments("id").unique()
      table.integer("professor_id")
      .notNullable()
      .references("id")
      .inTable("users")
      table.string("name").notNullable()
      table.string("email").notNullable()
      table.string("image_url")
  
  })
  
    await knex.schema.createTable("projects", (table) => {
        table.increments("id").unique()
        table.integer("student_id")
        .notNullable()
        .references("id")
        .inTable("students")
        table.date("due_date")
        table.time("reminder_time")
        table.string("notes")
  
    })
  
    
  };
  
  exports.down = async function(knex) {
      await knex.schema.dropTableIfExists("projects")
      await knex.schema.dropTableIfExists("students")
      await knex.schema.dropTableIfExists("users")
  
  };
  