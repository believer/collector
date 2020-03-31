exports.up = function (knex) {
  return knex.schema
    .createTable('manufacturer', (table) => {
      table.increments('id').primary()
      table.text('name').unique()
      table.integer('createdAt').defaultTo(knex.raw("(strftime('%s','now'))"))
      table.integer('updatedAt').defaultTo(knex.raw("(strftime('%s','now'))"))
    })
    .createTable('item', (table) => {
      table.increments('id').primary()
      table.text('name').notNull()
      table.text('serial_number').unique()
      table.text('product_number')
      table.integer('manufacturer_id').references('id').inTable('manufacturer')
      table.integer('quantity')
      table.text('manual')
      table.integer('purchase_date')
      table.decimal('initial_cost', 8, 2)
      table.integer('createdAt').defaultTo(knex.raw("(strftime('%s','now'))"))
      table.integer('updatedAt').defaultTo(knex.raw("(strftime('%s','now'))"))
    })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('manufacturer').dropTableIfExists('item')
}
