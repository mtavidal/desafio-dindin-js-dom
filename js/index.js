//Geral

//1
const cabecalho = document.querySelector("#cabecalho");
cabecalho.style = "max-width: 100%";
cabecalho.style.backgroundColor = "#2E948A";

// cabecalho.classList.add("cor-verde");

//2
const linkCursos = document.querySelector("#menu_opcoes > nav > a");
linkCursos.href = "./cursos.html";

//home 

//1
const introducao = document.querySelector("#introducao");
introducao.style.justifyContent = "space-between";

//2
// const tituloDepoimentos = document.querySelector("section.titulo.depoimento > h3");
// tituloDepoimentos.textContent = "O que falam sobre nós";

//2, 3, 4
const titulos = document.querySelectorAll("section.titulo > h3");
for (const texto of titulos) {
    texto.style.textTransform = "uppercase";
}
titulos[0].textContent = "O que falam sobre nos";
titulos[1].textContent = "Mais conteúdo pra você";


//5
const linkBlog = document.querySelector("#todos_posts");
linkBlog.href = "./blog.html";

//6 
const novoCurso = document.getElementById("investimentos_poupando_independencia");
novoCurso.innerHTML += "<div id='independencia'><img src='/imagens/independencia_financeira.png' width='180px' alt='Independência Financeira'><h2>Independência Financeira</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. </p><a class='comecar_agora' href='./curso.html'>começar agora</a></div>";


