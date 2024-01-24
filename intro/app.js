//if

if(1===1) {
    console.log("its truee");
}


//else if
let rating =1
if(rating ===2){
    console.log("you are a superstar");
}
else if(rating===3){
    console.log("your amazing!")
}

//else
if(rating ===2){
    console.log("you are a superstar");
}
else if(rating===3){
    console.log("your amazing!");
}
else {
    console.log("whaaaaat")
}


let highScore = 1200;
let newScore = 156;

if(newScore>=highScore){
    console.log(`congratz you beat the score of ${highScore} with the score of ${newScore}`)

}
else{
    console.log(`sorry your score of ${newScore} did not beat the score of ${highScore}`)
}


//truthy/ falsey every condition is has a defualt truth or false value

let mystery = 2

if(mystery){
    console.log("truthy")
}


//switch

let day = 7;

switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    default:
        console.log("woooo");

}

//ternary operater
let number = 8 
number === 7? console.log("lucky") : console.log("unlucky");

// can assign with ternanry
let status = "offline";

let color = status ==='offline' ?  "red" :  "green";
console.log(color)



// arrays

//empty array
let students = [];

// array of strings
let colors = ['red','yellow','green']
colors[0] // red
colors[1] // yellow
colors[colors.length -1] // last item which is green

//mixed array
let stuff = ['gurmeet',43,null]

// modifying arrays they are mutable itll  update the array 
let shoppingList =["chedder cheese", "2% milk"]
shoppingList[1]= 'whole milk';
shoppingList[2]= 'ice cream';
console.log(shoppingList)


//array methods
//push add to the end of a array
shoppingList.push("steak"); // adds steak to the end

//pop
let whatIsIt = shoppingList.pop(); // steak pops the last thing in the array mutating the array


//shift
shoppingList.unshift("apples"); // add to the begining

let firstItem = shoppingList.shift(); // remove them from the beggining

// objects

//object literal using brackets as a object:
const fitBitData = {
    totalSteps: 3000,
    totalMiles: 2,
    avgCaloriesBurn: 343,
    workoutsThisWeek: '5 of 7',
    1: "one" // cant access this as fitbitData.1 -> you will get an error

};

// 3 ways to access this

fitBitData[1] // "one" it converts the 1 in the bracket to a string and finds it 
fitBitData.totalMiles // 3000
fitBitData["totalSteps"] // 2

// updating or adding to a object
const userReview = {}; // empty object

userReview.mrSmith = 78 // now userReview will have a mrSmith property with 78 as the value
userReview["queenBEE"] = 54 // same thing

userReview.mrSmith += 2 // updates the value 

//loops

// for 
for(let i =1; i<=10;i++ ){
    console.log(`hello ${i}`)
}
//for of - expects iterable
for(let food of shoppingList){
    console.log(food);
}


//while
while(true){
    break;
}

// looping over objects
for(let data of Object.keys(fitBitData)){
    console.log(data, fitBitData[data]);
}

// for in - expect objects
const pairWords ={
    milk: 'shake',
    face:'book',
    black:'berry'

}
for(let word in pairWords){
    console.log(word)
    console.log(pairWords[word])
}


//functions

//function definition
function funcName(){
    console.log("this is my function");
};
// call function
funcName();

function rolDie(){

    
        console.log(Math.floor(Math.random()*6+1))
    
}

rolDie();

//function with parameters
function greet(greetName){
    console.log(`hi ${greetName}`)
}

greet("gurmeet")

//return can only have 1 return statement will break out of the entire function not just block 
function addNums(x,y){
    return x+y
}

//is valid password
function isValidPassword(username, password){
    if(password.length >=8 && !(password.includes(' ')) && !(password.includes(username)))  {
        return true;
    }
    else return false;
};

console.log(isValidPassword("gurmeet123", "sdafasdfasf"));
console.log("gurmeet123".indexOf('gurmeet'))

function getAverage(numbers){
    let total = 0;
    for( let i of numbers){
       
        total +=i;


    }
    return total/numbers.length;
}

array1= [1,4,6,243,345,234,4];
console.log(getAverage(array1));

// pangram contains every letter of the alphabet in one sentence
function isPangram(sentence){
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(sentence.toLowerCase().indexOf(char)===-1){
            return false;
        }
    }
    return true;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"))


function pick(arr){
    let indx= Math.floor(Math.random() * arr.length)
    return arr[indx];
}
function getRandomCardFromDeck(){
    let card ={};
    let suits = ['clubs', 'spades','hearts','diamonds']
    let values = ['ace', 'king', 'queen','jack', 10,9,8,7,6,5,4,3,2]
    

    card.suit =  pick(suits)
    card.value = pick(values)

    return card;



}

console.log(getRandomCardFromDeck());

//function expression - another way for writing a function
const square = function (num){
    return num*num;
}
 console.log(square(5));

 // you can also add a name
 const square2 = function doubling(num){
    return num*num;
}
 console.log(square2(3));

 // can add into an array
 function add2(num){
    return num+2;
}
function sub2(num){
    return num-2;
}

const operations = [add2, sub2]

console.log(operations[1](5))

//can loop over this
for(let x of operations){
    console.log(x(10))
}

//can put it in a object
const myObject ={
    doSomething: add2
}

console.log(myObject.doSomething(12))

//functions can take functions as arguments

function callTwoTimes(func){
    func();
    func();
}

function cry(){
    console.log('im crying')
}

console.log(callTwoTimes(cry))

//we can return another function

// imagine this is a function that make more functions of a certain behavior;
function multiplyBy(num){
    return function (x) {
        return x * num;
    }
}

const triple = multiplyBy(3);

const halve = multiplyBy(.5);

