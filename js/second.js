$(function(){

		$(".search__select__list").click(function(){
			if($('.selected__option').text() == "10") {
				 var bb = $("input[name='start__datepicker']").val();
				 var cc = new Date();
				 var ff = new Date(bb);
				ff.setSeconds(ff.getSeconds() + 10);

				 var year = ff.getFullYear();
				var month = ('0' + (ff.getMonth() + 1)).slice(-2);
				var day = ('0' + ff.getDate()).slice(-2);
				var hours = ('0' + ff.getHours()).slice(-2);
				var minutes = ('0' + ff.getMinutes()).slice(-2);
				var seconds = ('0' + ff.getSeconds()).slice(-2);
				$("input[name='end__datepicker']").val(year + "-" + month + "-" + day + " "+ hours + ":" + minutes + ":" + seconds);
			} else {
					
				 var bb = $("input[name='start__datepicker']").val();
				 var cc = new Date();
				 var ff = new Date(bb);
				ff.setSeconds(ff.getSeconds() + 30);

				 var year = ff.getFullYear();
				var month = ('0' + (ff.getMonth() + 1)).slice(-2);
				var day = ('0' + ff.getDate()).slice(-2);
				var hours = ('0' + ff.getHours()).slice(-2);
				var minutes = ('0' + ff.getMinutes()).slice(-2);
				var seconds = ('0' + ff.getSeconds()).slice(-2);
				$("input[name='end__datepicker']").val(year + "-" + month + "-" + day + " "+ hours + ":" + minutes + ":" + seconds);
			}
		});


	$('input[name="end__datepicker"]').change(function(){
		$(".search__select__list").click(function(){
			if($('.selected__option').text() == "10") {
				var bb = $("input[name='end__datepicker']").val();
				var cc = new Date();
				var ff = new Date(bb);
				ff.setSeconds(ff.getSeconds() - 10);


				var year = ff.getFullYear();
				var month = ('0' + (ff.getMonth() + 1)).slice(-2);
				var day = ('0' + ff.getDate()).slice(-2);
				var hours = ('0' + ff.getHours()).slice(-2);
				var minutes = ('0' + ff.getMinutes()).slice(-2);
				var seconds = ('0' + ff.getSeconds()).slice(-2);
				$("input[name='start__datepicker']").val(year + "-" + month + "-" + day + " "+ hours + ":" + minutes + ":" + seconds);
			} else {
				var bb = $("input[name='end__datepicker']").val();
				var cc = new Date();
				var ff = new Date(bb);
				ff.setSeconds(ff.getSeconds() - 30);


				var year = ff.getFullYear();
				var month = ('0' + (ff.getMonth() + 1)).slice(-2);
				var day = ('0' + ff.getDate()).slice(-2);
				var hours = ('0' + ff.getHours()).slice(-2);
				var minutes = ('0' + ff.getMinutes()).slice(-2);
				var seconds = ('0' + ff.getSeconds()).slice(-2);
				$("input[name='start__datepicker']").val(year + "-" + month + "-" + day + " "+ hours + ":" + minutes + ":" + seconds);
			}	
		});
	});

});