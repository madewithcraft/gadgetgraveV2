// Default JavaScript Functions and Initiations
$(document).ready(function() {

	var navTrig = $('#mobileNavTrig'); // mobile trig

	// open the mobile nav
	navTrig.on('click', function(e){

		e.prventDefault();
		
		if ( navTrig.hasClass('open') ) {
			// open the nav
			openNav();
		}

		else if ( navTrig.hasClass('closed') ) {
			// close the nav
			closeNav();
		}

	});

	// opent the nav
	function openNav(){

	};

	// close nav
	function closeNav() {

	};


}); // end document ready
