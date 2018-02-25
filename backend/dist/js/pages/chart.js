
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([['Year', 'Buy', 'Sell'],
    ['2017-11-07',  0.270389,      0.310948],
    ['2017-11-07',  0.270391,      0.31095],
    ['2017-11-07',  0.270393,      0.310952],
    ['2017-11-07',  0.270395,      0.310954],
    ['2017-11-07',  0.270397,      0.310956],
    ['2017-11-07',  0.271121,      0.31179],
    ['2017-11-07',  0.271846,      0.312623],
    ['2017-11-07',  0.272571,      0.313456],
    ['2017-11-07',  0.272572,      0.313458],
    ['2017-11-07',  0.272574,      0.31346],
    ['2017-11-07',  0.272576,      0.313462],
    ['2017-11-07',  0.272578,      0.313465],
    ['2017-11-07',  0.27258,      0.313467],
    ['2017-11-07',  0.273304,      0.3143],
    ['2017-11-07',  0.274029,      0.315133],
    ['2017-11-07',  0.274754,      0.315967],
    ['2017-11-07',  0.274755,      0.315969],
    ['2017-11-07',  0.274757,      0.315971],
    ['2017-11-07',  0.274759,      0.315973],
    ['2017-11-07',  0.274761,      0.315975],
    ['2017-11-07',  0.274768,      0.315983],
    ['2017-11-07',  0.274775,      0.315992],
    ['2017-11-07',  0.274783,      0.316],
    ['2017-11-07',  0.274819,      0.316042],
    ['2017-11-07',  0.274821,      0.316044],
    ['2017-11-07',  0.274839,      0.316065],
    ['2017-11-07',  0.275563,      0.316898],
    ['2017-11-07',  0.276288,      0.317731],
    ['2017-11-07',  0.277013,      0.318565],
    ['2017-11-07',  0.277737,      0.319398],
    ['2017-11-07',  0.278462,      0.320231],
    ['2017-11-07',  0.279187,      0.321065],
    ['2017-11-07',  0.279911,      0.321898],
    ['2017-11-07',  0.280636,      0.322731],
    ['2017-11-07',  0.281361,      0.323565],
    ['2017-11-07',  0.282085,      0.324398],
    ['2017-11-07',  0.28281,      0.325231],
    ['2017-11-07',  0.283534,      0.326065],
    ['2017-11-07',  0.284259,      0.326898],
    ['2017-11-07',  0.284984,      0.327731],
    ['2017-11-07',  0.285708,      0.328565],
    ['2017-11-07',  0.286433,      0.329398],
    ['2017-11-07',  0.287158,      0.330231],
    ['2017-11-07',  0.287882,      0.331065],
    ['2017-11-07',  0.288607,      0.331898],
    ['2017-11-07',  0.289332,      0.332731],
    ['2017-11-07',  0.290056,      0.333565],
    ['2017-11-07',  0.290058,      0.333567],
    ['2017-11-07',  0.29006,      0.333569],
    ['2017-11-07',  0.290067,      0.333577],
    ['2017-11-07',  0.290074,      0.333585],
    ['2017-11-07',  0.290082,      0.333594],
    ['2017-11-07',  0.290083,      0.333596],
    ['2017-11-07',  0.290085,      0.333598],
    ['2017-11-07',  0.290087,      0.3336],
    ['2017-11-07',  0.290089,      0.333602],
    ['2017-11-07',  0.290091,      0.333604],
    ['2017-11-07',  0.290098,      0.333613],
    ['2017-11-07',  0.290105,      0.333621],
    ['2017-11-07',  0.290123,      0.333642],
    ['2017-11-07',  0.29013,      0.33365],
    ['2017-11-07',  0.290138,      0.333658],
    ['2017-11-07',  0.290156,      0.333679],
    ['2017-11-07',  0.290163,      0.333688],
    ['2017-11-07',  0.29017,      0.333696],
    ['2017-11-07',  0.290178,      0.333704],
    ['2017-11-07',  0.290185,      0.333712],
    ['2017-11-07',  0.290192,      0.333721],
    ['2017-11-07',  0.290199,      0.333729],
    ['2017-11-07',  0.290207,      0.333737],
    ['2017-11-07',  0.290208,      0.33374],
    ['2017-11-07',  0.29021,      0.333742],
    ['2017-11-07',  0.290212,      0.333744],
    ['2017-11-07',  0.290219,      0.333752],
    ['2017-11-07',  0.290221,      0.333754],
    ['2017-11-07',  0.290223,      0.333756],
    ['2017-11-07',  0.290225,      0.333758],
    ['2017-11-07',  0.290226,      0.33376],
    ['2017-11-07',  0.290228,      0.333762],
    ['2017-11-07',  0.29023,      0.333765],
    ['2017-11-07',  0.290237,      0.333773],
    ['2017-11-07',  0.290245,      0.333781],
    ['2017-11-07',  0.290252,      0.33379],
    ['2017-11-07',  0.290254,      0.333792],
    ['2017-11-07',  0.290255,      0.333794],
    ['2017-11-07',  0.290263,      0.333802],
    ['2017-11-07',  0.290264,      0.333804],
    ['2017-11-07',  0.290266,      0.333806],
    ['2017-11-07',  0.290268,      0.333808],
    ['2017-11-07',  0.290286,      0.333829],
    ['2017-11-07',  0.290293,      0.333838],
    ['2017-11-08',  0.288607,      0.331898],
    ['2017-11-22',  0.6228,      0.692],
    ['2017-11-24',  1,      1.1],
    ['2017-12-04',  1.359,      1.51],
    ['2017-12-07',  1.773,      1.97],
    ['2017-12-11',  1.827,      2.03],
    ['2018-01-08',  2.4192,      2.688],
    ['2018-01-15',  2.92851,      3.2539],
    ['2018-01-23',  4.62267,      5.1363],
  ]);

  var options = {
    curveType: 'function',
    legend: { position: 'bottom' }
  };
  var chart = new google.visualization.LineChart(document.getElementById('line-chart'));
  chart.draw(data, options);
}