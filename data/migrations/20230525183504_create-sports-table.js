/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('sports', tbl => {
    tbl.increments('sports_id');
    tbl.text('sport_name', 50)
        .notNullable()
    tbl.text('color_of_ball', 50)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sports');
};
