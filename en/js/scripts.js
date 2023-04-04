// JavaScript Document


$(function(){
	$('div#sp_menu a').on('click', function(){
		$('nav#menu').slideToggle('1000');
	});
	
	
	$('div#sidebar h2').on('click', function(){
		$('div#sidebar ul').slideToggle('1000');		
	});
	
		
	$('table.toggle_next .toggle').on('click', function(){
		$(this).parents('tr').next('tr').find('th, td').slideToggle('1000');
	});

	$('table.toggle_nextall .toggle').on('click', function(){
		$(this).parents('tr').nextAll('tr').find('th, td').slideToggle('1000');
	});	

	
	if($('div#sp_menu').css('display') == "none")
	{
		$('nav ul > li').hover(function(){
			$("ul:not(:animated)", this).slideDown();
		}, function(){
			$("ul",this).slideUp();
		});
	}
	

});