const contatos = [
  { nomecontato: 'Sofia', telefone: '85991212121' },
  { nomecontato: 'Ada', telefone: '85989898989' },
  { nomecontato: 'Manoel Jr.', telefone: '85988787878'}
]

exports.up = knex => knex('contato').insert(contatos)

exports.down = knex => knex('contato').del()
  .whereIn('telefone', contatos.map(e => e.telefone))
