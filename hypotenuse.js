var userInput = document.querySelectorAll('.angles');
var submitButton = document.querySelector('#check-button');
var result = document.querySelector('#output');

function calculateSumOfSquares(a,b){
    const sumOfSquare = a*a + b*b ;
    return sumOfSquare;
}

function calculateHypotenuse(){
    const sumOfSquare = calculateSumOfSquares(Number(userInput[0].value),Number(userInput[1].value))
    const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
    result.innerText = ("The length of hypotenuse is: " + lengthOfHypotenuse)
}

submitButton.addEventListener("click", calculateHypotenuse);