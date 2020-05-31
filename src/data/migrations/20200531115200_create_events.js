const Knex = require('knex');

exports.up = function(knex) {
    return knex.schema.createTable('events', (table) => {
        table.increments().notNullable(),
        table.string('userId', 50).notNullable(),
        table.string('title', 200).notNullable(),
        table.string('description', 1000).nullable(),
        table.date('startDate').notNullable(),
        table.time('startTime').nullable(),
        table.date('endDate').nullable(),
        table.time('endTime').nullable(),
        table.index('userId', 'idx_events_userId')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('events');
};
