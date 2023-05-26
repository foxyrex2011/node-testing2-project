/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  return knex('sports').truncate()
    .then(function () {
      return knex('sports').insert([
        {sport_name: 'golf', color_of_ball: 'white ball'},
        {sport_name: 'basketball', color_of_ball: 'orange ball'},
      ])
    })
};
