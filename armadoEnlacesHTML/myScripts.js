console.log('desde js');

const $d = document;
const $tituloInput =  $d.getElementById('titulo');
const $enlaceInput =  $d.getElementById('enlace');

let titulo = null;
let enlace = null;
let enlaces = [];
let idCounter = 0;

const setEnlace = (enlacesArray, data) => {    
    enlacesArray.unshift(data);
    idCounter += 1;
    //console.log(data[2].getMonth());
    return enlacesArray;    
}

const deleteEnlace = (enlacesArray, id ) => {
    enlacesArray = enlacesArray.filter(enlace => enlace.id != id);
    return enlacesArray;
}

const sacarSignosMayMen = (html) => {
    const menor = '&lt';
    const mayor = '&gt'; 
    //let aTexto = `<a href = '${enlace}' target = '_blank'>${titulo}</a>`;    
    html = html.replaceAll('<', menor);
    html = html.replaceAll('>', mayor);
    return  html
}
//console.log(sacarSignosMayMen(`<a href = 'https://soportesistemas.trabajo.gob.ar' target = '_blank'>PC/Notebook no enciende/no inicia</a>`));

const hacerEnlaceModulo = (id, enlace, titulo) =>{
    const $div = $d.createElement('div');
    $div.classList.add('alert');
    $div.classList.add('alert-info');
    $div.innerHTML = `
                <p>
                    <a href="${enlace}" target="_blank">${titulo}</a>
                </p>
                <p>${sacarSignosMayMen(`<a href="${enlace}" target="_blank">${titulo}</a>`)}</p><br>
                <button type="button" class="btn btn-primary" id = "copiar-btn" data-id = ${id}>Copiar</button>
                <button type="button" class="btn btn-danger" id = "copiar-btn" data-id = ${id}>Borrar</button>
                `
    return $div;
}
//console.log(hacerEnlaceModulo(1, 'titulo', 'enlace.html'));
//$d.getElementById('historial-container').appendChild(hacerEnlaceModulo(1, 'titulo.html', 'Titulo lindo'));

const cargarEnlacesDOM = (enlacesArray, idContainer) => {
    const $historialContainer = $d.getElementById(idContainer);
    $historialContainer.innerHTML = '';
    enlacesArray.forEach(enlace => {
        const $enlace = hacerEnlaceModulo(enlace.id, enlace.enlace, enlace.titulo);
        $historialContainer.appendChild($enlace);
    });    
}

$d.addEventListener('click', (e) => {
    if (e.target.id == 'generar-enlace'){
        let titulo = $tituloInput.value;
        let enlace = $enlaceInput.value;   
        let dateObject = new Date();        
        enlaces = setEnlace(enlaces, {'id': idCounter, 'titulo': titulo,'enlace': enlace,'data': dateObject});
        console.log(enlaces);
        cargarEnlacesDOM(enlaces, 'historial-container');
    }
    if (e.target.id == 'copiar-btn'){
        enlaces = deleteEnlace(enlaces, 1);
        console.log(enlaces);
    }
})