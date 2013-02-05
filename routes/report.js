/*
 * GET report page.
 */
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
      };

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

  res.render('report', {
	estimates: estimates 	    	
  });
};