console.log(triple(8));
console.log(halve(.5));


//function call backs
setTimeout(() => {
    console.log("hi im a call back after waiting 1 second")
}, 1000);

//hoisting function is called before its declared still works
howl()

function howl(){
    console.log("howwwllllllll")
}


//callbacks on array methods

const myNums =[9,8,7,6,5,4,3,2,1]
const words = ['asap', 'byob','rsvp']

// 2 different ways of calling for each 
//1 - you also get the index for free if you use idx
myNums.forEach(function(num,idx){
    console.log(idx,num);
})

//2 
let printTrip = function(n){
    console.log(n*3)
}

myNums.forEach(printTrip)


//map
const doubleArr = myNums.map((num)=>{
    return num *2;
})
console.log(doubleArr)

const myWords = words.map((word)=>{
    return word.toUpperCase().split('').join('.')
    
    
})
console.log(myWords)


// arrow function
const imSquareing =(x)=>{
    return x*x;
}

console.log(imSquareing(2))

//if one parameter no paranthesis needed
const imSquareing2 = x =>{
    return x*x;
}

// implicit return if you have single expressin to tbe returned
const imSquareing3 = myNums.map(x => x*x);
console.log(imSquareing3)

const oddsEvens = myNums.map(x =>(
    x %2 === 1 ? "odd" :"even"
))

console.log(oddsEvens)


// find
let movies = ['the shining', 'the lion king', 'passion of the christ' ]

const movie = movies.find(movie => {
    return movie.includes('the');
})

console.log(movie)

//filter - makes a copy
const myOddNum = myNums.filter(num => {
    if(num % 2 === 1){
        return num
    }
})
console.log(`odd array from filter: ${myOddNum}`)

// another way thats look easier notice the difference and no return statement

const myMiddleNums = myNums.filter(n =>(
    n >3 && n <8
))

console.log(myMiddleNums);

//every - all things must tbe true and will return true
const isHaveThe = movies.every(movie =>(
    movie.includes('the')
))

console.log('does movies have the',isHaveThe)

//some - atleast one thing must be true to return true
const isHaveIng = movies.every(movie =>(
    movie.includes('ing')
))

console.log('does movies have ing',isHaveIng)

//reduce
const sumOfArr = myNums.reduce((acu, currentVal)=> {
    return acu + currentVal;
});

console.log('sum of num:', sumOfArr)

const myMaxVal = myNums.reduce((acc, curVal) =>{
    if(acc > curVal){
        return acc;
    }
    return curVal
})

console.log('my val:', myMaxVal)

// another way
const myMaxVal2 = myNums.reduce((acc, curVal) =>{
   return Math.max(acc, curVal)
})

console.log('my val:', myMaxVal2)

//more reduce

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// To tally the votes:
// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {})

// The shorter version:
const results = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});

console.log(results)

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]
// To group books by rating: 
const groupedByRatings = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book)
  return groupedBooks;
}, {})

// default parameters if you say = 1 then if no value is passed then itll be assigned to 1 order matters and default params must be at the end

function multiply(x,y=1){
    return a * b;
}

//spread means ... and behave differently depending on the situation

myN = [345,46,20,86,35]
console.log(Math.max(myN)) // does not work
//using spread works its like individually passing those values
console.log(Math.max(...myN))

const myColors = ['red','blue','yellow', 'purple']

function giveMeFour(a,b,c,d){
    console.log('a', a)
    console.log('b', b)
    console.log('c', d)
    console.log('d', c)
}

// if we pass colors the array itll only assign it to the first variables but if we spread it will assign it to all of them
let myStr = 'gurmeetsingh'
giveMeFour(myColors)// only a
giveMeFour(...myColors)// all of them
giveMeFour(...myStr) // only first 4 of the string


//you can combine array using spread

const myNewArr = [...myColors, ...myN]
console.log(myNewArr)

// object spread only works inside object no where else
const animal ={
    legs: 4,
    hasFur: true
}

const dog = {
    ...animal,
    doesBark: true
}

console.log(dog)// order matters 
const cat = {
    ...animal,
    legs: 6
}
console.log(cat) // legs was overwritten with 6


// rest
function sum(...nums){
    return nums.reduce((total,curVal)=>{
        return total + curVal;
    })
}

console.log(sum(1,2,3,5,734,5,3467));

function fullName(first, last, ...other){
    console.log(first)
    console.log(last)
    console.log(other)
}
fullName("gurmeet",'singh','royal','mety','meet')

//destructuring - notice the difference between destructing an array and object one uses [] the other uses {}
const winners = ['gurmeet', 'victor','simon', 'david', 'marco']

const [first, second, third] = winners;
const [gold, , bronze] = winners;
console.log(first, second, third);
console.log(gold, bronze);


const oneBook = {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  }

  const {title, genres, cover} = oneBook;

  console.log(title, genres, cover)// see that cover has nothing

  const{authors , ...other} = oneBook; 
  console.log(authors, other)


// destructing parameters

function printBook({title,authors}){
    console.log(title, authors)
}
printBook(oneBook);

//short hand syntex when you want to return a object without it being to much
function getStats (arr){
    let max = Math.max(arr);
    let min = Math.min(arr);
    let total = arr.reduce((sum, r) => sum + r)

    return {
        max,
        min,
        total
    }
}

console.log(getStats(myN))

//computed properties
let role = 'host'
let person = 'gurmeet'

let showHost = {
    [role]:person
}

console.log(showHost)

function addToObj(obj, key, value){
    return {
        ...obj,
        [key]:value // this is computed to be the value we pass or else itll be 'key':senior instead of 'level': 'senior'
    }
}

let newObj = addToObj(showHost,'level','senior')
console.log(newObj)

//adding method to object

