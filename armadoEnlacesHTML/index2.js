import {barraPrincipal, barraPrincipal2, vistaPrevia, sujetos, ofertas, enlaces, plantillas} from './modules.js';
const $d = document;


/*
sujeto, Estimado, Estimada, Estimade.
plantillas, tipo de plantillas a cargar: 
0. Ofertas, speech para agregar enlaces a ofertas del portal
1. instructivos,  speech para agregar enlaces a instructivos del portal
2. respuestas genericas, spech con distintas respuestas genericas
3. ninguna, sin un texto predeterminado, se podria usar para sacar el enlace a una oferta o instructivo.
*/
let respuestaEstado = {
    sujeto: 0,
    plantilla: 0,
    enlaces: []
}

/*ESTADOS barra principal*/
let estadosBarraPrincipal = {
    sujeto : 0,
    plantilla: 0,
    oferta: null
}
/*ESTADOS barra principal*/


const buscarEnlaces = (busqueda) => {
    let busquedaMinus = busqueda.toLowerCase()
    let indice = estadosBarraPrincipal.plantilla;     
    let enlacesEncontrados = enlaces[indice].filter((enlace) => enlace.nombre.toLowerCase().includes(busquedaMinus));    
    return enlacesEncontrados;
}

$d.addEventListener('DOMContentLoaded', (e) => {
    console.log("documento cargado");
    //$d.getElementById('barraPrincipal').innerHTML = barraPrincipal();
    barraPrincipal2('barraPrincipal', estadosBarraPrincipal);
    vistaPrevia('vista-previa', respuestaEstado);
});

$d.addEventListener('keyup', (e)=> {
    if (e.target.id == 'input-busqueda' && e.target.value != "" && e.target.value != " "){
        let ofertasEncontradas = buscarEnlaces(e.target.value);             
        mostrarDropdownBusqueda(ofertasEncontradas, e.target.id);       
    }else{
        let $divResultados = $d.getElementById("searchOfertasResultados");    
        $divResultados.innerHTML = "";
    }
})

$d.addEventListener('click', (e) => {    
    if (e.target.classList.contains('searchOfertasResultado')) {
        //console.log(e.target.dataset.id);    
        estadosBarraPrincipal.oferta = e.target.dataset.id;        
        
        $d.getElementById('input-busqueda').value = e.target.dataset.nombre;
        mostrarDropdownBusqueda([], 'input-busqueda');
    } else if (e.target.parentElement.classList.contains('searchOfertasResultado')){
                
                estadosBarraPrincipal.oferta = e.target.parentElement.dataset.id;
                
                $d.getElementById('input-busqueda').value = e.target.parentElement.dataset.nombre;
                mostrarDropdownBusqueda([], 'input-busqueda');
            }
    if (e.target.id == 'agregar-oferta'){
        console.log(`agrego la oferta, si no esta vacia .. (null) ${estadosBarraPrincipal.oferta}`);
        if (estadosBarraPrincipal.oferta != null ) {
            respuestaEstado.enlaces.push({
                id: enlaces[estadosBarraPrincipal.plantilla][estadosBarraPrincipal.oferta].id,
                nombre: enlaces[estadosBarraPrincipal.plantilla][estadosBarraPrincipal.oferta].nombre, 
                enlace: enlaces[estadosBarraPrincipal.plantilla][estadosBarraPrincipal.oferta].enlace
            });
            estadosBarraPrincipal.oferta = null;
            barraPrincipal2('barraPrincipal', estadosBarraPrincipal);
            vistaPrevia('vista-previa', respuestaEstado);
        }  
        console.log(respuestaEstado.enlaces);
    }
    if (e.target.id == "ofertas-select"){
        console.log(`click en las ofertas - opcion ${e.target.value}`);
        estadosBarraPrincipal.plantilla = e.target.value;
        respuestaEstado.plantilla = e.target.value;    
        respuestaEstado.enlaces = [];            
        vistaPrevia('vista-previa', respuestaEstado);
        mostrarDropdownBusqueda([], 'input-busqueda');        
        $d.getElementById("input-busqueda").value = '';        
        if (parseInt(respuestaEstado.plantilla) > 1){
            
            $d.getElementById("input-busqueda").setAttribute('disabled', 'true');
        }else{
            $d.getElementById("input-busqueda").removeAttribute('disabled', 'false');
        }        

    }
    
    if (e.target.id == "sujeto-select"){
        console.log(`click en el sujeto - opcion ${e.target.value}`);
        estadosBarraPrincipal.sujeto = e.target.value;
        respuestaEstado.sujeto = e.target.value;
        vistaPrevia('vista-previa', respuestaEstado);
    }
});


const mostrarDropdownBusqueda = (ofertas, idPadre) => {

    let $inputPadre = $d.getElementById(idPadre);   
   
    let $divResultados = $d.getElementById("searchOfertasResultados");    
    
    $divResultados.innerHTML = "";    
    ofertas.forEach((oferta) => {
    /*
        <div class="searchOfertasResultado">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            <span>${oferta.nombre}</span>
        </div>
    */
        let $divResultado =  $d.createElement("div");
        $divResultado.classList.add("searchOfertasResultado");    
        $divResultado.setAttribute('data-id', `${oferta.id}`);  
        $divResultado.setAttribute('data-nombre', `${oferta.nombre}`);
        $divResultado.setAttribute('data-enlace', `${oferta.enlace}`);
        $divResultado.innerHTML = `                                   
                                   <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                   <span>${oferta.nombre}</span>
                                   `;        
        $divResultados.appendChild($divResultado);
    });       
    $inputPadre.insertAdjacentElement("afterend",$divResultados);    
}