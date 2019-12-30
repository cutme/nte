document.addEventListener('DOMContentLoaded', function() {
    (function() {
        let scroll_pos = window.pageYOffset || window.scrollY,
            out = false;
        
        const el = document.getElementsByClassName('js-top')[0];
        
        let down,
        	lastScrollTop = 0,
        	narrow = false,
        	ww = window.innerWidth;
        
        const action = function() {
	        
            scroll_pos = window.pageYOffset || window.scrollY;
            ww = window.innerWidth;

			// Narrow top
            if (scroll_pos >= 130) {
	            if (narrow === false) {
		            el.classList.add('is-narrow');
		            narrow = true;
	            }
            }
            
            
             else if (scroll_pos < 130) {
	            el.classList.remove('is-narrow');
	            narrow = false;
            }
        }
        
	    el ? window.addEventListener('scroll', action) : false;
        
        
    })();
}, false);