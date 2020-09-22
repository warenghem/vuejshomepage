// BOOTSTRAP MEGAMENU

$('.mega-menu-back').on('click', function(e)
{
     $(this).closest('.show').removeClass('show');
});

$(document).ready(function() {
	$(".dropdown-menu").on("click", function(e) {
		e.stopPropagation();
	});
});

$('.dropdown-submenu > .dropdown-toggle').on("click", function(e) {
  var submenu = $(this);
  $('.dropdown-submenu .dropdown-menu').removeClass('show');
  submenu.next('.dropdown-menu').addClass('show');
  e.stopPropagation();
});

$(function() {
  $(".dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).siblings().toggleClass("show");
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    $(this).parents('.nav-item.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });
  });
});

$('.myDropdown').on('show.bs.dropdown', function () {
  $('#blackcontentmenu').addClass('blackcontentoverlay');
})
$('.myDropdown').on('hide.bs.dropdown', function () {
  $('#blackcontentmenu').removeClass('blackcontentoverlay');
})

// HAMBURGER MENU
$(function() {
  $('#mainmenu')
    .on('show.bs.collapse', function() {
      $('#mainhamburger').addClass('open');
	  $('body').addClass('blocked')
    })
    .on('hide.bs.collapse', function() {
      $('#mainhamburger').removeClass('open');
	  $('body').removeClass ('blocked')
    });
	  $('#sticky-productid')
    .on('show.bs.collapse', function() {
      $('#secondhamburger').addClass('open');
    })
    .on('hide.bs.collapse', function() {
      $('#secondhamburger').removeClass('open');
    });
});
$(function() {
  $('#temporarymenu')
    .on('show.bs.collapse', function() {
      $('#mainhamburger2').addClass('open');
	  $('body').addClass('blocked');
	  $(".white span").css("background", "black");
	  $("#header-nav").css("background-color", "white");
	  $(".noheaderlogo").css({"fill": "#231F20", "stroke": "#231F20"});
	  $(".mywawhite").css({"fill": "#231F20", "stroke": "#231F20"});
    })
    .on('hide.bs.collapse', function() {
      $('#mainhamburger2').removeClass('open');
	  $('body').removeClass ('blocked');
	  $(".white span").css("background", "white");
	  $("#header-nav").css("background-color", "rgba(255, 255, 255, 0)");
	  $(".noheaderlogo").css({"fill": "white", "stroke": "white"});
	  $(".mywawhite").css({"fill": "white", "stroke": "white"});
    });
});
$(function() {
  $('#temporarymenufixed')
    .on('show.bs.collapse', function() {
      $('#mainhamburger2fixed').addClass('open');
	  $('body').addClass('blocked')
    })
    .on('hide.bs.collapse', function() {
      $('#mainhamburger2fixed').removeClass('open');
	  $('body').removeClass('blocked')
    });
});
$('.navbar-collapse a').click(function() {
      $(".navbar-collapse").collapse('hide');
});
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".collapse").hasClass("collapse show");

        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
			$('#secondhamburger').removeClass('open');
        }
    });
});
 
// ENABLE BOOTSTRAP TOAST & POPOVER
jQuery(document).ready(function(){
  	jQuery('.toast').toast('show');
});
        $('body').on('click','.close',function(){
          $(this).closest('.toast').toast('hide')
        })
$(function() { 
    $("#socialcontact").popover('show');

    $("#socialcontact").on('click', function () {
        $("#socialcontact").popover('destroy'); 
    });
 });

jQuery(function() {
    var isVisible = false;

    var hideAllPopovers = function() {
       $('#socialcontact').each(function() {
            $(this).popover('hide');
        });  
    };

    $('#socialcontact').popover({
        html: true,
        trigger: 'manual'
    }).on('click', function(e) {
        // if any other popovers are visible, hide them
        if(isVisible) {
            hideAllPopovers();
        }

        $(this).popover('show');

        // handle clicking on the popover itself
        $('.popover').off('click').on('click', function(e) {
            e.stopPropagation(); // prevent event for bubbling up => will not get caught with document.onclick
        });

        isVisible = true;
        e.stopPropagation();
    });


    $(document).on('click', function(e) {
        hideAllPopovers();
        isVisible = false;
    });
});
jQuery(document).on( 'show.bs.toast', function() {
    	jQuery('#blackcontenttoast').addClass('blackcontentoverlay');
		$('body').addClass('blocked')
	});
jQuery(document).on( 'hide.bs.toast', function() {
    	jQuery('#blackcontenttoast').removeClass('blackcontentoverlay');
	    $('body').removeClass('blocked')
	});

// LOGIN MODAL OVERLAY
	jQuery(document).on( 'lrm/before_display/login', function() {
    	jQuery('#blackcontent').addClass('blackcontentoverlay');
	});
	jQuery(document).on( 'lrm/close_modal', function() {
    	jQuery('#blackcontent').removeClass('blackcontentoverlay');
	});

