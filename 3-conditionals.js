// ------------Conditionals--------------
// Conditionals are basically control structures that we only want to do something if our condition is true or might do something else if condition are not true.

// In Real Life Example: Lets say we go to the store/market we want to buy a ballpoint of uniball brand but if we do not get that ballpoint look for another ballpoint or something else or buy nothing.

// syntax: if(expression){
//      code
// }else{
//     code
// }

// switch(expression){
//     case expression:
//         code,
//         break; -> means terminate the statement here.
//     case expression2:
//       code,
//         break;
//     default:
//      code.
// }

// ------------Conditionals--------------

// const time = new Date().toLocaleTimeString();
const time = 16;

// if(time < 12){
//     console.log("Good Morning");
// }else if(time >= 12 && time <= 17 ){
//     console.log("Good Evening");
// }else{
//     console.log("Good Night");
// }

switch(true){
    case time < 12:
        console.log("Good Morning");
        break;
    case time >= 12 && time <= 17:
        console.log("Good Evening");
    break;
    default:
        console.log("Good Night");
        break;

}