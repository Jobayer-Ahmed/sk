$(document).ready(function() {
	$('.nav_logo a').click(function() {
		$('.nav_item').toggleClass('hide')
	});
	$('.nav_item a').click(function() {
		$('.nav_item').toggleClass('hide')
	});
	// $('.nav_item a').click(function () {
 //    	window.location.href = window.location.href.replace(/#.*/,'/')
	// });
	$('.bullet_button_group button').click(function() {
		$('.bullet_button_group button').removeClass('active')
		$(this).addClass('active')
	})
	$('.third_page .button_group button').click(function() {
		$('.third_page .button_group button').removeClass('cat_active');
		$(this).addClass('cat_active')
	})
});