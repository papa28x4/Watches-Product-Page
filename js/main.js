
$(window).on('load', function(){
  setTimeout(function(){
    $(".preloader").fadeOut('slow');
  }, 600)
})

$(document).ready(function(){
    
    $('body').scrollspy({target: ".navbar-nav", offset: 67})

    // Add smooth scrolling on all links inside the navbar

    $(".navbar-nav a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
    
        // Prevent default anchor click behavior
        event.preventDefault();
    
        // Store hash
        var hash = this.hash;
    
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
    
        // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
        //hide navbar on mobile after click
        $(".navbar-collapse").collapse("hide")
      } // End if
  
    });

    

    function slider(elem, screenOne, screenTwo, screenThree){
                    
        $(elem).owlCarousel({
            loop:true,
            margin:10,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            nav:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items: screenOne
                },
                600:{
                    items: screenTwo
                },
                1000:{
                    items: screenThree
                }
            }
        })
    }

    slider('#product-carousel', 1, 2, 4);
    slider('#testimonial-carousel', 1, 1, 2);
});

function setActiveStyle(colorName){
  $('.alternate-style').attr('disabled', 'true');
  $(".alternate-style[title="+colorName+"]").removeAttr('disabled');
}

$(".toggle-style-switcher").click(function(){
  $(".style-switcher").toggleClass("open")
})