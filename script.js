




/* const webDev = () => {
    return new Promise( (pass,  reject ) => {
        setTimeout(() => {
            const error = false;
            if (error) {
                reject("I'm not web dev")
            }else{
                pass("I'm a web dev")
            }
        }, 1000)
    })
}

webDev()
.then((success) => console.log(success))
.catch((error) => console.log(error)) */
// promises
/* const buyTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const error = true;

            if (error) {
                reject("Sorry your payment was not Succeessful")
            }else{
                resolve("Thank you, your payment was Succeessful")
            }
        }, 1000)
    })
}

buyTicket()
.then( (success) => console.log(success))
.catch((error)=> console.log(error)); */


//Trailing commas
/* function add (param1,) {
    const example = {
        name: "Khan",
    };
    console.log(example)
};

add(2) */


//classes
/* import {Animal} from './animal.js'

let cat = new Animal('cat',4);

cat.legs = 3;

console.log(cat.type) */


/* let example = 'Youtube.com/CodingTutorials360';
 */

//console.log(example.padEnd(9, "o"))

/* import {suM} from './data.js';

let result = suM(3,5);

console.log(result); */

/* const example = {};
example.firstName = 'Dylan'
console.log(example)
 */

/* const listIngredients = ["flour","sugar","eggs","butter"];


if (listIngredients.includes("eggs")) {
    console.log("We are going to make a cake")r3
} else {
    console.log("We can't make a cake")
 
}
*/

/* let numArray = [1,2,3,4,5];
console.log(numArray.includes(0)) */


/* const foodGrocery = (food = "something") => `I'm going to buy ${food} from the grocery shop`;

console.log(foodGrocery()) */
/* const ComStudent = (name) => {
    console.log(`${name} is the computer science student`)
}

ComStudent("Mohsin"); */

/* const dinnerMenu = (food, drink) => `I'm going to eat a ${food} & drinking ${drink} for dinner`;

console.log(dinnerMenu("chicken", "pepsi")) */
/* function add(...nums) {
    console.log(nums)
}

add(4,6,7,8) */


/* const shoppingList = ["eggs", "milk", "butter"];

let shoppingBasket =["pasta", ...shoppingList, "meat"]

console.log(shoppingBasket) */

/* let contacts = ["Mary", "Joel", "Danny"]


let personalFriends = ["David", ...contacts, "Lily"];
contacts.push("JOHN");
console.log(personalFriends)

let person = {
    name: "Adam",
    age: 25,
    city: "Pesh"
}


let employee = {
    ...person,
    salary:50000,
    position: "Software Developer"
}

console.log(employee) */


/* const students = [
    {name: "John", city:"New York"},
    {name: "Peter", city:"Paris"},
    {name: "Kate", city:"Sidney"}
]

for (const student of students ) {
    console.log(student.name + " lives in " + student.city)
} */


/* function addressMaker (address) {
    const { city , state} = address;

    const newAddress = {
        city,
        state,
        country: "pakistan"
    };
    console.log(newAddress)
    console.log (`${newAddress.city} ${newAddress.state} ${newAddress.country}`)

}

addressMaker({city: "Austin", state:"Texas"}) */




/* let [fn, mn, ln] = ["Mohsin", "Khan", "dev"];
ln = "khangul"

console.log(`${fn} ${mn} ${ln}`); */




/* const student = {
    name: 'Mohsin khan',
    age: 24,
    projects: {
        diceGame : "Practicing a language known as Javascript"
    }
};

const { name , age , projects: {diceGame}} = student;

console.log(`${name} his age ${age} and ${diceGame}`); */



/* const player = {
    name: 'Mohsin khan',
    club: 'Pakistan',
    address: {
        city : "Peshawar"
    }
};

console.log(player .club)

const { name , club, address: {city} } = player;

console.log (`${name} playes for ${city}`) */


/* let nam1 = "mohsin";
let nam2 = "khan";

const comBine = `${nam1} ${nam2}`;
console.log(comBine) ;

document.getElementById("practice").innerText = comBine; */