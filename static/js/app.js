// from data.js
var tableData = data;

// YOUR CODE HERE!

// Write code that appends a table to your web page

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var input = d3.select("#datetime");
var tBody = d3.select("tbody");

// Create event handlers 
button.on("click", runEnter);

function runEnter() {

    var inputValue = input.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(ufo => Date.parse(ufo.datetime) >= Date.parse(inputValue));

    console.log(filteredData);

    tBody.html("");
    filteredData.forEach(
        ufo => {
            var raw = tBody.append("tr");
            Object.entries(ufo).forEach(([k, v]) => { raw.append("td").text(v); });
        });

};
