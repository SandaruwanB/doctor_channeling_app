// Set new default font family and font color to mimic Bootstrap's default styling
const xhr = new XMLHttpRequest();
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

function getChartData(){
  data[0] = 15000;
  xhr.open("GET", "http://localhost:8080/chart/data", true);

  console.log(xhr.responseType);

  
}
// Area Chart Example

