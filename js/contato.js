//Geral

//1
const cabecalho = document.querySelector("#cabecalho");
cabecalho.style = "max-width: 100%";
cabecalho.style.backgroundColor = "#2E948A";

// cabecalho.classList.add("cor-verde");

//2
const linkCursos = document.querySelector("#menu_opcoes > nav > a");
linkCursos.href = "./cursos.html";



//Contato

//1
const formulario = document.querySelector("#formulario > form");
formulario.action = "./sucesso.html";
//formulario.setAttribute("action", "./sucesso.html")
formulario.method = "get";


//2
const campoMensagem = document.querySelector("#formulario > form >textarea");
const novoCampo = `<input type="tel" required placeholder="telefone">`;
campoMensagem.insertAdjacentHTML("beforebegin", novoCampo);

//3
campoMensagem.style.boxSizing = "border-box";

//4
const botao = document.querySelector("#enviar");
console.log(enviar);
enviar.style.width = "25%";

//5
const comentario = document.querySelector(".formulario")
const novoComentario = ` <section class='titulo depoimento'>
<h3>Depoimentos</h3>
</section>

<section id='falam_sobre'>
<div class="depoimentos">
    <img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam.”
        <br>
        <br>
        Wally, 25
    </p>
</div>

<div class="depoimentos">
    <img src="/imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Jaden Smith, 23
    </p>
</div>

<div class="depoimentos">
    <img src="/imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Whoopi Goldberg, 37
    </p>
</div>

<div class="depoimentos">
    <img src="/imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Janes Joplin, 29
    </p>
</div>
</section>
`

comentario.insertAdjacentHTML("afterend", novoComentario);

const titulo = document.querySelector("section.titulo > h3");
titulo.style.textTransform = "uppercase";
titulo.textContent = "Comentários";
titulo.style.color = "#009688";
titulo.style.fontSize = "30px";
const depos = document.querySelector("section.titulo");
depos.style.display =  "flex";
depos.style.flexDirection = "column";
depos.style.alignContent = "center";
depos.style.flexWrap =  "wrap";


