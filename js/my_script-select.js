$(document).ready(function () {
  $(".selectpicker").on("change", function () {
    if ($(this).find("option:selected").val() == "2") {
      $(".form-account-selection").addClass("active-account-selected");
    } else {
      $(".form-account-selection").removeClass("active-account-selected");
    }
  });
});






