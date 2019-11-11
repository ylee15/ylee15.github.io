$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('.sun-box').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".sun").toggleClass("visible");
    $(".sun-box").toggleClass("invisible");
    $(".sun .arrow-down").toggleClass("up-animation");
  });

  $('.mercury-box').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".mercury").toggleClass("visible");
    $(".mercury-box").toggleClass("invisible");
    $(".mercury .arrow-down").toggleClass("up-animation");
  });

  $('.venus-box').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".venus").toggleClass("visible");
    $(".venus-box").toggleClass("invisible");
    $(".venus .arrow-down").toggleClass("up-animation");
  });

  $('.earth-box').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".earth").toggleClass("visible");
    $(".earth-box").toggleClass("invisible");
    $(".earth .arrow-down").toggleClass("up-animation");
  });

  $('.mars-box').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".mars").toggleClass("visible");
    $(".mars-box").toggleClass("invisible");
    $(".mars .arrow-down").toggleClass("up-animation");
  });

  $('.jupiter-box').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".jupiter").toggleClass("visible");
    $(".jupiter-box").toggleClass("invisible");
    $(".jupiter .arrow-down").toggleClass("up-animation");
  });

  $('.saturn-box').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".saturn").toggleClass("visible");
    $(".saturn-box").toggleClass("invisible");
    $(".saturn .arrow-down").toggleClass("up-animation");
  });

  $('.uranus-box').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".uranus").toggleClass("visible");
    $(".uranus-box").toggleClass("invisible");
    $(".uranus .arrow-down").toggleClass("up-animation");
  });

  $('.neptune-box').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".neptune").toggleClass("visible");
    $(".neptune-box").toggleClass("invisible");
    $(".neptune .arrow-down").toggleClass("up-animation");
  });
});
