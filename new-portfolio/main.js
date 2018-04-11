var rellax = new Rellax('.rellax');

$(document).ready(function () {

    $('.section').css('min-height', (window.innerHeight + 'px'));

    //Change navbar background color from 200px
    $(window).scroll(function() {
      if($(this).scrollTop() > 20) { 
        $('#navbar').addClass('dark-background');
      } else {
        $('#navbar').removeClass('dark-background'); 
      }
    });  

    // Remove navbar-collapse on link click
    $('.navbar-nav > a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Use Jquery scrollTo library for scroll effect (https://github.com/flesler/jquery.scrollTo)
    $("#arrowIconAbout").click(function (e) {
        e.preventDefault();
        $.scrollTo($("#about"), {
            duration: 1000,
        })
    });
    $("#arrowIconWork").click(function (e) {
        e.preventDefault();
        $.scrollTo($("#work"), {
            duration: 1000,
            // offset added to final position for precision
            offset: { top: -50 }
        })
    });
    $("#arrowIconContact").click(function (e) {
        e.preventDefault();
        $.scrollTo($("#contact"), {
            duration: 1000,
            // offset added to final position for precision
            offset: { top: -50 }
        })
    });
    $("#aboutLink").click(function (e) {
        e.preventDefault();
        $.scrollTo($("#about"), {
            duration: 1000,
            offset: { top: -50 }
        })
    });
    $("#workLink").click(function (e) {
        e.preventDefault();
        $.scrollTo($("#work"), {
            duration: 1000,
            offset: { top: -50 }
        })
    });
    $("#contactLink").click(function (e) {
        e.preventDefault();
        $.scrollTo($("#contact"), {
            duration: 1000,
            offset: { top: -50 }
        })
    });

    $('.form-wrapper button.submit').click(function (e) {
        // prevent default submit
        e.preventDefault();
    });    
 
});

