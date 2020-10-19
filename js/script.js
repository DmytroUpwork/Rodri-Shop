$(document).ready(function () {

  // Настройки слайдера диапазона цен ===============
  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 1,
      max: 100,
      values: [10, 80],
      slide: function (event, ui) {
        // $("#price").val(ui.values[0] + " ₽     " + +ui.values[1] + " ₽ ");
        $("#min-price").val(ui.values[0] + " ₽ ");
        $("#max-price").val(ui.values[1] + " ₽ ");
      },
    });
    $("#min-price").val( $("#slider-range").slider("values", 0) + " ₽ " );
    $("#max-price").val( $("#slider-range").slider("values", 1) + " ₽ ");
    // $("#price").val(
    //   $("#slider-range").slider("values", 0) +
    //     " ₽     " +
    //     $("#slider-range").slider("values", 1) +
    //     " ₽"
    // );
  });
  $(".ui-slider-handle").draggable();


  // Поле текущей даты в форме =====================
  $("#myDate").val(new Date().toISOString().slice(0, 10));

  // Горизонтальный скролл таблицы ================= 
  if ($(window).width() <= "1200") {
    $(".wrapper").mousewheel(function (e, delta) {
      this.scrollLeft -= delta * 40;
      e.preventDefault();
    });
  } 
  // $(".wrapper").mousewheel(function (e, delta) {
  //   this.scrollLeft -= delta * 40;
  //   e.preventDefault();
  // });
  
});



