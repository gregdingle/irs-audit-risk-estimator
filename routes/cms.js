/*
 * GET SEO friendly CMS pages.
 */

exports.youCantDeductThat = function(req, res){
  res.render('you-cant-deduct-that', {
 	title: 'Tax deductions' 
  });
};

exports.irsAuditsOfHighEarnersIncreaseSharply = function(req, res){
  res.render('irs-audits-of-high-earners-increase-sharply', {
 	title: 'IRS audits of high earners increase sharply' 
  });
};

exports.irsAuditStatistics = function(req, res){
  res.render('irs-audit-statistics', {
 	title: 'IRS Audit Statistics' 
  });
};

exports.bewareSharpIncreaseInAuditRates = function(req, res){
  res.render('beware-sharp-increase-in-audit-rates', {
 	title: 'Beware Sharp Increase in Audit Rates' 
  });
};
