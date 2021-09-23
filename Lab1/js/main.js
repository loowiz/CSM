function change_text1(){
    document.getElementById("texto").innerHTML = "<p>Olá! Eu sou o Luiz!</p>" + 
    "<p align=\"center\"><img src=\"img/atibaia.jpg\" width=\"40\%\"> <img src=\"img/avatar.png\" width=\"30\%\"></p>";
}

function change_text2(){
    document.getElementById("texto").innerHTML = "<p>Gravação especial para vocês:</p>" +
    "<p align=\"center\"><audio controls><source src=\"media\\audio.mp3\"></audio></p>";
}

function change_text3(){
    document.getElementById("texto").innerHTML = "<p>Um laguinho num fim de tarde:</p>" +
    "<p align=\"center\"><video width=\"500\" controls><source src=\"media\\video.mov\"></video></p>";
}

function change_text4(){
    document.getElementById("texto").innerHTML = "<p>O PDF que motivou tudo isso:</p>" +
    "<p align=\"center\"><object data=\"media/document.pdf\" width=\"500\" height=\"300\"></object></p>";
}