"use strict";

module.exports.register = async server => {
    server.route({
        method: 'GET',
        path: '/',
        handler: async(req, h) => {
            return 'My first hapi server';
        },
    });
}