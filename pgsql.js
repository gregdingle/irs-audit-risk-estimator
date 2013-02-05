/*
 * Database module
 */
var pg = require('pg'),
    settings = require('./settings'),

    dbURL = "tcp://" + settings.user + ":" + settings.password + 
    	"@" + settings.host + "/" + settings.database,

    pgsql = new pg.Client(dbURL);

pgsql.connect();

exports.connection = pgsql;



