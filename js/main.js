
$(function(){

	// 공통
	$(".top__profile__box").click(function(){
		$(".top__profile__menu").fadeToggle(200);
		$(".top__profile__box").toggleClass("active");
	});

	$('.pg__first > img').mouseenter(function(){
		$(this).attr({ src: "./images/icon_paging_first_on.svg"});
	});
	$('.pg__first > img').mouseleave(function(){
		$(this).attr({src:"./images/icon_paging_first.svg"});
	});
	
	$('.pg__prev > img').mouseenter(function(){
		$(this).attr({ src: "./images/icon_paging_prev_on.svg"});
	});
	$('.pg__prev > img').mouseleave(function(){
		$(this).attr({ src: "./images/icon_paging_prev.svg" });
	});
	
	$('.pg__next > img').mouseenter(function(){
		$(this).attr({ src: "./images/icon_paging_next_on.svg" });
	});
	$('.pg__next > img').mouseleave(function(){
		$(this).attr({ src: "./images/icon_paging_next.svg" });
	});
	
	$('.pg__last > img').mouseenter(function(){
		$(this).attr({ src: "./images/icon_paging_last_on.svg" });
	});
	$('.pg__last > img').mouseleave(function(){
		$(this).attr({ src: "./images/icon_paging_last.svg" });
	});
	// 공통



	// Real-Time View
	$('.container__help__wr').mouseenter(function(){
		$('.container__help__content__wr').fadeIn(200);
	});
	$('.container__help__wr').mouseleave(function(){
		$('.container__help__content__wr').fadeOut(200);
	});

	$('.container__list__hd > li.alarm .icon').mouseenter(function(){
		$(this).attr({ src: "./images/icon_alarm_on2.svg" });
	});
	$('.container__list__hd > li.alarm .icon').mouseleave(function(){
		$(this).attr({ src: "./images/icon_alarm_off2.svg" });
	});

	$('.container__list__alarm__btn > img').mouseenter(function(){
		$(this).attr({ src: "./images/icon_alarm_on.svg" });
	});
	$('.container__list__alarm__btn > img').mouseleave(function(){
		$(this).attr({ src: "./images/icon_alarm_off.svg" });
	});


	$('.popup__close__btn, .popup__bg').click(function(){
		$('.popup__wr').hide();
	});

	//#tab__contents__box02 올체크 클릭 시 전체 체크
	$('#tab__contents__box02 input[name=all__check]').on('click', function(){
		var checked = $(this).is(':checked');
		
		if(checked) {
			$('#tab__contents__box02').find('.all__check01').prop('checked', true);
		} else {
			$('#tab__contents__box02').find('.all__check01').prop('checked', false);
		}
	});
	//#tab__contents__box02 개별 체크 풀 시 전체 체크 풀리게
	$('#tab__contents__box02 .all__check01').on('click', function(){
		var chkGroup = $(this).closest('.popup__contlist__wr').find('.popup__slide__btn');
		var chkGroup_cnt = chkGroup.length;
		checked_cnt = $('#tab__contents__box02 .all__check01:checked').length;
		console.log('현재'+chkGroup_cnt);
		console.log('총'+checked_cnt);
		if (checked_cnt < chkGroup_cnt) {
			$('#tab__contents__box02 input[name=all__check]').prop('checked', false);
		} else if (checked_cnt == chkGroup_cnt) {
			$('#tab__contents__box02 input[name=all__check]').prop('checked', true);
		}
	});
	//personal__popup__wr 올체크 클릭 시 전체 체크
	$('.personal__popup__wr input[name=all__check02]').on('click', function(){
		var checked = $(this).is(':checked');
		
		if(checked) {
			$('.personal__popup__wr').find('.all__check02').prop('checked', true);
		} else {
			$('.personal__popup__wr').find('.all__check02').prop('checked', false);
		}
	});
	//personal__popup__wr 개별 체크 풀 시 전체 체크 풀리게
	$('.personal__popup__wr .all__check02').on('click', function(){
		var chkGroup = $(this).closest('.personal__popup__contlist__box').find('.personal__popup__slide__btn');
		var chkGroup_cnt = chkGroup.length;
		checked_cnt = $('.personal__popup__wr .all__check02:checked').length;
		console.log('현재'+chkGroup_cnt);
		console.log('총'+checked_cnt);
		if (checked_cnt < chkGroup_cnt) {
			$('.personal__popup__wr input[name=all__check02]').prop('checked', false);
		} else if (checked_cnt == chkGroup_cnt) {
			$('.personal__popup__wr input[name=all__check02]').prop('checked', true);
		}
	});

		
	$('.container__list__alarm__btn > img').click(function(){
		$('.personal__popup__wr').fadeIn(200);
	});

	
	$('.container__list__hd > li.alarm .icon').click(function(){
		$('.all__popup__wr').fadeIn(200);
	});


	$('.container__list__cont__box').mouseenter(function(){
		$(this).addClass('mouseenter');
	});
	$('.container__list__cont__box').mouseleave(function(){
		$(this).removeClass('mouseenter');
	});
	
	$('.container__list__cont').click(function(){
		$('.line__graph__popup__wr').css({opacity:"1",zIndex:"10",display:"block"});
	});


	$('.line__graph__popup__wr .popup__close__btn').click(function(){
		$('.line__graph__popup__wr').css({opacity:"0",zIndex:"-1"});
	});


	/*****************************************
	****************************************** trendview.html
	******************************************/

	$('.drop__down__wr').mouseenter(function(){
		$('.drop__down__ul').slideDown('200');
	});
	$('.drop__down__ul').mouseleave(function(){
		$(this).slideUp('200');
	});
	

	/*****************************************
	****************************************** download.html
	******************************************/

	$('.view__more__popup__btn').click(function(){
		$('.view__more__popup__wr').fadeIn(200);
	});

	
	/*****************************************
	****************************************** management.html
	******************************************/

	$('.sort__wr > span').click(function(){
		var on = "on";
		var off = "off";

		$(this).siblings('span').removeClass('activate');
		$(this).addClass('activate');
		
		$(this).siblings('span').children().attr("src", "./images/icon_ascending_arrow_"+off+".svg");
		$(this).children().attr("src", "./images/icon_ascending_arrow_"+on+".svg");
	});


	
	$('.container__list__modify__btn > img').mouseenter(function(){
		$(this).attr({ src: "./images/icon_modify_btn_on.svg" });
	});
	$('.container__list__modify__btn > img').mouseleave(function(){
		$(this).attr({ src: "./images/icon_modify_btn_off.svg" });
	});
	
	$('.container__list__del__btn > img').mouseenter(function(){
		$(this).attr({ src: "./images/icon_del_btn_on.svg" });
	});
	$('.container__list__del__btn > img').mouseleave(function(){
		$(this).attr({ src: "./images/icon_del_btn_off.svg" });
	});

	
	$('.container__list__modify__btn').click(function(){
		$('.info__popup__wr').fadeIn(200);
	});
	$('.top__profile__edit').click(function(){
		$('.my__info__popup__wr').fadeIn(200);
	});




	/**/


	$('.favorites__btn').click( function() {
	  $(this).toggleClass('activate');
	});

	

	$('.popup__tab__btn__wr .popup__title').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.all__popup__wr .tab__contents__box').removeClass('active');
		$('.popup__tab__btn__wr .popup__title').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');

	})

});




