// When the user scrolls the page, execute myFunction
// window.onscroll = function () { myFunction() };

// Get the navbar
// var navbar = document.getElementById("navbar-example");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// $(document).ready(function () {
//   $(window).resize(function () {
//     var wdth = $(window).width();
//     $("span").text(wdth);
//   });
// });

const $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
  $section = $('section');
var numOfPages = $section.length - 1, // 取得section
  curPage = 0, //起始頁
  scrollLock = false; //滾動開關
function scrollPage() {
  //滑鼠滾動
  $(document).on("mousewheel DOMMouseScroll", function (e) {
    if (scrollLock) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
      navigateUp();
    else
      navigateDown();
  });
}

// 上滾動
function navigateUp () {
  if (curPage === 0) return;
  curPage--;
  pagination();
};
// 下滾動
function navigateDown() {
  if (curPage === numOfPages) return;
  curPage++;
  pagination();
};
// 滾動至上/下區塊
function pagination() {
  scrollLock = true;
  $body.stop().animate({
    scrollTop: $section.eq(curPage).offset().top
  }, 1000, 'swing', function(){
    scrollLock = false;
  });
};