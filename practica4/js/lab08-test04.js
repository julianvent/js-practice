// convert comma-separated values into an array
const countries = csv.split(",");
console.log(countries);

// convert array into delimited string
const delimitedCountries = countries.join(",");
console.log(delimitedCountries);

// check if these are arrays
console.log(
  `Is csv array: ${Array.isArray(csv)}\tIs countries array: ${Array.isArray(
    countries
  )}`
);

//  sort a simple array
console.log(countries.sort());

// reverse the sort
console.log(countries.reverse());

// remove the first element
console.log(`${countries.shift()} removed. Array is now:`);
console.log(countries);

// remove the last element
console.log(`${countries.pop()} removed. Array is now:`);
console.log(countries);

// add new elements to the front of the array
countries.unshift("Mexico", "Gorgonia");
console.log(countries);

// search for element
console.log(`Countries includes Germany: ${countries.includes("Germany")}`);

// search for element index
console.log(`Germany index: ${countries.indexOf("Germany")}`);

// make a new array by extracting from another array
const moreCountries = countries.splice(countries.length / 2);
console.log(countries);
console.log(moreCountries);

console.log("---------------------");

// there are other array methods which you will learn in Ch 10 */

// use a loop to output all cities whose continent=="NA"
for (let city of cities) {
  if (city.continent === "NA") console.log(city);
}

console.log("---------------------");

// use a loop to output gallery names whose country=="USA"
for (let gallery of galleries) {
  if (gallery.location.country === "USA") console.log(gallery);
}

console.log("---------------------");

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);

// use a loop to output color name if luminance < 75
for (let color of colors) {
  if (color.luminance < 75) console.log(color.name);
}

console.log("---------------------");

// use two nested loops - outer: loop thru colors
for (let color of colors) {
  let rgbSum = 0;
  for (let value of color.rgb) rgbSum += value;
  console.log(`${color.name} ${rgbSum}`);
}

console.log("---------------------");

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */

for (let gallery of galleries) {
   document.writeln(`<li><a href="${gallery.url}">${gallery.name}</a></li>`)
}
