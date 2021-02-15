
// INTRO - Slider:

let slideNow = 1;
let slideCount = $('#slidewrapper').children().length;
let slideInterval = 3000;
let navBtnId = 0;
let translateWidth = 0;

$(document).ready(function() {
    let switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $($('.slide-nav-btn')[0]).addClass('active');

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();
        $('.slide-nav-btn').removeClass('active');
        $(this).addClass('active');
        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});

// Next slide
function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
    $('.slide-nav-btn').removeClass('active');
    $($('.slide-nav-btn')[slideNow-1]).addClass('active');
}

// Previous slide
function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
    $('.slide-nav-btn').removeClass('active');
    $($('.slide-nav-btn')[slideNow-1]).addClass('active');
}



// TOGGLE-MENU:

// Menu-on
$('#toggle').on('click', menuOn);

function menuOn() {
    $('#toggle-menu').css({left: '0'});
    $('main').css({opacity: '0.6'});
    $('footer').css({opacity: '0.6'});
    $('#widget-to-top').css({opacity: '0.6'});
}


// Menu-off
$('.fa-times').on('click', menuOff);
$('main').on('click', menuOff);
$('.menu-item').each(function() {
    $(this).on('click', menuOff);
})

function menuOff() {
    $('#toggle-menu').css({left: '-102%'});
    $('main').fadeTo(1, 1000);
    $('#widget-to-top').fadeTo(1, 1000);
    $('footer').fadeTo(1, 1000);
}

// Menu-item-click:
if ($('body').width() <= 320) {
    $($('.menu-item')[0]).click(function() {
        $('html').scrollTop(0);
    })
    $($('.menu-item')[1]).click(function() {
        $('html').scrollTop(570);
    })
    $($('.menu-item')[2]).click(function() {
        $('html').scrollTop(3372);
    })
    $($('.menu-item')[3]).click(function() {
        $('html').scrollTop(4705);
    })
    $($('.menu-item')[4]).click(function() {
        $('html').scrollTop(5482);
    })
}


// Button "to-top"

$('#widget-to-top').on('click', function() {
    $('html').scrollTop(0);
})
