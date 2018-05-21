jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},7000);
	});

	$('.by').hide();
	

	$('.general').click(function() {
		console.log('oioioio');
	});
});