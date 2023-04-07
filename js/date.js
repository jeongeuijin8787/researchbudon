$(function(){

 $('input[name="start__datepicker"]').on('apply.daterangepicker', function(ev, picker) {
	  var bb = $("input[name='start__datepicker']").val();
		 var cc = new Date();
		 var ff = new Date(bb);
		ff.setHours(ff.getHours() + 3);

		 var year = ff.getFullYear();
		var month = ('0' + (ff.getMonth() + 1)).slice(-2);
		var day = ('0' + ff.getDate()).slice(-2);
		var hours = ('0' + ff.getHours()).slice(-2);
		var minutes = ('0' + ff.getMinutes()).slice(-2);
		var seconds = ('0' + ff.getSeconds()).slice(-2);
		
		$("input[name='end__datepicker']").val(year + "-" + month + "-" + day + " "+ hours + ":" + minutes + ":" + seconds);
  });

  $('input[name="start__datepicker"]').on('cancel.daterangepicker', function(ev, picker) {
	  $(this).val('');
  });


$('input[name="end__datepicker"]').change(function(){
	var bb = $("input[name='end__datepicker']").val();
	var cc = new Date();
	var ff = new Date(bb);
	ff.setHours(ff.getHours() - 3);

	 var year = ff.getFullYear();
	var month = ('0' + (ff.getMonth() + 1)).slice(-2);
	var day = ('0' + ff.getDate()).slice(-2);
	var hours = ('0' + ff.getHours()).slice(-2);
	var minutes = ('0' + ff.getMinutes()).slice(-2);
	var seconds = ('0' + ff.getSeconds()).slice(-2);

	
	$("input[name='start__datepicker']").val(year + "-" + month + "-" + day + " "+ hours + ":" + minutes + ":" + seconds);
});

});