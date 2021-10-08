
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Put the JSON array into a variable
const json = [
  { "Name" : "Janis ", "number" : 10 },
  { "Name" : "Janisb", "number" : 7 },
  { "Name" : "Ieva", "number" : 8 },
  { "Name" : "Kristaps", "number" : 40 },
  { "Name" : "Edgars", "number" : 9 },
  { "Name" : "Others", "number" : 40 }
];

// Draw the chart and set the chart values
function drawChart() {

  // Set the columns for the Google Chart in the first line of the array
  var condArray = [['Name', 'number']];
  // Loop through the JSON array, set up the value pair & push to the end of condArray
  for(i=0; i<json.length; i++) {
    condArray.push([json[i].Name, json[i].number]);
  }

  // Set the Google Chart options (title, width, height, and colors can be set)
  var options = {
    title: 'Prasmju līmenis, lai spētu sasniegt dienas uzdevumu %, bez iepriekšēja demo, cilvēkiem ar minimālu vai 0 pieredzi pirms EDIBO kursa.',
    'width': 800,
    'height': 400
  };

  // Convert condArray into the DataTable that Google Charts needs and put it in a var
  var data = google.visualization.arrayToDataTable(condArray)

  // Display chart inside of the empty div element using the DataTable and Options set
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