// CHECKOUT PAGE : REMOVE SHIPPING IF PICKUP
jQuery(function() {
jQuery("input#shipping_method_0_local_pickup11").click(function() {
    jQuery(".shippingadress").fadeOut();
  });
jQuery("input#shipping_method_0_free_shipping6").click(function() {
    jQuery(".shippingadress").fadeIn();
  });
jQuery("input#shipping_method_0_flat_rate12").click(function() {
    jQuery(".shippingadress").fadeIn();
  });
});

// SPINNER ON LOAD
$(window).on("load", function (e) {
	$(".loader").fadeOut("fast");
})
$(".spinner").on('click', function(){
$(".loader").show();
});

// GO BACK
function goBack() {
   window.history.back();
}

// PRODUCT PAGE 
    // DISPLAY TOGGLE
$(function() {
    //caches a jQuery object containing the header element
    var header = $("#header-nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 800) {
            header.addClass("opacitytoggle");
        } else {
            header.removeClass('opacitytoggle');
        }
    });
});

// ENABLE BOOTSTRAP TOOLTIP
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$.support.transition = false

// HOME PAGE : CATALOGUE
$( ".homepage-catalogue-links-item" ).hover(
  function() {var itemIndex=$(this).index()+1;var backgroundImage=$(".homepage-catalogue-background-divided2 div:nth-of-type("+itemIndex+") div").css("background-image");
	$(".homepage-catalogue-background-divided2").hide();
    $(".homepage-catalogue-background, .homepage-catalogue-title").addClass("active");
	$(".homepage-catalogue-background-big div").css("background-image",backgroundImage); 
	$(".homepage-catalogue-background-lines, .homepage-catalogue-links-item, .homepage-catalogue-background-maintitle").css("opacity", "0.2");
  }, function() {
	$(".homepage-catalogue-background-divided2").show();
	$(".homepage-catalogue-background, .homepage-catalogue-title").removeClass("active");
	$(".homepage-catalogue-background-lines, .homepage-catalogue-links-item, .homepage-catalogue-background-maintitle").css("opacity", "1");
  }
);


// CHANGE ON LOAD WITH DELAY
//setTimeout(function() {
  //  $('.subtitledelay').css("color", "white");$('.titledelay').css("color", "#888");
//}, 3000);
// BLACK OVERLAY WHEN COLLAPSE
$('.collapser').on('click', function () {
    $(this).toggleClass('active')
});

// BLOCK BODY WHEN LRM PLUGIN COLLAPSE
$(document).on('lrm/before_display/login', function() {
    $('body').addClass('blocked')
});
$(document).on('lrm/close_modal', function() {
	$('body').removeClass('blocked');
});
$('.botmodalclose').on('click', function () {
    $('.forest').removeClass('is-visible');
	$('#blackcontent').removeClass('blackcontentoverlay');
	$('body').removeClass('blocked')
});

// RIPPLE EFFECT
$("html").on("click", ".rippleeffect", function(evt) {
  var rippleeffect = $(evt.currentTarget);
  var x = evt.pageX - rippleeffect.offset().left;
  var y = evt.pageY - rippleeffect.offset().top;
  
  var duration = 1000;
  var animationFrame, animationStart;
  
  var animationStep = function(timestamp) {
    if (!animationStart) {
      animationStart = timestamp;
    }
   
    var frame = timestamp - animationStart;
    if (frame < duration) {
      var easing = (frame/duration) * (2 - (frame/duration));
      
      var circle = "circle at " + x + "px " + y + "px";
      var color = "rgba(0, 0, 0, " + (0.3 * (1 - easing)) + ")";
      var stop = 90 * easing + "%";

      rippleeffect.css({
        "background-image": "radial-gradient(" + circle + ", " + color + " " + stop + ", transparent " + stop + ")"
      });

      animationFrame = window.requestAnimationFrame(animationStep);
    } else {
      $(rippleeffect).css({
        "background-image": "none"
      });
      window.cancelAnimationFrame(animationFrame);
    }
    
  };
  
  animationFrame = window.requestAnimationFrame(animationStep);

});

// STICKY NAVBAR
$(function() {
var x = window.matchMedia("(max-width: 767px)");
	if (x.matches) {
$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 786){
		  
		$(document).ready(function () { 
		  'use strict';
		   var c, currentScrollTop = 0,
			   navbar = $('#header-nav-fixed');

		   $(window).scroll(function () {
			  var a = $(window).scrollTop();
			  var b = navbar.height();

			  currentScrollTop = a;

			  if (c < currentScrollTop && a > b + b) {
				navbar.removeClass("isactive");
			  } else if (c > currentScrollTop && !(a <= b)) {
				navbar.addClass("isactive");
			  }
			  c = currentScrollTop;
		  });  
		});
		}
		else
		{
			$(".header-nav-fixed").removeClass("isactive");
		}
	});}
    else {
    	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 786){
		  $(".header-nav-fixed").addClass("isactive");
		}
		else
		{
			$(".header-nav-fixed").removeClass("isactive");
		}
	});
    }   
  });

