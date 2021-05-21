// from data.js
var tableData = data;

// YOUR CODE HERE!

// Write code that appends a table to your web page

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var input = d3.select("#datetime");
var tBody = d3.select("tbody");
var inputCity = d3.select("#cityy");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");

// Create event handlers 
button.on("click", runEnter);

function runEnter() {

    var inputValue = input.property("value");
    console.log(inputValue);

    var inputCityValue = inputCity.property("value");

    var inputStateValue = inputState.property("value");

    var inputCountryValue = inputCountry.property("value");

    var filteredData = tableData.filter(ufo => Date.parse(ufo.datetime) >= Date.parse(inputValue) || ufo.city === inputCityValue)
        || ufo.state === inputStateValue;

    console.log(filteredData);

    var filteredData2 = tableData.filter(ufo => ufo.country === inputCountryValue);
    console.log(filteredData2)

    tBody.html("");
    filteredData.forEach(
        ufo => {
            var raw = tBody.append("tr");
            Object.entries(ufo).forEach(([k, v]) => { raw.append("td").text(v); });
        });

};

