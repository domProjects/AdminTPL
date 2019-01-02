(function($) {
	$.fn.extend({
		doOnce: function(func) {
			this.length && func.apply(this);

			return this;
		},
		displayBadge: function(options) {
			var defaults = {
				attribut: 'data-count'
			};

			var settings = $.extend(true, defaults, options);

			return this.each(function() {
				var number = $(this).attr(settings.attribut);

				if (number < 1) {
					$(this).remove();
				}
			});
		},
		displayDateTime: function(options) {
			var defaults = {
				language: 'en',
				formatDisplay: 'datetime',
				formatTime: 'LTS',
				formatDate: 'LL',
				refresh: 1000
			};
			var settings = $.extend(true, defaults, options);
			var $this = $(this);

			function localeUpdate() {
				moment.locale(settings.language);
			}

			function displayUpdate() {
				var mmt = moment();
				var mmtTime = mmt.format(settings.formatTime);
				var mmtDate = mmt.format(settings.formatDate);

				switch(settings.formatDisplay) {
					case 'datetime':
						$this.html('<span>' + mmtTime + '</span><span>' + mmtDate + '</span>');
						break;
					case 'date':
						$this.html('<span>' + mmtDate + '</span>');
						break;
					case 'time':
						$this.html('<span>' + mmtTime + '</span>');
						break;
					default:
						$this.html('<span>error</span>');
				}

				return $this;
			}

			function dateTimeUpdate() {
				displayUpdate();
				localeUpdate();
				setTimeout(dateTimeUpdate, settings.refresh);
			}

			dateTimeUpdate();
		}
	});
}(jQuery));