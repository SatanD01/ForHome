$(window).ready(function(){
    //language click
    $(".dr-down-lang-block").on("click", function (event) {
        event.preventDefault();
        $(this).parent().find(".dr-down-lang").toggleClass("active");
    });

    if ($(".dr-down-lang").has("active")) {
        $("").click(function (event) {
            event.preventDefault();
            $(".dr-down-lang").removeClass("active");
        });
    }
    // number control
   /* $('.down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });*/
    // like click color change
    $(".top-sells-card-block-control > span").on("click", function () {
        $(this).toggleClass("active");
    });
    // our-profs-slider
    $(".our-profs-slider-block").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
    });
    //season-prods-slider-block slider
    $(".season-prods-slider-block").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
    });
    //tips-block-slider slider
    $(".tips-block-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
    });
    //header-info-block-paddinginner
    $(".header-info-block-absolute").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
    });

    /*input-range*/
    $(".polzunok-5").slider({
        min: 0,
        max: 350,
        values: [0, 350],
        range: true,
        animate: "fast",
        slide : function(event, ui) {
            $(".polzunok-input-5-left").val(ui.values[ 0 ]);
            $(".polzunok-input-5-right").val(ui.values[ 1 ]);
        }
    });


    $(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
    $(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));


    //accordion-script
    $('.panel-heading').click(function () {
        if($(this).hasClass( "in" )){}
        else
        {
            $(".panel .panel-heading > span").removeClass( "rotate" );
        }
        $(this).toggleClass('in').next().slideToggle();
        $(this).parent().find(".panel-heading > span").toggleClass("rotate");
        $('.panel-heading').not(this).removeClass('in').next().slideUp();

    });

    $('.panel-heading-first').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $(this).parent().find(".panel-heading-first > span").toggleClass("rotate");
        $('.panel-heading-first').not(this).removeClass('in').next().slideUp();
    });


    //active-hidden-links
    $(".panel-collapse > .regular-14-orange").click(function () {
        $(".panel-collapse > .regular-14-orange").addClass("hidden");
        $(".catalog-cat-left-top-block-links").removeClass("hidden");
    });
    $(".catalog-cat-left-top-block-links > .regular-14-orange").click(function () {
        $(".panel-collapse > .regular-14-orange").removeClass("hidden");
        $(".catalog-cat-left-top-block-links").addClass("hidden");
    });

    //cat-filter-rates
    $(".cat-filter").click(function () {
        $(".cat-filter-rates").toggleClass("hidden");
        $(".cat-filter .regular-14-orange.icon-ar-right").toggleClass("rotate");
    });

    //.view-col
    $(".view-col > .regular-14-orange").click(function () {
        $(".view-col-count").toggleClass("hidden");
        $(".view-col .regular-14-orange.icon-ar-right").toggleClass("rotate");
    });

    //slider-product-top
    $('.slider-view-block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-control-block'
    });
    $('.slider-control-block').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-view-block',
        centerMode: true,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    //text-view-all
    $(".prod-description-bottom span:last-child").click(function () {
        $(".prod-description-bottom span:first-child").toggleClass("view");
        $(this).css("display","none");
    });

    //phone mask
    $("#phone").mask("+998(99) 999-9999");
    //menu script
    $(".burger-block").click(function () {
        $(".menu").toggleClass("active");
    });
    //pay-type
    $(".pay-type-btn").click(function () {
        $(this).toggleClass("active").siblings().removeClass("active");
    });
    //map-popup
    $(".pay-input-geo span:last-child").click(function () {
        $(".map-popup-block").addClass("active");
    });
    $(".map-popup-block").click(function () {
        $(this).removeClass("active");
    });
});


$(document).focusout(function() {
    var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),
        opt_left = $(".polzunok-5").slider("option", "min"),
        where_right = $(".polzunok-5").slider("values", 1),
        input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),
        opt_right = $(".polzunok-5").slider("option", "max"),
        where_left = $(".polzunok-5").slider("values", 0);
    if (input_left > where_right) {
        input_left = where_right;
    }
    if (input_left < opt_left) {
        input_left = opt_left;
    }
    if (input_left == "") {
        input_left = 0;
    }
    if (input_right < where_left) {
        input_right = where_left;
    }
    if (input_right > opt_right) {
        input_right = opt_right;
    }
    if (input_right == "") {
        input_right = 0;
    }
    $(".polzunok-input-5-left").val(input_left);
    $(".polzunok-input-5-right").val(input_right);
    $(".polzunok-5").slider( "values", [ input_left, input_right ] );
});
//⛤