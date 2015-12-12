// // Default JavaScript Functions and Initiations
// $(document).ready(function() {

// 	var navTrig = $('#mobileNavTrig'); // mobile trig

// 	// open the mobile nav
// 	navTrig.on('click', function(e){

// 		e.prventDefault();
		
// 		if ( navTrig.hasClass('open') ) {
// 			// open the nav
// 			openNav();
// 		}

// 		else if ( navTrig.hasClass('closed') ) {
// 			// close the nav
// 			closeNav();
// 		}

// 	});

// 	// opent the nav
// 	function openNav(){

// 	};

// 	// close nav
// 	function closeNav() {

// 	};


// }); // end document ready




/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
			classie.remove( openbtn, 'open' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
			classie.add( openbtn, 'open' );
		}
		isOpen = !isOpen;
	}

	init();

})();


