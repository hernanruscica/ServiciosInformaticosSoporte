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