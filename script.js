// console.log("Is our script file working?");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyed95xcsjp5uOEf" }).base(
  "appx2BaeOCh3UFpIt"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("vinyls")
  .select({})
  .eachPage(gotPageOfVinyls, gotAllVinyls);

// an empty array to hold our data
var Vinyls = [];

// callback function that receives our data
function gotPageOfVinyls(records, fetchNextPage) {
  // add the records from this page to our array
  vinyls.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllVinyls(err) {
  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }
  // call functions to log and show the books
  consoleLogVinyls();
  showVinyls();
}

// just loop through the books and console.log them
function consoleLogVinyls() {
  console.log("consoleLogVinyls()");
  vinyls.forEach(vinyl => {
    console.log("Vinyl:", vinyl);
    console.log(vinyl.fields.albumCovers[0].url);
  });
}

// look through our airtable data, create elements
function showVinyls() {
  console.log("showVinyl()");
  vinyls.forEach(vinyl => {
    // create container for each fruit
    var vinylContainer = document.createElement("div");
    vinylContainer.classList.add("vinyl-container");
    document.querySelector(".container").append(vinylContainer);
  
    // add all the fruit names as h1 
    var albumTitle = document.createElement("h1");
    albumTitle.classList.add("vinyl-title");
    albumTitle.innerText = vinyl.fields.albumTitle;
    vinylContainer.append(albumTitle);
    
    // add all the pics 
    var albumCovers = document.createElement("img");
    albumCovers.classList.add("vinyl-image");
    albumCovers.src = vinyl.fields.albumCovers[0].url;
    vinylContainer.append(albumCovers);

  // when press button for red, get red fruit color by looking for .Red class added by line 75-77
  var filterMale = document.querySelector(".male");
  filterMale.addEventListener("click", function() {
    if (vinylContainer.classList.contains("male")) {
      vinylContainer.style.display = "block";
    } else {
      vinylContainer.style.display = "none";
    }
  });

  var filterFemale = document.querySelector(".female");
  filterFemale.addEventListener("click", function() {
    if (vinylContainer.classList.contains("female")) {
      vinylContainer.style.display = "block";
    } else {
      vinylContainer.style.display = "none";
    }
  });

    
   
    });
  }
