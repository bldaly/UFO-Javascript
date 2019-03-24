// load info from data.js
var tableData = data;

//table body
var tbody = d3.select("tbody");

// Submit button
var submit = d3.select("#filter-btn");

data.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  
submit.on("click", function() {

 // Prevent the page from refreshing
 d3.event.preventDefault();

 // Select the input element and input date
 var inputElement = d3.select("#datetime");

 // Get the value property of the input element
 var inputValue = inputElement.property("value");

 console.log(inputValue);
 console.log(tableData);

 var filteredData = data.filter(sighting => sighting.datetime === inputValue);

//Clear table if data is already shown
 var tbody = d3.select("tbody");
tbody.html("")

filteredData.forEach((filteredData) => {
  var row = tbody.append("tr");
  Object.entries(filteredData).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });

console.log(filteredData);

});
});