var submit = function(ev) {

	var form = this;

	ev.preventDefault();

	_gaq.push(['_setCustomVar', 1, 'totalIncome',
	    form.elements['form_1040_total_income'].value]);
	_gaq.push(['_setCustomVar', 2, 'schedule_a_total_itemized_deductions',
	    form.elements['schedule_a_total_itemized_deductions'].value]);
	_gaq.push(['_setCustomVar', 3, 'schedule_c_total_business_expenses',
	    form.elements['schedule_c_total_business_expenses'].value]);
	_gaq.push(['_setCustomVar', 4, 'schedule_f_total_farm_expenses',
   	    form.elements['schedule_f_total_farm_expenses'].value]);

	_gaq.push(['_set', 'hitCallback', function() {
		form.submit();
	}]);
	_gaq.push(['_trackEvent', 'Form1040', 'Submit']);
}
$('#form_1040').bind('submit', submit);
