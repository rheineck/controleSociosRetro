exports.up = knex => knex.schema.createTable("cars", table => {
  table.increments('id');
  table.text('brand');
  table.text('model');
  table.integer('year');
  table.integer('owner_id').references('id').inTable('associates');
});

exports.down = knex => knex.schema.dropTable("cars");