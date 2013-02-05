var settings = {
	user: 'postgres',
	password: 'XXXXX',
	host: 'localhost',
	database: 'irs_audit_estimator'
}

for(var s in settings) {
	exports[s] = settings[s];
}
