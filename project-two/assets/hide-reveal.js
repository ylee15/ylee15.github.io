$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('#sun-info').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".sun").toggleClass("visible");
    $(".sun-box").toggleClass("invisible");
  });

  $('#mercury-info').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".mercury").toggleClass("visible");
    $(".mercury-box").toggleClass("invisible");
  });

  $('#venus-info').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".venus").toggleClass("visible");
    $(".venus-box").toggleClass("invisible");
  });

  $('#earth-info').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".earth").toggleClass("visible");
    $(".earth-box").toggleClass("invisible");
  });

  $('#mars-info').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".mars").toggleClass("visible");
    $(".mars-box").toggleClass("invisible");
  });

  $('#jupiter-info').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".jupiter").toggleClass("visible");
    $(".jupiter-box").toggleClass("invisible");
  });

  $('#saturn-info').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".saturn").toggleClass("visible");
    $(".saturn-box").toggleClass("invisible");
  });

  $('#uranus-info').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".uranus").toggleClass("visible");
    $(".uranus-box").toggleClass("invisible");
  });

  $('#neptune-info').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".neptune").toggleClass("visible");
    $(".neptune-box").toggleClass("invisible");
  });
});
