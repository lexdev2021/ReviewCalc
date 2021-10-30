let firstNumber = +prompt('Введите первое число', '');
let iden = prompt('Введите идентификатор действия', '');
let secondNumber = +prompt('Введите второе число', '');
function Calc(firstNumber, iden, secondNumber) {
    if((firstNumber == '') || (secondNumber == '') || (iden== '') || isNaN(firstNumber)  || isNaN(firstNumber)) {
        return alert('Error');
    }
    else if(iden == '+') {
        return alert(firstNumber + secondNumber);
    }
    else if(iden == '-') {
        return alert(firstNumber - secondNumber);
    }
    else if(iden == '*') {
        return alert(firstNumber * secondNumber);
    }
    else if(iden == '/') {
        return alert(firstNumber / secondNumber);
    }
}
Calc(firstNumber, iden, secondNumber);