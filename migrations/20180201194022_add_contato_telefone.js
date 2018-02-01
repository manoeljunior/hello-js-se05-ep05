
exports.up = knex => knex.schema.alterTable('contato', tb => {
  tb.string('telefone', 11)
})

exports.down = knex => knex.schema.table('contato', tb => {
  tb.dropColumn('telefone')
})
