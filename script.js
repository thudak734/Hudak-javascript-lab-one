let name = "Mitch Cuckovich";
let age = 25;
let birthday = "January 24";
let pineapplePizza = prompt("Do you like Pineapple on your pizza? Yes or No?");
let lifeEvents = [ "I was born in Troy, Michigan." , "I went to hope college" , "I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event" , "I'm a graduate of a Grand Circus bootcamp."]



if (pineapplePizza === "Yes" ) {
    console.log(`My name is ${name} I was born on ${birthday} and I am ${age} years old. I like Pineapple on my pizza.`);
} else {
    console.log(`My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`);
} 

for (let i = 1; i < lifeEvents.length ; i++){
    console.log(lifeEvents[i]);
}


let counter = 0;


while (true) {
    let randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1 )
    if ( randomNumber !== 5 ) {
        counter++
        console.log( randomNumber + " !==5")
    }else {
        counter++;
        console.log(`5===5. It took ${counter} iterations to randomly generate the number 5.`)
        break;
    }
    
   
}


// console.log(name + age + birthday + pinapplePizza);

/*Write a while loop that loops while true.  
Declare a variable named randomNumber that is initialized to a random integer between 1 and 10. Google search how to do this.
Write an if/else statement that has two conditions
If randomNumber is not equal to 5
Increment counter
Use a console.log method to say: “randomNumber !== 5”
Else 
Increment counter
Use a console.log method to say: “5 === 5. It took counter iterations to randomly generate the number 5.”
Break
*/


