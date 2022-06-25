/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('alloffers', function (table) {
      table.increments('Promotion_id') // auto-numbering primary key column
      table.date('validSince').notNullable()
      table.date('validThrough').notNullable()
      table.integer('usageLimit').notNullable()
      table.string('image').notNullable()
      table.string('short_descriptin').notNullable()
      table.string('full_descriptin').notNullable()
      table.string('typep').notNullable()
      table.integer('redeemedPoints').notNullable()
      table.string('Ally').notNullable()
      table.integer('allyId').notNullable()      
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function (knex) {
    // if we wanted to undo this migration, then we would drop the table
    return knex.schema.dropTable('All_Offers')
  }