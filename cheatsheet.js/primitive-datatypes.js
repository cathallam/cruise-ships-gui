//STRINGS CODE



//Retrieve position in character in string
"Hello".length //“Hello” [0] // “h”
"Hello".length //“Hello” [4] // “0”

//VARIABLES CODE

//Variables are simply containers that store values
//They follow this pattern:

//Variables store values. Lets you store data and recall it later
//Javascript has dynamic typing means you can change from one datatype to another
//Follow the camel case convention e.g. yourName, camelCae
//Snake Case uses underscores e.g. snake_case
//Kebab Case or a dash case e.g. kebab-case

var yourVariableName = yourValue;

//They can store all of the values we've seen
var name = "Leia";
var secretNumber = 73;
var isAdorable = true;

//variables can change e.g. name = "Snoopy" instead of "Leia"

//Recall the stored value by calling the variable name
var name = "Leia";
"hello there " + name    //"hello there Leia"

var num = 37;
num + 3 + 10    //50

//We can also update existing variables
var name = "Robert";
name = "Bob";


//NULL AND UNDEFINED

//The two other primitives are null and undefined

//Variables that are declared but not
//initialized are undefined
//The following variables are undefined:
var name;
var age;

//null is "explicitly nothing"
var currentPlayer = "charlie";
currentPlayer = null;   //game over

