import Glide from '@glidejs/glide';
import css from '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

document.addEventListener('DOMContentLoaded',function() {

    const home = document.getElementById('homeCarousel'),
          thumbs = document.getElementById('thumbsCarousel');
  
    const homeCarousel = function() {

        const glide = new Glide(home, {
            type: 'carousel',
            animationDuration: 600,
            autoplay: false,
            hoverpause: true,
            gap: 0
        })
        
        setTimeout(function() {
            glide.mount();
        }, 1000)
        
        const changeSlide = function(e) {
            glide.go('='+cutme.Helpers.thisindex(this));
        };
    };
    
    const thumbsCarousel = function() {
    
        const glide = new Glide(thumbs, {
            type: 'carousel',
            animationDuration: 600,
            autoplay: false,
            gap: 10,
            perView: 4,
            breakpoints: {
        		768: {
        			perView: 3
        		}
        	},
        })
        
        setTimeout(function() {
            glide.mount();
        }, 1)
        
        setTimeout(function() {
            window.thumbs();
        }, 10)
    };

    home ? homeCarousel() : false;
    thumbs ? thumbsCarousel() : false;

}, false);