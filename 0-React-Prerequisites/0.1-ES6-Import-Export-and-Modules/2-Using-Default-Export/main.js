//importing default export. 
import greet from "./greetings.js"
//LETS IMPORT FROM OUR "Using-Named-Export" FOLDER AS WELL
import {add, subtract} from "../1-Using-Named-Export/utils.js"

console.log(greet());

console.log(add(1,2));
console.log(subtract(5,2));



//OR,


                    //importing everything from a module 

//import * as greetings from "./greetings.js"
//import  * as utils from "../1-Using-Named-Export/utils.js"

//console.log(utils.add(1,2));
//console.log(utils.subtract(5,2));   


//const greetedResult = greetings.default();

//console.log(greetedResult); 


