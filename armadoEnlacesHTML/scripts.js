    /* 
    let enlace = 'https://soportesistemas.trabajo.gob.ar/KnowledgeBase/View/13#/';
    let titulo = '¿Cómo realizar el forzado de clave para usuarios de red?';

    const $fragment = document.createDocumentFragment();
    const $pre = document.createElement("pre");
    const $code = document.createElement("code");
    const $a = document.createElement("a");    

    const $enlace = document.getElementById('enlace');
    const $enlaceFormatoHTMLid = document.getElementById('enlaceFormatoHTML');

    $a.setAttribute('href', enlace);
    $a.setAttribute('target', '_blank');
    $a.innerHTML = titulo;      
    
    $enlace.appendChild($a);    

    const menor = '&lt;';
    const mayor = '&gt'; 
    let aTexto = `<a href = '${enlace}' target = '_blank'>${titulo}</a>`;    
    aTexto = aTexto.replaceAll('<', menor);
    aTexto = aTexto.replaceAll('>', mayor);
    
    $code.innerHTML = aTexto;
    $pre.appendChild($code);
    $fragment.appendChild($pre);             
    
    $enlaceFormatoHTMLid.appendChild($fragment);
   */

    let enlace, titulo;
    //recibe los ids de los inputs
    function getVariables(urlId, tituloId) {
        const $url = document.getElementById(urlId);
        const $titulo = document.getElementById(tituloId);
        enlace = $url.value;
        titulo = $titulo.value;
        //console.log(titulo, enlace);
        generarEnlace('enlace', enlace, titulo);
        generarEnlaceHTML('enlaceFormatoHTML', enlace, titulo)
        
    }
    getVariables('inputUrl', 'inputTitulo')

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
/* 
<textarea name="" id="" rows="5" disabled = "true" class = "contenedor enlaceFormatoHTML">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio placeat, asperiores fugit praesentium quo ipsa, a porro quibusdam hic sed, vel nisi qui. Tenetur aliquam assumenda natus autem quod odit?
</textarea> 
*/

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
    
    function copyToClickBoard(){
        let content = document.getElementById('enlaceFormatoHTMLid').innerHTML;
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