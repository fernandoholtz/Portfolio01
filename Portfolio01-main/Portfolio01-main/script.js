let menuVisible = false;
// menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto o menu 
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion animação habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("figma");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("comunicação");
        habilidades[6].classList.add("adaptabilidade");
        habilidades[7].classList.add("criatividade");
        habilidades[8].classList.add("tomada-decisão");
        habilidades[9].classList.add("alto-qe");
    }
}

//animacion habilidades
window.onscroll = function(){
    efectoHabilidades();
}

    // Seleciona o formulário pelo seu ID
    const formulario = document.querySelector('#meuFormulario');

    // Seleciona o elemento da mensagem de agradecimento pelo seu ID
    const mensagemDeAgradecimento = document.querySelector('#mensagemDeAgradecimento');

    // Adiciona um manipulador de eventos ao formulário para executar uma função quando o usuário tentar enviar o formulário
    formulario.addEventListener('submit', function(event) {
        // Impede o envio padrão do formulário
        event.preventDefault();

        // Cria um objeto FormData com os dados do formulário
        const dadosDoFormulario = new FormData(formulario);

        // Envia os dados do formulário para o servidor usando uma solicitação AJAX
        fetch(formulario.action, {
            method: 'POST',
            body: dadosDoFormulario
        })
        .then(response => response.text())
        .then(texto => {
            // Exibe a mensagem de agradecimento
            mensagemDeAgradecimento.style.display = 'block';

            // Limpa os campos do formulário
            formulario.reset();
        });
    });
