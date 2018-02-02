
exports.up = knex => knex.schema.createTable('produto', tb => {
  tb.increments('idproduto')
  tb.string('nomeproduto')
  tb.timestamp("dtcriacaoproduto").notNullable().defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('produto')
