// alert(10);
// alert(20);

/////////// power with for loop///////

// var userFirstNumber = Number(prompt('Enter The First Number:',1))
// var userSecondNumber = Number(prompt("Enter The Second Number:", 1));

// var power = 1;
// for(var i = 0; i < userSecondNumber ; i++){
//     power = power * userFirstNumber
// }
// alert('Power: '+power);

//////////power with while loop//////////

// var userFirstNumber = Number(prompt('Enter The First Number:',1))
// var userSecondNumber = Number(prompt("Enter The Second Number:", 1));

// var power = 1;

// var i = 0
// while(i < userSecondNumber){
//     power = power * userFirstNumber
//     i++

// }
// alert('Power: '+power);

///////power with doWhile////////

// var userFirstNumber = Number(prompt('Enter The First Number:',1))
// var userSecondNumber = Number(prompt("Enter The Second Number:", 1));

// var power = 1;

// var i = 0
// do{
// power = power * userFirstNumber;
// i++
// }while (i < userSecondNumber)
// alert('Power: '+power);

//////Arrays////

// var students = ["Alen", "Jon", "Max", "Mana"];
// console.log(students);
// console.log(students.length);
// console.log(students[2]);

////Methods of Arrays//////
// /////////push/////////
// var scores = [11, 19, 20, 16, 17];
// console.log(scores);
// //  scores[5] = 13;
// scores.push(14);
// console.log(scores);
// /////////pop////////
// scores.pop();
// console.log(scores);

// ////shift & unshift////
// scores.shift();
// console.log(scores);
// scores.unshift(18);
// console.log(scores);

////How to define & work with Objects?////

// var users = ["Max", "Alen", "Jon", "Halden"];
// var user = { 
//     name: "Mana",
//     family: "Ghab", 
//     age: 18,
//     hairColor: "black" 
// };
// console.log(user);
// console.log(user["age"]);
// console.log(user.age);
// console.log(user.hairColor);

var users = [
    {id: 1, name: "Mana", family: "Gha", age: 12},
    {id: 2, name: "Bob", family: "Abi", age: 27}
];
console.log(users);
console.log(users[0]);
console.log(users[0].age);
