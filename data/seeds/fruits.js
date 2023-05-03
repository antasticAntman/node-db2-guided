/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fruits').truncate()
  await knex('fruits').insert([
    {fruits_name:'apple', avg_weight_size: 2.5, delicious: false},
    {fruits_name:'pear', avg_weight_size: 1.5, delicious: true},
    {fruits_name:'mango', avg_weight_size: 5.5, delicious: true}
  ]);
};
