const baseOfTriangle = document.querySelector("#base");
const heightOfTriangle = document.querySelector("#height");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

function calculateAreaOfTriangle(){
    const product = Number(baseOfTriangle.value) * Number(heightOfTriangle.value);
    console.log(product);
    const areaCalculated = product/2;
    console.log(areaCalculated)
    output.innerText = ("The Area of the Triangle is " + areaCalculated + " cm²" )
}

areaBtn.addEventListener("click", calculateAreaOfTriangle);