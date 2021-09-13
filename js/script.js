$(function () {
    /* 네비게이션 하나씩 */
    $("ul.gnb>li").hover(function () {
        $(this).find("ul.sub").show();
    }, function () {
        $(this).find("ul.sub").hide();
    });

    /* 슬라이드  좌우*/
    var slideIndex = 0;
    setInterval(function () {
        if (slideIndex < 2) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        $(".slide ul").animate({
            left: (-800 * slideIndex)
        }, 500)
    }, 3000);

    /* 모달 */
    $(".notice ul li").first().click(function () {
        $(".modal").show();
    });
    $(".modal button").click(function () {
        $(".modal").hide();
    });
});