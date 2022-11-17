const colorButton = document.getElementById("color_button");

colorButton.addEventListener("click", colorChange);

function colorChange(){

    const red = randomNumber(255);
    const green = randomNumber(255);
    const blue = randomNumber(255);

    function randomNumber(num){
        return Math.floor(Math.random() * num);
    };

    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

    colorButton.innerText = `rgb( ${red},${green},${blue} )`;

    colorButton.style.fontSize = "1.8rem";
}