$(function(){
	$('.selected__option').click(function(){
		$(this).parent().toggleClass('active');
	});
	$('.search__select__list').click(function(){
		var op_text = $(this).text();
		$(this).parents().removeClass('active');

		$(this).parent().siblings('.selected__option').text(op_text);
		$('.selected__option__view').attr('value',op_text);
	});
});