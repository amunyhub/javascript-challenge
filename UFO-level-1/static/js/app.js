

// // // create function for button click here 
// // function btnClick() {
// //   const myDate = d3.select("#datetime").property("value");
// //   console.log("myDate");
// //   console.log(myDate);

// }
    
// // Step 2:  Use d3 to append one table row `tr` for each UFO report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function() {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
// });

// // First time when the browser loads the web page
// btnClick();

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);


// // Step 1: Loop Through `data` and prints out each report row in ufo data
// data.forEach(function(ufoData) {
//   console.log(ufoData);
// });


// Step 2:  Use d3 to append one table row `tr` for each ufo object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(ufoData) {
//   console.log(ufoData);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(ufoData) {
//   console.log(ufoData);
//   var row = tbody.append("tr");

//   Object.entries(ufoData).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });


// // Step 4: Use d3 to append 1 cell per weather report value 
// data.forEach(function(ufoData) {
//   console.log(ufoData);
//   var row = tbody.append("tr");

//   Object.entries(ufoData).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the ufo report object
//     var cell = row.append("td");
//   });
// });

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
data.forEach(function(ufoData) {
  console.log(ufoData);
  var row = tbody.append("tr");
  Object.entries(ufoData).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// DATA SHOWS ON PAGEEEEE YAY! now the click

// Assign the data from `data.js` to a descriptive variable
var data = data;


// Select the button
var button = d3.select("#filter-btn");
var form = d3.select("#datetime");


// Create event listeners 
button.on("click", runEnter);
input.on("change",runEnter);

// Complete the event handler function for the form
function runEnter() {

//  // Prevent the page from refreshing
//  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // console.log(inputValue);
  // console.log(data);

  var filteredData = data.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

};