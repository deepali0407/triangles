const formQuiz = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-button");
const result = document.querySelector("#output")

const correctAnswer = ["90°", "right angled", "One Right Angle", "12, 16, 20", "Equilateral triangle", "80"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(formQuiz);
    for(let value of formResults.values()){
    if(value === correctAnswer[index] ){
        score = score+1;
    } 
    index = index+1;
    }  
    result.innerText =  "Your Score is: " + score; 
}

submitButton.addEventListener("click", calculateScore)

