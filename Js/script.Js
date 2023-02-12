// alert(10);
// alert(20);

// power with loop

var userFirstNumber = Number(prompt('Enter The First Number:',1))
var userSecondNumber = Number(prompt("Enter The Second Number:", 1));

var power = 1;
for(var i = 0; i<userSecondNumber ; i++){
    power = power * userFirstNumber  
}
alert('Power: '+power);