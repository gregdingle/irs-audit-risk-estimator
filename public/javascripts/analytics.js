var submit = function(ev) {
	var form = this;
	ev.preventDefault();
	_gaq.push(['_set', 'hitCallback', function() {
		form.submit();
	}]);
	_gaq.push(['_trackEvent', 'Form1040', 'Submit']);
}
$('#form_1040').bind('submit', submit);
