console.log ("1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93");

const ages = [ 3, 9, 23, 64, 2,  8,  28, 93 ]; 
console.log ("array of ages");
console.log (ages); 

console.log ("1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array");
console.log (" Do not use numbers to reference the last element, find it programmatically");
console.log (ages[ages.length - 1] - ages[0]);
//const age = ((3, 9, 23, 64, 2, 8, 28, 93) -  )

console.log ("1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths");
ages.push(5)
console.log (ages);
console.log (ages[ages.length - 1] - ages[0]);

console.log ("1c. Use a loop to iterate through the array and calculate the average age");
let sum = 0
for (let i = 0 ; i < ages.length ; i++) {
sum = sum + ages[i]
}
console.log (sum / ages.length);

console.log ("2.  Create an array called names that contains the following values:");

let names = ['Sam', 'Tommy', 'Sally', 'Buck', 'Bob'];
console.log (names);

console.log ("2a. Use a loop to iterate through the array and calculate the average number of letters per name");
sum = 0
for (let i = 0 ; i < names.length ; i++) {
    sum = sum + names[i].length
}
console.log (sum / names.length);

let temp = ""
for (let i = 0 ; i < names.length ; i++) {
    temp = temp + names[i] + " "
}
console.log (temp);

console.log ("3.  How do you access the last element of any array?");
console.log ("length of the array, minus one");

console.log ("4.  How do you access the first element of any array?");
console.log ("index zero");

console.log ("5.  Create a new array called nameLengths.");
console.log ("Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");

let nameLengths = [];
for (let i = 0 ; i < names.length ; i++) {  
   // sum = sum + names[i].length
  nameLengths.push (names[i].length)
}
console.log (nameLengths);

console.log ("6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. ");

sum = 0
for (let i = 0 ; i < nameLengths.length ; i++) {
sum = sum + nameLengths[i]
}
console.log (sum);

console.log ("7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).");

function repeatword (word, n){
    let temp = ""
    for (let i = 1; i <= n ; i++){ 
        temp = temp + word
    }
    return temp
}
console.log(repeatword("hi", 3))

console.log ("8. Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space."); 

function name (firstName, lastName){
    let fullName = firstName +" "+ lastName 
    return fullName 
}
console.log (name ("geegee", "harsh"))

console.log ("9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.")

function isgreaterthan100 (array) {
    let sum = 0 
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    if (sum > 100) {
        return true
        
    } else {
        return false
    }
}
let pocket = [99, 2]
// "pocket" reps the value let function is holding; it stores a value. 

console.log (isgreaterthan100(pocket))

console.log ("10.  Write a function that takes an array of numbers and returns the average of all the elements in the array."); 

let petAge = [4, 8, 8, 3, 4];

    function averageOfPetAge (anyArray) {

    let sum = 0;

    for (let i = 0; i < anyArray.length; i++) {

        sum += anyArray[i];

    }

    return sum / anyArray.length 
}

// calling it to print average below

console.log (averageOfPetAge(petAge))


console.log ("11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");

// what is being asked of you?
//it is asking write a function 
// add two parameters
//if else statements 
//return 


let nest1 = [2, 1, 3, 10]; //parameter 1
let nest2 = [1, 3, 2, 5];  //parameter 2



function nestPerYear (nest1, nest2) { //call the function/array nestPerYear

    let month1 = 0; //remember that when declaring/using for loops, remember that you ought to add another variable (e.g, "month1" or "month2" to represent for loop "pocket"
    let month2 = 0;
  
    for (let i = 0; i < nest1.length; i++) {
      month1 += nest1[i];

    } 
  
    for (let i = 0; i < nest2.length; i++) {
      month2 += nest2[i];

    }
  
    if (nest1 > nest2) {
        return true
    
    } else {
        return false
    
    }
    
    
  }
  
  //do not forget to concole.log so it prints on the console. 
  console.log(nestPerYear(nest1, nest2));
  

console.log ("12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.")


function willBuyDrink(isHotOutside, moneyInPocket) {

    if (isHotOutside) {
    
    if (moneyInPocket > 10.50) { //(hot outside + mneyinpocket over 10.5 = print true)

          return true;

    }

    } else {

        return false;

    }

    }

console.log (willBuyDrink = true);


console.log ("13.  Create a function of your own that solves a problem. In comments, write what the function does and why you created it.")


//explaim what the function does and why you created it?


//I have created a function that prints true if productivity decreases when Bill gets less than 8hrs of sleep.

//need to use arrays function to reflect interation of how less sleep affects productivity.

let billSleepHours = [1,2,3,4,5,6,7,8] // declare parameters reflecting sleeping <= 8 hrs because in order for the function to work I must call the parameters of the arguments 

let tasksCompleted = [0,0,0,2,4,6,10,20] // the same is happening here but in this case I am showcasing the index that reflects increased productivity

                                        //in interations to further support my arguement. 

                                        

function lessProductivity (billSleepHours, tasksCompleted ) { //here i am putting all the parameters and arguements in place in order by inputting the 

    for (let i = 0; i < billSleepHours.length; i++) { 
        
                                                        // line 215 & 216  I am declaring the argument into the operan so that it is read and called into the console

    for (let i = 0; i < tasksCompleted.length; i++) 
 
        if (billSleepHours [i] < 8) { //here I am using a if function to executed the block of code and paramaeters entered above. 
            
                                        //this function is pretty much affirming that "if" bills sleep hrs are less tha 8 hrs based on the declared interations console should...

       }

      }

     }


  console.log (lessProductivity = true); //print true