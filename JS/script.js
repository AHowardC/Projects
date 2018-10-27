$(document).ready(function(){

	// ISOTOPE
	var $grid = $('.devicons').isotope({
		layoutMode: 'fitRows',
		fitRows: {
		  gutter: 35
		}});
		$('#front').click(()=>{
			$grid.isotope({filter: '.front'});
		});
		$('#back').click(()=>{
			$grid.isotope({filter: '.back'});
		});
		$('#dev').click(()=>{
			$grid.isotope({filter: '.dev'});
		});
		$('#all').click(()=>{
			$grid.isotope({filter: ''});
		});
}); //end doc.ready
