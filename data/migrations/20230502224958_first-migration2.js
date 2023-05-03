/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('fruits', table => {
    table.increments('fruits_id')
    table.string('fruits_name', 128).notNullable().unique()
    table.decimal('avg_weight_size').notNullable()
    table.boolean('delicious')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('fruits')
};
