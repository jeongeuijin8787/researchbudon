$(function() {
	$("#check_all").click(function() {
		if($("#check_all").is(":checked")) $("input[name=list__chk]").prop("checked", true);
		else $("input[name=list__chk]").prop("checked", false);
	});

	$("input[name=list__chk]").click(function() {
		var total = $("input[name=list__chk]").length;
		var checked = $("input[name=list__chk]:checked").length;

		if(total != checked) $("#check_all").prop("checked", false);
		else $("#check_all").prop("checked", true); 
	});
});




//APAC_ALL
$(function() {
	$("#APAC__check__all").click(function() {
		if($("#APAC__check__all").is(":checked")) $("input[name=APAC__filter__chk]").prop("checked", true);
		else $("input[name=APAC__filter__chk]").prop("checked", false);
	});

	$("input[name=APAC__filter__chk]").click(function() {
		var total = $("input[name=APAC__filter__chk]").length;
		var checked = $("input[name=APAC__filter__chk]:checked").length;

		if(total != checked) $("#APAC__check__all").prop("checked", false);
		else $("#APAC__check__all").prop("checked", true); 
	});
});


//AMER_ALL
$(function() {
	$("#AMER__check__all").click(function() {
		if($("#AMER__check__all").is(":checked")) $("input[name=AMER__filter__chk]").prop("checked", true);
		else $("input[name=AMER__filter__chk]").prop("checked", false);
	});

	$("input[name=AMER__filter__chk]").click(function() {
		var total = $("input[name=AMER__filter__chk]").length;
		var checked = $("input[name=AMER__filter__chk]:checked").length;

		if(total != checked) $("#AMER__check__all").prop("checked", false);
		else $("#AMER__check__all").prop("checked", true); 
	});
});

//EMEA_ALL
$(function() {
	$("#EMEA__check__all").click(function() {
		if($("#EMEA__check__all").is(":checked")) $("input[name=EMEA__filter__chk]").prop("checked", true);
		else $("input[name=EMEA__filter__chk]").prop("checked", false);
	});

	$("input[name=EMEA__filter__chk]").click(function() {
		var total = $("input[name=EMEA__filter__chk]").length;
		var checked = $("input[name=EMEA__filter__chk]:checked").length;

		if(total != checked) $("#EMEA__check__all").prop("checked", false);
		else $("#EMEA__check__all").prop("checked", true); 
	});
});