#IRS audit risk estimator

To run IRS audit risk estimator [node.js][1] must be installed on your system.

* If this is the case just clone the repo to a folder of your choice and do:

    npm install (NOTE: the node-postgres module might require libpq-dev library to be previously installed)

* Install postgreSQL and create the database that will store form_1040 data

* Change settings.js 

* Load scripts/setup.sql into the database

* Run the application

    node app.js	

And access the application on http://localhost:3000

[1]:http://nodejs.org/



