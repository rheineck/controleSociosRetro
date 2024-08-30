exports.up = knex => knex.schema.createTable("associates", table => {
  table.increments('id');
  table.text('name');
  table.text('email');
  table.text('maritalStatus');
  table.text('spouse');
  table.text('position');
  table.text('address');
  table.integer('number');
  table.text('district');
  table.text('complement');
  table.text('city');
  table.text('state');
  table.text('cep');
  table.text('career');
  table.text('rg');
  table.text('cpf');
  table.text('status');
  table.text('phone');
  table.text('picture');
  table.boolean('isUser');
  table.integer('user_id');
  table.text('created_at').default(knex.fn.now());
  table.text('updated_at').default(knex.fn.now());
})

exports.down = knex => knex.schema.dropTable("associates");