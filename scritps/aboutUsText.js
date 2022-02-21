const paragraphBack = document.querySelector(".paragraphBack");
const paragraphNext = document.querySelector(".paragraphNext");

const paragraphText = document.querySelector(".paragraphText");

paragraphBack.addEventListener("click", ()=>{
    textStatus--;
    setPharagraph();
});

paragraphNext.addEventListener("click", ()=>{
    textStatus++;
    setPharagraph();
});


var textStatus = 0;
function setPharagraph(){
    //Controlls Logic
    if(textStatus == 0){
        paragraphBack.disabled = "disable";
    }else{
        paragraphBack.disabled = "";
    }

    if(textStatus == 2){
        paragraphNext.disabled = "disable";
    }else{
        paragraphNext.disabled = "";
    }

    //Text Logic
    if(textStatus == 0){
        paragraphText.textContent = "Cada 10 solicitudes de servicio que son requeridas por nuestros clientes, solo 2 de estas ocuparon algún tipo de refacción. Mientras que en las 8 situaciones restantes, solo fue necesario culminarlas con un buen servicio o mano de obra especializada.";
    }
    if(textStatus == 1){
        paragraphText.textContent = "Somos especialistas de servicio. Aplicamos nuestros conocimientos y habilidades para lograr la operación estable y segura de cualquier equipo que exista en las líneas de procesos para elaboración y conservación de alimentos.";
    }
    if(textStatus == 2){
        paragraphText.textContent = "Nuestro campo de acción es el propio establecimiento o espacio de los clientes, por lo que ofrecemos las soluciones mas rápidas y efectivas.";
    }
}

window.onload = setPharagraph();