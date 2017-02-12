(function(){
  angular.module('dataPortalApp')
    .provider('graphProvider', graphProvider);

  function graphProvider() {

    //begin callback declarations
    function drawStalenessGraph() {
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Age', 'Weight'],
          [ 8,      12],
          [ 4,      5.5],
          [ 11,     14],
          [ 4,      5],
          [ 3,      3.5],
          [ 6.5,    7]
        ]);

        var options = {
          title: 'Age vs. Weight comparison',
          hAxis: {title: 'Age', minValue: 0, maxValue: 15},
          vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('freshness-chart'));

        chart.draw(data, options);
      }//end drawChart
    }//end drawStalenessGraph

    function foo() {
      return 'fooFromAProvider - yay!'
    }

    this.$get = function() {
      return {
        drawStalenessGraph: drawStalenessGraph,
        foo: foo
      };
    };//end $get
  }//end graphProvider
})();
