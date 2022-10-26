
let enlace, titulo;

let enlaces = [],
CANTIDAD_MAX_HISTORIAL = 10;



/*DOM Variables */
const $d =  document;
const $historialTitulo = $d.getElementById("historial-titulo");
const $historialContenedor = $d.getElementById("historial-contenedor");


//recibe los ids de los inputs
function getVariables(urlId, tituloId) {
    const $url = document.getElementById(urlId);
    const $titulo = document.getElementById(tituloId);
    enlace = $url.value;
    titulo = $titulo.value;
    //console.log(titulo, enlace);
    if (enlace != "" && titulo != ""){
        generarEnlace('enlace', enlace, titulo);
        generarEnlaceHTML('enlaceFormatoHTML', enlace, titulo)   
        agregarEnlace(enlaces, enlace, titulo);     
        mostrarHistorial();
    }
} 
/*getVariables('inputUrl', 'inputTitulo');*/

function generarEnlace(enlaceId, enlace, titulo){
    const $fragment = document.createDocumentFragment();
    const $a = document.createElement("a");  
    const $tituloVistaPrevia = document.createElement('h3');
    $tituloVistaPrevia.innerHTML = 'Vista Previa del enlace:'  
    $tituloVistaPrevia.classList.add('titulos_sueltos')

    const $enlace = document.getElementById(enlaceId);        

    $a.setAttribute('href', enlace);
    $a.setAttribute('target', '_blank');
    $a.innerHTML = titulo;     
    //console.log($a);          
    $enlace.innerHTML = '';    
    $enlace.appendChild($tituloVistaPrevia);   
    $enlace.appendChild($a);    
}

function generarEnlaceHTML(enlaceHTMLId, enlace, titulo){

    const $fragment = document.createDocumentFragment();
    const $textArea = document.createElement("textarea");
    $textArea.setAttribute('rows', 5);
    $textArea.setAttribute('disabled', true);
    $textArea.setAttribute('id', 'enlaceFormatoHTMLid');
    $textArea.classList.add('enlaceFormatoHTML');
    $textArea.classList.add('contenedor');
    //const $code = document.createElement("code");
    const $enlaceFormatoHTMLid = document.getElementById(enlaceHTMLId)
    const menor = '&lt';
    const mayor = '&gt'; 
    let aTexto = `<a href = '${enlace}' target = '_blank'>${titulo}</a>`;    
    aTexto = aTexto.replaceAll('<', menor);
    aTexto = aTexto.replaceAll('>', mayor);
    
    $textArea.innerHTML = aTexto;
    //$pre.appendChild($code);
    $fragment.appendChild($textArea);   
    //<button id="btn" onclick="copyToClickBoard()">Copy</button>
    const $btnEnlace = document.createElement('button');
    $btnEnlace.setAttribute('onclick', 'copyToClickBoard()')
    $btnEnlace.innerHTML = "COPIAR";
    $btnEnlace.classList.add('btn');
    $fragment.appendChild($btnEnlace);

    const $labelCopiado = document.createElement('label');
    $labelCopiado.classList.add('label_copiado');        
    $labelCopiado.classList.add('oculto');
    $labelCopiado.innerHTML = "COPIADO ...";
    $fragment.appendChild($labelCopiado);
    
    $enlaceFormatoHTMLid.innerHTML = '';
    $enlaceFormatoHTMLid.appendChild($fragment);        
}
    
function copyToClickBoard(enlace){
    let content = null;
    if (enlace == null){
        content = document.getElementById('enlaceFormatoHTMLid').innerHTML;
    }else{
        content = enlace;
    }

    const menor = '&lt;';
    const mayor = '&gt;'; 
    content = content.replaceAll('&lt;', '<');
    content = content.replaceAll('&gt;', '>');

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
    mostrarMensaje('label_copiado');
    setTimeout(() => ocultarMensaje('label_copiado'), 2000);
}   

 function seleccionarTodoTexto(inputId){
    $input = document.getElementById(inputId);    
    $input.select();    
 }

 function ocultarMensaje(labelCopiadoClass){     
     let $labelCopiado = document.querySelector('.' + labelCopiadoClass);     
     $labelCopiado.classList.add('oculto');
 }

 function mostrarMensaje(labelCopiadoClass){     
    let $labelCopiado = document.querySelector('.' + labelCopiadoClass);     
    $labelCopiado.classList.remove('oculto');
    $labelCopiado.classList.add('titulos_sueltos');
}


function agregarEnlace(arrayEnlaces, url, titulo){
    if (arrayEnlaces.length  >= CANTIDAD_MAX_HISTORIAL){
        arrayEnlaces.shift();
    }
    arrayEnlaces.push(
                    {url: `${url}`,
                    titulo: `${titulo}`}         
                );
   
localStorage.setItem("enlaces", JSON.stringify(arrayEnlaces));
}

/*
agregarEnlace(enlaces, "https://www.youtube.com", "Youtube");
agregarEnlace(enlaces, "https://www.argentina.gov.ar", "Argentina.gov.ar");
agregarEnlace(enlaces, "https://ultimo.enlace.agregado", "ultimo enlace");
agregarEnlace(enlaces, "https://ultimo.deverdad.enlace.agregado", "ultimo enlace de verdad");
agregarEnlace(enlaces, "https://gmail.com", "gmail");
console.log(JSON.parse(localStorage.getItem("enlaces"))[0]["url"]);
console.log(JSON.parse(localStorage.getItem("enlaces")));*/

/*
<div class="historial__enlace">
    <a href="#">enlace 1</a>
    <button class="historial-btn-copiar">Copiar</button>
</div>   
*/
function mostrarHistorial() {
    let enlaces = JSON.parse(localStorage.getItem("enlaces"));
    /*console.log(enlaces);*/
    $historialContenedor.innerHTML = "";
    let enlacesLongitud = enlaces.length;
    
    console.clear();
    $historialContenedor.innerHTML = `<h3 id="historial-titulo" >Historial</h3>`
    enlaces.reverse().forEach((enlace) => {
        /*console.log(enlace[enlaces.length - indice], indice);
        let url = enlace[enlaces.length - indice]["url"];
        let titulo = enlace[enlaces.length - indice]["titulo"];*/ 
        $historialContenedor.innerHTML += `<div class="historial__enlace">
        <a href="${enlace["url"]}" target="_blank">${enlace["titulo"]}</a>
        <button class="historial-btn-copiar" id = "btn-copiar-historial">Copiar</button>
        </div> `       
    })    
    
    
}
/*mostrarHistorial();*/

$d.addEventListener('click', (e) => {    
    if (e.target.id == "inputUrl" || e.target.id == "inputTitulo"){
        /*console.log("inputs"); */
        seleccionarTodoTexto(e.target.id);   
    }
    if (e.target.id == "btn-generar"){
        /*console.log("boton de generar");*/
        getVariables('inputUrl', 'inputTitulo')
        
    }
    if (e.target.id == "btn-copiar") {
        /*console.log("boton de copiar");*/
        copyToClickBoard();
    }
    
    if (e.target.id == "btn-copiar-historial") {
        console.log("boton de copiar historial");
        let enlace = e.target.previousElementSibling;
        console.log(enlace.outerHTML);
        copyToClickBoard(enlace.outerHTML);
    }
})

$d.addEventListener('DOMContentLoaded', () => {
    mostrarHistorial();
    enlaces = JSON.parse(localStorage.getItem("enlaces"));
    console.log(enlaces);
})