/*
 * GET report page.
 */
var pgsql = require('../pgsql').connection; 

exports.index = function(req, res){
	
  var totalIncome = req.body.form_1040_total_income, 
      scheduleATotalItemizedDeductions = req.body.schedule_a_total_itemized_deductions,
      scheduleCTotalBusinessExpenses = req.body.schedule_c_total_business_expenses,
      scheduleFTotalFarmExpenses = req.body.schedule_f_total_farm_expenses,
      estimates = [],
      estimate,
      // AUDIT RISK RULES
      scheduleATotalItemizedDeductionsGT44PercentOfIncome = function(income, deductions) {
	var ratio = deductions/income;
	if(ratio > 0.44) {
		return estimate = 'SCHEDULE_A_DEDUCTIONS_GT_44_PERCENT_OF_INCOME';
	}
      },
      scheduleCTotalBusinessExpensesGT63PercentOfIncome = function(income, deductions) {
	var ratio = deductions/income;
	if(ratio > 0.63) {
		return estimate = 'SCHEDULE_C_DEDUCTIONS_GT_63_PERCENT_OF_INCOME';
	}
      },
      scheduleFTotalFarmExpensesGT67PercentOfIncome = function(income, deductions) {
	var ratio = deductions/income;
	if(ratio > 0.67) {
		return estimate = 'SCHEDULE_F_DEDUCTIONS_GT_67_PERCENT_OF_INCOME';
	}
      },

  // STORE FORM 1040 DATA ON THE DATABASE
  query = "",
  values = [];

  query += "INSERT INTO form_1040(total_income,"; 
  query += "schedule_a_total_itemized_deductions,"; 
  query += "schedule_c_total_business_expenses,"; 
  query += "schedule_f_total_farm_expenses) "; 
  query += "values($1, $2, $3, $4)";

  values.push(totalIncome);
  values.push(scheduleATotalItemizedDeductions);
  values.push(scheduleCTotalBusinessExpenses);
  values.push(scheduleFTotalFarmExpenses);

  pgsql.query(query, values); 

  // CALCULATE IRS AUDIT ESTIMATES
  if(estimate = scheduleATotalItemizedDeductionsGT44PercentOfIncome(
	  totalIncome, scheduleATotalItemizedDeductions)) {
	
	 estimates.push(estimate); 
  }

  if(estimate = scheduleCTotalBusinessExpensesGT63PercentOfIncome(
	  totalIncome, scheduleCTotalBusinessExpenses)) {
	
	 estimates.push(estimate); 
  }

  if(estimate = scheduleFTotalFarmExpensesGT67PercentOfIncome(
	  totalIncome, scheduleFTotalFarmExpenses)) {
	
	 estimates.push(estimate); 
  }

  // RENDER THE IRS AUDIT ESTIMATES REPORT
  res.render('report', {
	totalIncome: totalIncome,
	scheduleATotalItemizedDeductions: scheduleATotalItemizedDeductions,
	scheduleCTotalBusinessExpenses: scheduleCTotalBusinessExpenses,
	scheduleFTotalFarmExpenses: scheduleFTotalFarmExpenses,
	estimates: estimates,
	title: 'IRS audit risk estimator'
  });
};
