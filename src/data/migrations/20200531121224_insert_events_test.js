
exports.up = function(knex) {
    return knex('events').insert({
        'userId': 'user1234',
        'title': 'appointment',
        'description': 'description stuff',
        'startDate': '2020-03-31',
        'startTime': '14:30',
        'endDate': null,
        'endTime': null,
    });
};

exports.down = function(knex) {
};
