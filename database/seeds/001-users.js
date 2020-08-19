
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'michaelscott', password: 'paper123', department: 'Management'},
        {id: 2, username: 'pambeesly', password: 'pencil123', department: 'Reception'},
        {id: 3, username: 'dwightschrute', password: 'pen123', department: 'Assistant Management'}
      ]);
    });
};
