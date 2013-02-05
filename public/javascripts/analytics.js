var submit = function(ev) {

	_gaq.push(['_setCustomVar', 1, 'totalIncome',
	    this.elements['form_1040_total_income'].value]);
	_gaq.push(['_setCustomVar', 1, 'totalIncome',
	    this.elements['schedule_a_total_itemized_deductions'].value]);
	_gaq.push(['_setCustomVar', 1, 'totalIncome',
	    this.elements['schedule_c_total_business_expenses'].value]);
	_gaq.push(['_setCustomVar', 1, 'totalIncome',
   	    this.elements['schedule_f_total_farm_expenses'].value]);

	_gaq.push(['_trackEvent', 'Form1040', 'Submit']);
}
$('#form_1040').bind('submit', submit);
