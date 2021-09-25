var input = document.querySelectorAll(".angle");
var buttonCheck = document.querySelector("#btn-check");
var output = document.querySelector("#output");

// Input Validation function
function validateInputs(){
    if((input[0].value) === '' || (input[1].value) === '' || (input[2].value) === '')
    return "empty";
}

// Function to calculate sum of three angles
function calculateSumOfAngles(data1,data2,data3){
    var sum = 0;
    sum = Number(data1) + Number(data2) + Number(data3);
    console.log(sum)
    return sum;
}

//logic to check if their sum is equal to 180 
function checkAngles(sumOfAngles){
    if(sumOfAngles === 180){
        output.innerText = "They form a Triangle";
    }else{
        output.innerText = "They dont form a Triangle";
    }
}

// function called at click
function isTriangle (){
       var a = validateInputs()
       if(a === "empty"){
        output.innerText = "Enter all three angles";
       }     
       else
        {
        var total = calculateSumOfAngles((input[0].value), (input[1].value),(input[2].value)); 
        checkAngles(total);
       }       
}
buttonCheck.addEventListener("click", isTriangle)