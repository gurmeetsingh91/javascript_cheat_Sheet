// ********NUMBERS********** 
12
1234
596
-3
2.345
2.00000005


// addition
1+3

// subtraction
1-4

// multiplication
4*9

//division
12/4

// modulo
12%5

// exponents 2 to the fifth
2**5

//NaN(not a number)
0/0
// NaN plus 200 = NaN still
0/0 + 200

// ********VARIABLES**********

// let
let age = 70;
age = age +1;
// cannot do let age = 8 again since its already declared

//plus equal
//age updated by 2
age+=2;

//counter
age++;

//const you cant change the value
const year = 1973;
const pi =3.14

//var (this isnt used often anymore old way of doing things)
var eggs =20;

// boolean
true
false
let isLoggedIn = true;
let isHungry = true;

//variables can change types
let isAngry =false; //boolean
isAngry = 3405; // to number

//strings
let firstName = "ziggy" // can be double quotes 
let lastName = 'zobby' // or single quotes be CONSISTENT

//quotes inside
let said = "he said 'lol'"; // cant us double quotes within doublequotes 
//string operations
let fullName = firstName + lastName

// "hi " + 1 = "hi 1"

// strings are indexed
  "gurmeet"
// 0123456   g=0 u=1 r=2 ...
let gname = "gurmeet"
gname[0];

//strings are inmutable meaning you cant change them they need to be redclared u cant do gname[0] = "G" to captilaize the name

//string Methods
let msg = "   you are grounded!  "
msg = msg.toUpperCase();
msg.trim().toLowerCase();


let tvShow='catdog';
tvShow.indexOf('dog'); // tells the first occurance
tvShow.slice(2) // cuts the first 2 off = "tdog"
tvShow.slice(0,4) // catd start at end

tvShow.replace("cat","dog") // dog dog 

//string quiz
//1. const age = "5" + "4"
//2. "pecan pie"9[7]
//3. "PUP"[3]
//quiz answers:
//1. "54"
//2. "i"
//3. undefined

// string escapes
"he said I ain\'t happy" // "he said i ain't happy"

"he said I \"ain\'t happy\"" // "he said i "ain't happy""

//string template literls

//uses back "tick"
`he said lol`

//dollar sign with brackets can bring in expressions
let animal = "pig"
let sound ="oink"
`${animal} says ${sound}`

// null and undefined

// null is intentional absence of any value and must be assigned - intentional
// undefined is variables that do not have an assigned value or undefined - nothing there






