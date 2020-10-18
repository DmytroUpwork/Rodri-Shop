$(window).on("load", function () {

  var $primary = '#7367F0';
  var $danger = '#EA5455';
  var $warning = '#FF9F43';
  var $primary_light = '#A9A2F6';
  var $danger_light = '#f29292';
  var $warning_light = '#ffc085';
   
  // Session Chart
  // ----------------------------------

  var sessionChartoptions = {
    chart: {
      type: 'donut',
      height: 325,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [58.6, 34.9, 6.5],
    legend: { show: false },
    comparedResult: [2, -3, 8],
    labels: ['Товар 1', 'Товар 2', 'Товар 3'],
    stroke: { width: 0 },
    colors: [$primary, $warning, $danger],
    fill: {
      type: 'gradient',
      gradient: {
        gradientToColors: [$primary_light, $warning_light, $danger_light]
      }
    }
  }

  var sessionChart = new ApexCharts(
    document.querySelector("#statistics-chart"),
    sessionChartoptions
  );

  sessionChart.render();
 
});