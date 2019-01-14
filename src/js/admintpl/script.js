var ADMINTPL = {
	onLoad: function() {
		console.log('window load: true');

		/**
		 * 
		 */
		$('.badge-notify').doOnce(function() { 
			this.displayBadge();
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
		$('#footer-datetime').doOnce(function() { 
			this.displayDateTime({
				language: lang
			});
		});

		/**
		 * 
		 */
		var arr = [
			{
				'type': 'meta',
				'tag': 'name',
				'tagName': 'theme-color',
				'tagValue': 'content'
			},
			{
				'type': 'meta',
				'tag': 'name',
				'tagName': 'msapplication-tilecolor',
				'tagValue': 'content'
			},
			{
				'type': 'link',
				'tag': 'rel',
				'tagName': 'mask-icon',
				'tagValue': 'color'
			}
		];

		var getMetaThemeColor = getComputedStyle(document.documentElement).getPropertyValue('--metaThemeColor');

		$.each(arr, function(index, value) {
			var selectMetaThemeColor = document.querySelector(value['type'] + '[' + value['tag'] + '=' + value['tagName'] + ']');

			if (selectMetaThemeColor !== null) {
				selectMetaThemeColor.setAttribute(value['tagValue'], getMetaThemeColor);
			}
		});
	},
	onReady: function() {
		console.log('document ready: true');

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
	}
};

$(window).on('load', ADMINTPL.onLoad);
$(document).ready(ADMINTPL.onReady);
