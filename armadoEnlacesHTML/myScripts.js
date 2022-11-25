//console.log('desde js');

const $d = document;
const $tituloInput =  $d.getElementById('titulo');
const $enlaceInput =  $d.getElementById('enlace');

let titulo = null;
let enlace = null;
let variableLocalStorage = 'enlaces';
let enlaces = null;


let idCounter = 0;
//localStorage.setItem(variableLocalStorage, enlaces);

/*inicio Operaciones pseudo CRUD */
const setEnlace = (enlacesArray, data) => {    
    enlacesArray.unshift(data);
    idCounter += 1;
    return enlacesArray;    
}
const deleteEnlace = (enlacesArray, id ) => {
    enlacesArray = enlacesArray.filter(enlace => enlace.id != id);    
    return enlacesArray;
}
const getEnlace = (enlacesArray, id) => {
    let enlace = enlacesArray.filter(enlace => enlace.id == id);
    return enlace[0]
}
/*fin Operaciones pseudo CRUD */


/*inicio utilidades*/
const sacarSignosMayMen = (html) => {
    const menor = '&lt';
    const mayor = '&gt';     
    html = html.replaceAll('<', menor);
    html = html.replaceAll('>', mayor);
    return  html
}
const hacerEnlaceModulo = (id, enlace, titulo) =>{
    const $div = $d.createElement('div');
    $div.classList.add('alert');
    $div.classList.add('alert-info');
    $div.innerHTML = `
                <p  style = "word-wrap: break-word;">
                    <a href="${enlace}" target="_blank">${titulo}</a>
                </p>
                <p style = "word-wrap: break-word;">${sacarSignosMayMen(`<a href="${enlace}" target="_blank">${titulo}</a>`)}</p><br>
                <button type="button" class="btn btn-primary" id = "copiar-btn" data-id = '${id}'>Copiar</button>
                <button type="button" class="btn btn-danger" id = "delete-btn" data-id = '${id}'>Borrar</button>
                
                `
    return $div;
}
const cargarEnlacesDOM = (enlacesArray, idContainer) => {
    const $historialContainer = $d.getElementById(idContainer);
    $historialContainer.innerHTML = '';
    enlacesArray.forEach(enlace => {
        const $enlace = hacerEnlaceModulo(enlace.id, enlace.enlace, enlace.titulo);
        $historialContainer.appendChild($enlace);
    });    
    $tituloInput.value = '';
    $enlaceInput.value = '';
}
const copiarEnMemoria = (enlacesArray, id) => {
    console.log(`copiando el enlace con id ${id}`);
    let enlaceActual = getEnlace(enlacesArray, id);
    let ahref = `<a href = '${enlaceActual.enlace}' target = '_blank'>${enlaceActual.titulo}</a>`;

    navigator.clipboard.writeText(ahref)
        .then(() => {
        console.log(`Text copied to clipboard... ${ahref}`)
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
}
const mostrarMsjCopiado = () => {
    const $modalMensaje = $d.getElementById('modal-mensaje');  
    $modalMensaje.classList.add('modal-mensaje--copiar');
    $modalMensaje.innerHTML = ''; 
    $modalMensaje.innerHTML = `<h3>ENLACE COPIADO</h3>`;     
    function ocultar(){
        $modalMensaje.classList.remove('visible');
        //console.log("ocultando")
        $modalMensaje.classList.remove('modal-mensaje--copiar');
        clearTimeout(myTimeout);
    }    
    let milliseconds = 1500;
    $modalMensaje.classList.add('visible');
    const myTimeout = setTimeout(ocultar, milliseconds);    
}
const mostrarMsjBorrado = (id) => {
    console.log(`confirma el borrado del enlace con id: ${id}`);
    let titulo = getEnlace(enlaces,id).titulo;    
    const $modalMensaje = $d.getElementById('modal-mensaje');   
    $modalMensaje.classList.add('modal-mensaje--borrar');
    $modalMensaje.classList.add('visible');
    $modalMensaje.innerHTML = '';
    $modalMensaje.innerHTML = `<h3>¿CONFIRMA EL BORRADO?</h3>
                                <p>${titulo}</p>
                                <div>
                                    <button id = 'delete-btn-confirm' data-id = ${id}>Si</button>
                                    <button>No</button>
                                </div>
    `;     
    function ocultar(){
        $modalMensaje.classList.remove('visible');
        //console.log("ocultando")
        $modalMensaje.classList.remove('modal-mensaje--borrar');
        clearTimeout(myTimeout);
    }  
    let milliseconds = 1500;
    $modalMensaje.classList.add('visible');
    //const myTimeout = setTimeout(ocultar, milliseconds);        
};    

const mostrarMensaje = (tipo, id) => {
    console.log(`muestro mensaje del tipo '${tipo}' con id: ${id}`);
    let titulo = id !== undefined ? getEnlace(enlaces,id).titulo : null; 
    const $modalMensaje = $d.getElementById('modal-mensaje'); 
    const $modalFondo = $d.getElementById('modal-fondo');            
    $modalMensaje.innerHTML = ''; 
    switch (tipo){
        case 'copiado': 
            console.log(`Mensaje de Copiado`);              
            $modalMensaje.innerHTML = `<h4>ENLACE COPIADO</h4>`;  
            $modalMensaje.classList.add('modal-mensaje--copiar');    
            $modalMensaje.classList.add('modal-mensaje-mostrar');
            $modalFondo.classList.add('modal-fondo-mostrar');
        break
        case 'borrado':
            console.log(`Mensaje de borrado de ${titulo}`);     
            $modalMensaje.innerHTML = `<h4>¿CONFIRMA EL BORRADO?</h4>
                                        <p>${titulo}</p>
                                        <div>
                                            <button class='modal-mensaje__btn' id = 'delete-btn-confirm' data-id = ${id}>Si</button>
                                            <button  class='modal-mensaje__btn' id = 'delete-btn-cancel'>No</button>
                                        </div>`;  
            $modalMensaje.classList.add('modal-mensaje--borrar')    
            $modalMensaje.classList.add('modal-mensaje-mostrar');
            $modalFondo.classList.add('modal-fondo-mostrar');
        break
        default:
            console.log('Tiene que enviar un tipo de mensaje valido.');
        break
    }
}
//mostrarMensaje('borrado', 1);
const ocultarMensaje = () => {
    console.log("ocultando el mensaje");
    const $modalMensaje = $d.getElementById('modal-mensaje'); 
    const $modalFondo = $d.getElementById('modal-fondo'); 
    $modalMensaje.classList.remove('modal-mensaje--copiar');     
    $modalMensaje.classList.remove('modal-mensaje--borrar');
    $modalMensaje.classList.remove('modal-mensaje-mostrar'); 
    $modalFondo.classList.remove('modal-fondo-mostrar');    
}


/*fin utilidades*/


/*inicio de los manejadores de eventos */
$d.addEventListener('click', (e) => {
    //Click en algunas de las cajas de texto
    if (e.target.id == "titulo" || e.target.id == "enlace"){        
        document.getElementById(e.target.id).select(); 
    }
    //Click en el boton generar enlace
    if (e.target.id == 'generar-enlace'){
        let titulo = $tituloInput.value;
        let enlace = $enlaceInput.value;               
        if (titulo != '' && enlace != ''){            
            let dateObject = new Date();        
            enlaces = setEnlace(enlaces, {'id': idCounter, 'titulo': titulo,'enlace': enlace,'data': dateObject});                   
            cargarEnlacesDOM(enlaces, 'historial-container');
            localStorage.setItem(variableLocalStorage, JSON.stringify(enlaces));
        }   
        if (enlace == '') $enlaceInput.nextElementSibling.classList.remove('hidden');        
        else $enlaceInput.nextElementSibling.classList.add('hidden');        
        if (titulo == '') $tituloInput.nextElementSibling.classList.remove('hidden');         
        else $tituloInput.nextElementSibling.classList.add('hidden');
    }    
    //click en el boton de copiar un enlace
    if (e.target.id == 'copiar-btn'){        
        copiarEnMemoria(enlaces, e.target.dataset.id);
        //mostrarMsjCopiado();        
        mostrarMensaje('copiado');
        let milisDelayMsg = 1000;
        let miTimer = setTimeout(ocultarMensaje, milisDelayMsg)
    }
    //click en el boton de borrar un enlace
    if (e.target.id == 'delete-btn'){
        mostrarMensaje('borrado', e.target.dataset.id);
        /*mostrarMsjBorrado(e.target.dataset.id);        
        
        enlaces = deleteEnlace(enlaces, e.target.dataset.id);
        cargarEnlacesDOM(enlaces, 'historial-container');
        localStorage.setItem(variableLocalStorage, JSON.stringify(enlaces));
        */
    }
    //click en el boton de 'SI' en el modal de confirmacion de borrar
    if (e.target.id == 'delete-btn-confirm'){
        console.log('click en el btn de confirmacion de borrado');
        enlaces = deleteEnlace(enlaces, e.target.dataset.id);
        cargarEnlacesDOM(enlaces, 'historial-container');
        localStorage.setItem(variableLocalStorage, JSON.stringify(enlaces));
        ocultarMensaje();
    }
    if (e.target.id == 'delete-btn-cancel'){
        console.log("click en el btn de cancelar el borrado");
        ocultarMensaje();
    }
})
$d.addEventListener('DOMContentLoaded', (e) =>{
    enlaces = localStorage.getItem(variableLocalStorage) != null ? JSON.parse(localStorage.getItem(variableLocalStorage)) : [];
    cargarEnlacesDOM(enlaces, 'historial-container');
})
/*fin de los manejadores de eventos */