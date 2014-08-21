'use strict';

$(function(){
	$('.otherProductsCarousel').carousel({
		'limitPerPage': 3,
		'pagination': false
	});


	var tabs = $('.moreInfoTabs').tabs();
	tabs.show(2);
});