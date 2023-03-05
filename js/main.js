$(".accordion__text").on("click", function() {
    if ($(this).hasClass("accordion__text-opened")) {
        $(this).removeClass("accordion__text-opened");
        $(this).siblings(".accordion__body").slideUp(300);
    } else {
        $(".accordion__text").removeClass("accordion__text-opened");
        $(this).addClass("accordion__text-opened");
        $(".accordion__body").slideUp(300);
        $(this).siblings(".accordion__body").slideDown(300);
    }
});

function readMore1() {
    var dots1 = document.querySelector(".dots1");
    var more1 = document.querySelector(".more1");
    var btn1 = document.querySelector(".btn1");

    if (dots1.style.display === "none") {
        dots1.style.display = "inline";
        more1.style.display = "none";
        btn1.innerHTML = "подробнее";
    } else {
        dots1.style.display = "none";
        more1.style.display = "inline";
        btn1.innerHTML = "скрыть";
    };
};

function readMore2() {
    var dots2 = document.querySelector(".dots2");
    var more2 = document.querySelector(".more2");
    var btn2 = document.querySelector(".btn2");

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        more2.style.display = "none";
        btn2.innerHTML = "подробнее";
    } else {
        dots2.style.display = "none";
        more2.style.display = "inline";
        btn2.innerHTML = "скрыть";
    };
};

function readMore3() {
    var dots3 = document.querySelector(".dots3");
    var more3 = document.querySelector(".more3");
    var btn3 = document.querySelector(".btn3");

    if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        more3.style.display = "none";
        btn3.innerHTML = "подробнее";
    } else {
        dots3.style.display = "none";
        more3.style.display = "inline";
        btn3.innerHTML = "скрыть";
    };
};

$("span").on("click", function() {
    if ($(".menu").hasClass("active")) {
        $("body").removeClass("overflow");
        $(".menu").removeClass("active");
        $(this).siblings(".menu").slideUp(600);
    } else {
        $("body").addClass("overflow");
        $(".menu").addClass("active");
        $(this).siblings(".menu").slideDown(600);
    }
})
$(".scroll-1").on("click", function() {
    $("html,body")
        .stop()
        .animate({
                scrollTop: $(".welcome").offset().top - 120,
            },
            "slow"
        );
});

$(".scroll-target").on("click", function() {
    $("html,body")
        .stop()
        .animate({
                scrollTop: $(".target").offset().top - 60,
            },
            "slow"
        );
});

$(".scroll-faq").on("click", function() {
    $("html,body")
        .stop()
        .animate({
                scrollTop: $(".faq").offset().top - 100,
            },
            "slow"
        );
});

$(".scroll-footer").on("click", function() {
    $("html,body")
        .stop()
        .animate({
                scrollTop: $(".footer").offset().top - 60,
            },
            "slow"
        );
});


$(".phone").mask("+7(999)999-9999");