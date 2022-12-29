//Exercice 1 : Instruction If/Else Simple
let x = 10;
let y = 5;
if (x>y){
console.log (x, "is the biggest number");
}
else{
console.log(y,"is the biggest number");
}


// Exercice2
let newDog="Chihuahua";
console.log("the number of letters is : ",newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog){
    console.log ( "if it does, display I love Chihuahuas, it’s my favorite dog breed");
    }
    else{
    console.log("I dont care, I prefer cats");
    }

//Exercice3
let number=prompt("Enter the number");
if (number % 2 === 0){
console.log(number + " is an even number")
}
else{
    console.log("is an odd number")
}


//Exercice4
let sentence= "The movie is not that bad, I like it" 
let wordNot = sentence.indexOf("not") 
let wordBad = sentence.indexOf("bad") 
 if (wordNot !== -1 && wordBad !== -1 && wordNot< wordBad) { 
  let ordersentence= sentence.slice(0, wordNot) +"good" + sentence.slice(wordBad +3); 
     console.log(ordersentence); 
     }  
     else { 
         console.log(ordersentence); 
         }

