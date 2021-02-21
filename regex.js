//https://www.w3schools.com/js/js_regexp.asp
//syntax ->  /pattern/modifiers;

//The search() method searches a string for a specified value and returns the position of the match:

var str = "Visit W3Schools!";
str.search("W3Schools");
str.search(/w3schools/i); // with regex, i not case sensitive
// 6


// test method of regex
var patt = /e/;
patt.test("The best things in life are free!");
// true


// match method in string //
//The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
var str = "The rain in SPAIN stays mainly in the plain";
str.match(/ain/gi); //g global and i case-insensitive matching
// ["ain", "AIN", "ain", "ain"]
res.toString()
//"ain,AIN,ain,ain"

//[abc]	Find any of the characters between the brackets
//[0-9]	Find any of the digits between the brackets
//(x|y)	Find any of the alternatives separated with |
var str = "re, green, red, green, gren, gr, blue, yellow";
  var patt1 = /(red|green)/g;
  var result = str.match(patt1);

