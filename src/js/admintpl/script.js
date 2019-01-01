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
		$('#nav-left-list').doOnce(function() { 
			this.overlayScrollbars({
				sizeAutoCapable: false
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
			this.on('click', function() {
				$('#nav-left, #article').toggleClass('is-collapsed');
				$(this).toggleClass('is-collapsed');
			});
		});

		/**
		 * 
		 */
		$('#nav-left-settings').doOnce(function() { 
			this.on('click', function() {
				$('#panel-left-settings').toggleClass('is-collapsed');
			});
		});

		/**
		 * 
		 */
		$('#fullscreen').doOnce(function() { 
			if ($.fullscreen.isNativelySupported() === true) {
				this.on('click', function() {
					var res = ($.fullscreen.isFullScreen() === true ) ? $.fullscreen.exit() : $('body').fullscreen();
					$(this).find('i').toggleClass('fas fa-expand fas fa-compress');
				});
			} else {
				this.remove();
			}
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
