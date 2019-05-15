$('.slider').slick({
    dots: false,
    autoplay: true,
    infinite: true
});
$('.slider_opinion').slick({
    dots: true,
    autoplay: false,
    infinite: true
});
$(document).ready(function () {
    $('.popup').magnificPopup({
        type: 'image'
    })

});
$('.comp_popup').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
    callbacks: {
        beforeOpen: function () {
            if ($(window).width() < 700) {
                this.st.focus = false;
            } else {
                this.st.focus = '#name';
            }
        }
    }
});
$('.phone_popup').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
    callbacks: {
        beforeOpen: function () {
            if ($(window).width() < 700) {
                this.st.focus = false;
            } else {
                this.st.focus = '#name';
            }
        }
    }
});
$('.nout_popup').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
    callbacks: {
        beforeOpen: function () {
            if ($(window).width() < 700) {
                this.st.focus = false;
            } else {
                this.st.focus = '#name';
            }
        }
    }
});
$('.plan_popup').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
    callbacks: {
        beforeOpen: function () {
            if ($(window).width() < 700) {
                this.st.focus = false;
            } else {
                this.st.focus = '#name';
            }
        }
    }
});

function AjaxFormRequest(result_id, formMain, url) {
    jQuery.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: jQuery("#" + formMain).serialize(),
        success: function (response) {
            $(':input', '#' + formMain)
                .not(':button, :submit, :reset, :hidden')
                .val('')
                .removeAttr('checked')
                .removeAttr('selected');
            setTimeout(() => {
                $("#message").hide();
            }, 5000);
        },
        error: function (response) {
            var parent = $("#" + result_id).parent('.form');
            var child = parent.children('.button')
            if ($($('#' + formMain).children('.button')).hasClass('error')) {

            } else {
                $($('#' + formMain).children('.button')).append("<i class=\"fa fa-times\" aria-hidden=\"true\"></i>");
                $($('#' + formMain).children('.button')).addClass('error')
            }
        }
    });
}

$('#footer_email').submit(function (e) {
    e.preventDefault();
    AjaxFormRequest('error_email', 'footer_email', './send.php');
});
$('#footer_phone').submit(function (e) {
    e.preventDefault();
    AjaxFormRequest('error_phone', 'footer_phone', './callback.php');
});
$('#callback').submit(function (e) {
    e.preventDefault();
    AjaxFormRequest('error_callback', 'callback', './callback.php');
});