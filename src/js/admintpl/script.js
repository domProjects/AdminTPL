var ADMINTPL = {
	onReady: function() {
		/**
		 * 
		 */
		$('#footer-datetime').doOnce(function() { 
			this.displayDateTime({
				language: lang
			});
		});

		/**
		 * 
		 */
		$('#nav-left-item').doOnce(function() { 
			this.metisMenu();
		});

		/**
		 * 
		 */
		$('#nav-left-collapse').doOnce(function() { 
			this.on('click', function(e) {
				e.preventDefault();
				$('#nav-left, #article').toggleClass('is-collapsed');
				$(this).toggleClass('is-collapsed');
			});
		});

		/**
		 * 
		 */
		$('#nav-left-settings').doOnce(function() { 
			this.on('click', function(e) {
				e.preventDefault();
				$('#panel-left-settings').toggleClass('is-collapsed');
			});
		});

/*
		console.log(navigator.language);
		console.log(navigator.languages);
		console.log(navigator.onLine);
		console.log(navigator.cookieEnabled);
		console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
		console.log(screen.width + 'x' + screen.height);
*/
	},
	onLoad: function() {


	}
};

$(document).ready(ADMINTPL.onReady);
$(window).on('load', ADMINTPL.onLoad);
