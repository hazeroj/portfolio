$(document).ready(function () {
    const home = $('#home')
    const ice_left = home.find('.ice_left');
    const ice_right = home.find('.ice_right')
    const star = home.find('.star')
    const s_star = home.find('shooting_star')
    const r_nav = $('.right_nav')
    const design = $('#design div')
    const gnb = $('header')
    const coffee = $('#pf1 .left a:not(:last-child)')


    r_nav.hide()

    // 빙하등장
    setTimeout(function () {
        ice_left.animate({ 'bottom': '0px' }, 1000);
        ice_right.animate({ 'bottom': '0px' }, 1500);
        $('.mouse').animate({ 'opacity': '1' }, 1500);
        $('.s_down').animate({ 'opacity': '1' }, 1500);
    }, 2000);

    // 홈화면 빙하이동
    window.addEventListener('scroll', function () {
        let scroll = window.scrollY;
        console.log(scroll)

        ice_left.css({ 'left': scroll * -1 })
        ice_right.css({ 'right': scroll * -1 })


        // 우측 내비 등장
        if (scroll >= 800) {
            r_nav.fadeIn()
            gnb.fadeOut()
        } else {
            r_nav.fadeOut()
            gnb.fadeIn()
        }

        // 스크롤에 따라 내비게이션 색상 변경
        let i = Math.floor(scroll / 919 + 0.6);

        r_nav.find('span').eq(i).addClass('act').siblings().removeClass('act')


        // 스크롤 내리면center등장
        if (scroll >= 400) {
            $('#about .center').animate({ 'right': '0px' }, 1000)
        }
        if (scroll >= 1300) {
            $('#pf1 .center').animate({ 'right': '0px' }, 1000)
        }
        if (scroll >= 2100) {
            $('#pf2 .center').animate({ 'right': '0px' }, 1000)
        }
        if (scroll >= 3100) {
            $('#pf3 .center').animate({ 'right': '0px' }, 1000)
        }
        if (scroll >= 4100) {
            $('#pf4 .center').animate({ 'right': '0px' }, 1000)
        }
        if (scroll >= 5000) {
            $('#design .center').animate({ 'left': '0px' }, 1000)
        };


        // 우측 내비게이션 클릭 시
        r_nav.find('span').click(function () {
            $(this).addClass('act').siblings().removeClass('act');

            let n = $(this).index();
            console.log(n);

            $(window).scrollTop(n * 919)

            $(this).appendTo()
        });

    });

    // 디자인 영역
    // 좌측 버튼 클릭시 우측 이미지 보이게하기
    design.find('li').click(function () {
        $(this).addClass('d_act').siblings().removeClass('d_act');
    });
    let d_l_all = design.find('li:first-child')
    let d_l_banner = design.find('li:nth-child(2)')
    let d_l_logo = design.find('li:nth-child(3)')
    let d_l_pattern = design.find('li:last-child')
    let d_img = design.find('img')

    d_l_all.click(function () {

        d_img.hide();
        d_img.fadeIn();
    })
    d_l_banner.click(function () {
        d_img.hide();
        $('.banner').fadeIn();

    })
    d_l_logo.click(function () {
        d_img.hide();
        $('.logo').fadeIn();

    })
    d_l_pattern.click(function () {
        d_img.hide();
        $('.pattern').fadeIn();
    })


    // 디자인 우측 이미지 클릭시 디자인 크게 볼 수 있게하기
    design.find('img').click(function () {
        let a = $(this).attr('src');
        let title = $(this).attr('class');
        console.log(title)

        let modal =
            `<div class="modal">
            <div class="m_center">
                <h3>${title}</h3>
                <img src="${a}">
                <div class="c_btn">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>`

        $('body').append(modal)


        $('.c_btn>span').click(function () {
            $('.modal').fadeOut();
        })
    });


    // 상단 내비게이션 클릭시 이동하기
    $('.gnb>li>a').click(function () {
        let nav_li = $(this).parent().index();
        let nav_a;

        if (nav_li <= 1) {
            nav_a = nav_li + 1
        } else {
            nav_a = nav_li + 4
        }

        console.log(nav_a);

        $('html, body').stop().animate({
            scrollTop: 919 * nav_a
        }, 500);
    });

    // 내비게이션 서브메뉴 보이게하기
    $('.sub').hide();

    $('.gnb>li:nth-child(2)').mouseover(function () {
        $('.sub').stop().slideDown();
    });
    $('.gnb>li:nth-child(2)').mouseleave(function () {
        $('.sub').stop().slideUp();
    });

    // 서브메뉴 클릭시 이동하기
    $('.sub a').click(function () {
        let nav_li = $(this).parent().index() + 2;

        console.log(nav_li);

        $('html, body').stop().animate({
            scrollTop: 919 * nav_li
        }, 500);
    });

    // 마우스커서 효과넣기
    $(document).mousemove(function (e) {
        let cursor = $(".custom-cursor");

        cursor.css('left', e.clientX + "px");
        cursor.css('top', e.clientY + "px");
    });


    // 포트폴리오 마우스 오버시 텍스트 변경하기

    $('section:not(#pf1) .left>a:nth-child(2)').mouseover(function(){
        $(this).text('권장해상도 1280px ~ ')
    });

    $('section:not(#pf1) .left>a:nth-child(2)').mouseleave(function(){
        $(this).text('PC 바로가기')
    });

    $('#pf2 .left>a:nth-child(3)').mouseover(function () {
        $(this).text('권장해상도 375px ~')
    });

    $('#pf2 .left>a:nth-child(3)').mouseleave(function () {
        $(this).text('App 바로가기')
    });

    $('#pf3 .left>a:nth-child(3),#pf4 .left>a:nth-child(3)').mouseover(function () {
        $(this).text('권장해상도 744px ~')
    });

    $('#pf3 .left>a:nth-child(3),#pf4 .left>a:nth-child(3)').mouseleave(function () {
        $(this).text('TABLET 바로가기')
    });

    $('#pf3 .left>a:nth-child(4),#pf4 .left>a:nth-child(4)').mouseover(function(){
        $(this).text('권장해상도 375px ~')
    });

    $('#pf3 .left>a:nth-child(4),#pf4 .left>a:nth-child(4)').mouseleave(function(){
        $(this).text('MOBILE 바로가기')
    });

        // 포트폴리오 좌측 a태그 클릭하면 이미지 나오게하기
        coffee.click(function () {
            let a = $(this).attr('src');
            let title = $(this).attr('title');

            console.log(title)
    
            let modal =
                `<div class="modal">
                <div class="m_center">
                    <h3>${title}</h3>
                    <img src="${a}">
                    <div class="c_btn">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>`
    
            $('body').append(modal)
    
    
            $('.c_btn>span').click(function () {
                $('.modal').fadeOut();

                return false;
            })
        });
});
