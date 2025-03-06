// 문서준비 이벤트 : js를 head 영역에 선언할 수 있다.
$(function () { // 시작부분

  // 내가 작성
  //.depth2에 flex를 선언했을 때 사용
  //$(".depth2").hide();
  $(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().fadeToggle();
  });

  //banner
  const banner_list = new Swiper(".banner_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
  });



  /* about_txt */
  const about_txt_list = new Swiper(".about_txt_list", {
    effect: "fade", // 페이드 효과
    fadeEffect: { //페이드 겹치지 않게
      crossFade: true,
    },
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
  });


  /* about_img */
  const about_img_list = new Swiper(".about_img_list", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
  });

  about_txt_list.controller.control = about_img_list;
  about_img_list.controller.control = about_txt_list;



  //prd
  const prd_list = new Swiper(".prd_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.prd_next', // 다음 버튼
      prevEl: '.prd_prev', // 이전 버튼
    },
    breakpoints: {
      768: {
        // 가로해상도가 768px 이상
        slidesPerView: 2, // 한 슬라이드에 보여줄 갯수
      },
      1200: {
        // 가로해상도가 1200px 이상
        slidesPerView: 3,
      },
    },
  });



  // 아코디언 배너
  $(".collection ul li").mouseenter(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });



  // 검색
  $(".btn_search").click(function () {
    $(".search").fadeIn();
  });
  $(".close").click(function () {
    $(".search").fadeOut();
  });




  //mgnb
  $(".ham").click(function () {
    $(".mgnb_wrap,.dim").fadeIn();
    $(".mgnb_box").animate({
      "right": "0"
    });
  });
  $(".mgnb_close").click(function () {
    $(".mgnb_wrap,.dim").fadeOut();
    $(".mgnb_box").animate({
      "right": "-100%"
    });
  });


}); // 종료