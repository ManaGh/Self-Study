// alert(10);
// alert(20);

/////////// power with for loop

// var userFirstNumber = Number(prompt('Enter The First Number:',1))
// var userSecondNumber = Number(prompt("Enter The Second Number:", 1));

// var power = 1;
// for(var i = 0; i < userSecondNumber ; i++){
//     power = power * userFirstNumber  
// }
// alert('Power: '+power);

//////////power with while loop


var userFirstNumber = Number(prompt('Enter The First Number:',1))
var userSecondNumber = Number(prompt("Enter The Second Number:", 1));

var power = 1;

var i = 0
while(i < userSecondNumber){
    power = power * userFirstNumber
    i++
      
}
alert('Power: '+power); 