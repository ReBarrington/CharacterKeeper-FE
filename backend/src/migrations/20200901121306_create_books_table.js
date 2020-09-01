
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('books', tbl => {
            tbl.increments('id').primary().unique();
            tbl.string('title').notNullable().unique();
            tbl.string('description')
            tbl.boolean('completed').notNullable().defaultTo(0)
        })
  )
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('books')
};
