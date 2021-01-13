// Refer to Week2 Day2

const fs = require('fs');


// add a new callback funtion  in breedDaetails FromFile
const breedDetailsFromFile = function(breed, callbackFunctionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
   // CHANGE: Pass data into callback instead of returning it directly
  console.log("In redFile's Callback: it has the data.")
  // instead of returning data
   if (!error) callbackFunctionToRunWhenThingsAreDone(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// old solution that did not work
// // we try to get the return value
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!

// Change 1: Moved the consolelog (old step above) inot a new function

// const printOutCatBreed = breed => {
//   console.log('Return Value: ', breed)
// };

// these are the same

const printOutCatBreed = function(breed) {
  console.log('Return Value: ', breed)

}

// Change 2 we are now passing 2 arguments into breedDetailsFromFile: breed string and callback
breedDetailsFromFile('Bombay', printOutCatBreed)