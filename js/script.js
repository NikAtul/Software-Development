const text = "NIK ATUL";
let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typing-text").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 150);
    }

}

window.onload = typeWriter;