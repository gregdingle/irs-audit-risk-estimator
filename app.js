
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , report = require('./routes/report')
  , cms = require('./routes/cms')
  , http = require('http')
  , path = require('path')
  , engine = require('ejs-locals');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.engine('ejs', engine);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.post('/report', report.index);

// TODO: CUSTOM CMS
app.get('/you-cant-deduct-that', cms.youCantDeductThat);
app.get('/irs-audits-of-high-earners-increase-sharply', cms.irsAuditsOfHighEarnersIncreaseSharply);
app.get('/irs-audit-statistics', cms.irsAuditStatistics);
app.get('/beware-sharp-increase-in-audit-rates', cms.bewareSharpIncreaseInAuditRates);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