$(function() {
var x = window.matchMedia("(min-width: 992px)");
	if (x.matches) {
$(".header-nav-wrapper").hover(function(){
  $("#login").toggleClass("loginwhite");
  $(this).toggleClass("active");
});
}
})

$(document).ready(function(){
	$(window).scroll(function(){
  	var light_pos = $('.blacksection').offset().top;
    var light_height = $('.blacksection').height();
    var menu_pos = $('#header-nav-fixed').offset().top;
    var menu_height = $('#header-nav-fixed').height();
    var scroll = $(window).scrollTop();
    console.log('light',light_pos);
    console.log('menu',menu_pos);
    console.log('scroll',scroll);
    
    if(menu_pos > light_pos && menu_pos < (light_pos + light_height)) {
    	$('#header-nav-fixed').addClass('menu_black');
      $('#header-nav-fixed').removeClass('menu_white');
    }
    else {
    	$('#header-nav-fixed').removeClass('menu_black');
      $('#header-nav-fixed').addClass('menu_white');
    }   
  })
})



// ACTIVATE BOOTSTRAP SCROLLSPY & SMOOTH SCROLL
$('body').scrollspy({ target: '#temporarymenufixed', offset: 3 })
jQuery(document).ready(function(){
 let scroll_link = jQuery('.scroll');
  //smooth scrolling -----------------------
  scroll_link.click(function(e){
      e.preventDefault();
      let url = jQuery('body').find($(this).attr('href')).offset().top+1;
      jQuery('html, body').animate({
        scrollTop : url
      },200);
      jQuery(this).parent().addClass('active');
      jQuery(this).parent().siblings().removeClass('active');
      return false;	
   });
});

// COUNT
$('.count').each(function () {
   var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
   $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
   }, {
      duration: 2000,
      easing: 'swing',
      step: function (func) {
         $(this).text(parseFloat(func).toFixed(size));
      }
   });
});

//  Homepage Slider

		if ( $(".homepage-slider-background").length ) {
			var homepageSliderItemsNumber = $(".homepage-slider-background-item").length;

			homepageSliderRotation();
			function homepageSliderRotation() {

				// Get Index
				var activeIndex = $(".homepage-slider-background-item.active").index() + 1;
				if ( activeIndex == 1 ) {
					var previousIndex = homepageSliderItemsNumber;
				} else {
					var previousIndex = activeIndex-1;
				}
				if ( activeIndex == homepageSliderItemsNumber ) {
					var nextIndex = 1;
				} else {
					var nextIndex = activeIndex+1;
				}

				// Remove Active
				$(".homepage-slider-background-item:nth-of-type("+ previousIndex + ")").removeClass("activeNew");

				// Set Next Direction
				var direction = $(".homepage-slider-background-item:nth-of-type("+ activeIndex + ")").attr("data-direction");
				switch ( direction ) {
					case "right":
						$(".homepage-slider-background-item:nth-of-type("+ nextIndex + ")").attr("data-direction", "bottom");
					break;
					case "bottom":
						$(".homepage-slider-background-item:nth-of-type("+ nextIndex + ")").attr("data-direction", "left");
					break;
					case "left":
						$(".homepage-slider-background-item:nth-of-type("+ nextIndex + ")").attr("data-direction", "top");
					break;
					case "top":
						$(".homepage-slider-background-item:nth-of-type("+ nextIndex + ")").attr("data-direction", "right");
					break;
				}

				// Make Next Active
				setTimeout(function(){
					$(".homepage-slider-background-item:nth-of-type("+ nextIndex + ")").addClass("active activeNew");
					$(".homepage-slider-background-item:nth-of-type("+ activeIndex + ")").removeClass("activeNew");
					setTimeout(function(){
							$(".homepage-slider-background-item:nth-of-type("+ activeIndex + ")").removeClass("active").attr("data-direction", "");
								homepageSliderRotation();
					}, 5000);
				}, 100);
			}
		}

//  Homepage Magazine Sliders
$(document).ready(function(){

		if ( $(".homepage-magazine").length ) {
			$(".homepage-magazine-background-slider").slick({
				rtl: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				speed: 500,
				swipe: true,
				pauseOnHover: false,
				pauseOnFocus: false,
				asNavFor: '.homepage-magazine-slider'
			});

			$(".homepage-magazine-images-slider").slick({
				arrows: false,
				slidesToShow: 4,
				slidesToScroll: 1,
				speed: 500,
				swipe: true,
				pauseOnHover: false,
				pauseOnFocus: false,
				asNavFor: '.homepage-magazine-slider',
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							centerMode: true,
							centerPadding: '20vw'
						}
					},
				]
			});

			$(".homepage-magazine-content-slider").slick({
				rtl: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				speed: 500,
				swipe: true,
				pauseOnHover: false,
				pauseOnFocus: false,
				asNavFor: '.homepage-magazine-slider'
			});
			$(".homepage-magazine-content-slider .slick-prev").appendTo( $(".homepage-magazine-content-slider") );

			$(".homepage-magazine-images-item").on("click", function(){
				var index = $(this).data("slick-index");
				$(".homepage-magazine-background-slider").slick("slickGoTo", index);
			})
		}
});

    function moveElements() {
        if (window.innerWidth < 992) {
            if ($("#elementOldPlace1 > div").length) {
                $("#elementOldPlace1 > div").appendTo($("#elementNewPlace1"))
            }
            if ($("#elementOldPlace2 > div").length) {
                $("#elementOldPlace2 > div").appendTo($("#elementNewPlace2"))
            }
            if ($("#elementOldPlace3 > div").length) {
                $("#elementOldPlace3 > div").appendTo($("#elementNewPlace3"))
            }
        } else {
            if ($("#elementNewPlace1 > div").length) {
                $("#elementNewPlace1 > div").appendTo($("#elementOldPlace1"))
            }
            if ($("#elementNewPlace2 > div").length) {
                $("#elementNewPlace2 > div").appendTo($("#elementOldPlace2"))
            }
            if ($("#elementNewPlace3 > div").length) {
                $("#elementNewPlace3 > div").appendTo($("#elementOldPlace3"))
            }
        }
    }

//  Parallax

    $(window).resize(moveElements);
    parallax();
    window.addEventListener("scroll", parallax);

    function parallax() {
        var scrollTop = $(window).scrollTop();
        var windowHeight = window.innerHeight;
        var theSize = 0;
        var newHeight = 0;
        if ($(".brand-logo-wrapper").length) {
            var newTop = Math.max(scrollTop * -0.15, -60);
            $(".brand-logo-wrapper").css("top", newTop)
        }
        if ($(".about-showroom-lines").length) {
            if (window.innerWidth >= 1200) {
                theHeight = 110
            } else {
                theHeight = 50
            }
            var lineFromTop1 = $(".about-showroom-lines span:first-of-type").offset().top - 100;
            theSize = ((scrollTop + (windowHeight / 2)) - lineFromTop1) * 0.5;
            newHeight = Math.min(Math.max(theSize, 0), theHeight);
            $(".about-showroom-lines span:first-of-type").css("height", newHeight)
            var lineFromTop2 = $(".about-showroom-lines span:last-of-type").offset().top - 50;
            theSize = ((scrollTop + (windowHeight / 2)) - lineFromTop2) * 0.5;
            newHeight = Math.min(Math.max(theSize, 0), theHeight);
            $(".about-showroom-lines span:last-of-type").css("height", newHeight)
            var lineFromTop3 = $(".about-innovation-bigimage-lines span:first-of-type").offset().top - 100;
            theSize = ((scrollTop + (windowHeight / 2)) - lineFromTop3) * 0.5;
            newHeight = Math.min(Math.max(theSize, 0), theHeight);
            $(".about-innovation-bigimage-lines span:first-of-type").css("height", newHeight)
            var lineFromTop4 = $(".about-innovation-bigimage-lines span:last-of-type").offset().top - 50;
            theSize = ((scrollTop + (windowHeight / 2)) - lineFromTop4) * 0.5;
            newHeight = Math.min(Math.max(theSize, 0), theHeight);
            $(".about-innovation-bigimage-lines span:last-of-type").css("height", newHeight)
        }
        if ($(".gridParallaxItem").length) {
            $(".gridParallaxItem").each(function(index) {
                if ($(this).parent().hasClass("about-innovation-twoimages-overflow") || $(this).parent().hasClass("about-innovation-oneimage") || $(this).parent().hasClass("about-innovation-smallimage")) {
                    var factor = 20
                } else {
                    var factor = 15
                }
                var itemFromTop = $(this).parent().offset().top;
                var itemStart = itemFromTop - windowHeight;
                var itemEnd = itemFromTop + $(this).parent().height();
                var precentage = (scrollTop - itemStart) / (itemEnd - itemStart) * 100;
                if (precentage < 0) {
                    precentage = 0
                } else if (precentage > 100) {
                    precentage = 100
                }
                precentage = precentage * factor / 100;
                $(this).css("top", ("-" + precentage + "%"))
            })
        }
    }