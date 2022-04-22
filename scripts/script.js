let subcategorias; 
let imagesUrl = "./imagenes/"    
let requerimientosEstado = 0, subcategoriasEstado = 0;  

const $d = document;
let $requerimientos, $subcategorias, $ofertas;

window.addEventListener('DOMContentLoaded', (event) => {
    $requerimientos = $d.getElementById("requerimientos");
    $subcategorias = $d.getElementById("subcategorias");
    $ofertas = $d.getElementById("ofertas");
    console.log('DOM fully loaded and parsed');
    console.log($requerimientos);
    console.log($subcategorias);
    console.log($ofertas);
});



const leyendoClicksRequerimientos = (clase) => {
    //leyendo los clicks en los requerimientos    
    const $requerimientoItems = $d.getElementsByClassName(clase);
    for (let i = 0; i < $requerimientoItems.length; i++){    
        $requerimientoItems[i].addEventListener("click", function() {   
            requerimientosEstado = i;
            mostrarEstados();            
            llenarSubcategorias(todasLasOfertas.requerimientos[requerimientosEstado].subcategorias);
            //llenarOfertas(todasLasOfertas.requerimientos[requerimientosEstado].subcategorias[subcategoriasEstado].ofertas);
            var current = document.getElementsByClassName("activeReq");        
            current[0].className = current[0].className.replace(" activeReq", "");
            this.className += " activeReq";        
            });
        }
}
const leyendoClicksSubcategorias = (clase) => {
    //leyendo los clicks en las subcategorias    
    const $subcategoriasItems = $d.getElementsByClassName(clase);
    for (let i = 0; i < $subcategoriasItems.length; i++){    
        $subcategoriasItems[i].addEventListener("click", function() {               
            subcategoriasEstado = i;
            mostrarEstados();           
            llenarOfertas(todasLasOfertas.requerimientos[requerimientosEstado].subcategorias[subcategoriasEstado].ofertas); 
            var current = document.getElementsByClassName("activeSub");        
            current[0].className = current[0].className.replace(" activeSub", "");
            this.className += " activeSub";        
            });
    }     
}
 
const mostrarEstados = () => {
    console.clear();
    console.log("Requerimiento: " + requerimientosEstado +"/n");
    console.log("Subcategoria: " + subcategoriasEstado +"/n");
}

/*
<div class="requerimiento-item activeReq" id="requerimiento01">
    <img src="./imagenes/requerimientos/01.svg" alt="" class="requerimiento-imagen">
    <p class="requerimiento-descripcion">Quiero información o realizar una consulta sobre...</p>
</div>
*/
const crearNuevoRequerimientoItem = (titulo, imagen) => {
    let $requerimientoItem = document.createElement("div");
    let $requerimientoImagen = document.createElement("img"); 
    let $requerimientoDescripcion = document.createElement("p");   

    $requerimientoImagen.setAttribute("src", imagesUrl + imagen);
    $requerimientoImagen.classList.add("requerimiento-imagen")
    
    $requerimientoDescripcion.classList.add("requerimiento-descripcion");
    $requerimientoDescripcion.innerHTML = titulo;

    $requerimientoItem.classList.add("requerimiento-item");
    $requerimientoItem.appendChild($requerimientoImagen);
    $requerimientoItem.appendChild($requerimientoDescripcion);
    return $requerimientoItem
}
const crearNuevoSubcategoriaItem = (titulo, imagen) => {
    //inicio de creacion de la subcategoria        
    let $subCategoriasFragment = document.createDocumentFragment();

    let $subCategoriasItem = document.createElement("div");
    let $subCategoriasImagen = document.createElement("img");
    let $subCategoriasDescripcion = document.createElement("p");

    $subCategoriasItem.classList.add("subcategoria-item");
    $subCategoriasImagen.classList.add("subcategoria-imagen");
    $subCategoriasDescripcion.classList.add("subcategoria-descripcion");    
    
    //$subCategoriasDescripcion.setAttribute("onclick", "document.getElementById('subcategoria-encabezado').scrollIntoView();");
    $subCategoriasDescripcion.innerText = titulo;
    $subCategoriasImagen.setAttribute("src", imagesUrl + imagen);

    $subCategoriasItem.appendChild($subCategoriasImagen);  
    $subCategoriasItem.appendChild($subCategoriasDescripcion);  
              
    return $subCategoriasItem;
    //fin de creacion de la subcategoria
}        
const crearNuevoOfertaItem = (titulo, descripcion, icono) => {
    //inicio de creacion de la oferta        
    let $ofertasFragment = document.createDocumentFragment();

    let $ofertasItem = document.createElement("div");
    let $ofertasImagen = document.createElement("img");
    let $ofertasTextos = document.createElement("div");
    let $ofertasTitulo = document.createElement("h3");
    let $ofertasDescripcion = document.createElement("p");

    $ofertasItem.classList.add("oferta-item");

    $ofertasImagen.setAttribute("src", imagesUrl +  icono);
    $ofertasImagen.classList.add("oferta-imagen");

    $ofertasTitulo.classList.add("oferta-titulo");
    $ofertasDescripcion.classList.add("oferta-descripcion");

    $ofertasTitulo.innerText = titulo;
    $ofertasDescripcion.innerText = descripcion;    
    
    $ofertasTextos.classList.add("oferta-textos");
    $ofertasTextos.appendChild($ofertasTitulo);  
    $ofertasTextos.appendChild($ofertasDescripcion);   
    
    $ofertasItem.appendChild($ofertasImagen);    
    $ofertasItem.appendChild($ofertasTextos)

    $ofertasFragment = $ofertasItem;

    return $ofertasFragment
    //fin de creacion de la subcategoria
}        

const llenarRequerimientos = (reqs) => {    
    $requerimientos.innerHTML = "";
    reqs.forEach(element => {        
        const $nuevoRequerimientoItem = crearNuevoRequerimientoItem(element.titulo, element.icono);        
        if (element.id == 0) $nuevoRequerimientoItem.classList.add("activeReq");
        $requerimientos.appendChild($nuevoRequerimientoItem);        
    })    
    }

const llenarSubcategorias = (subcats) => {
    $subcategorias.innerHTML = "";
    subcats.forEach(element => {        
        const $nuevoSubcategoriasItem = crearNuevoSubcategoriaItem(element.titulo, element.icono);        
        if (element.id == 0) $nuevoSubcategoriasItem.classList.add("activeSub");
        $subcategorias.appendChild($nuevoSubcategoriasItem);        
    }) 

    /*
    const $subCategoriasItems = document.getElementsByClassName("subcategoria-item");
    $subcategorias.innerHTML = "";
    subcats.forEach(element => {                
        const $nuevoSubcategoriaItem = crearNuevoSubcategoriaItem(element.titulo, element.icono);
        if (element.id == 0) { $nuevoSubcategoriaItem.classList.add("activeSub"); }

        $subcategorias.appendChild($nuevoSubcategoriaItem);
        });  */   
    leyendoClicksSubcategorias('subcategoria-item');    
    
    }
const llenarOfertas = (ofertas) => {
    $ofertas.innerHTML = "";

    //INICIO - muestra el titulo y descripcion de una subcategoria
    const $tituloSubcategoria = document.createElement("h3");
    const $descripcionSubcategoria = document.createElement("p");

    $tituloSubcategoria.classList.add("subcategoria-titulo-encabezado");
    $tituloSubcategoria.setAttribute("id", "subcategoria-encabezado");
    //todasLasOfertas.requerimientos[requerimientosEstado].subcategorias[subcategoriasEstado]
    $tituloSubcategoria.innerHTML = todasLasOfertas.requerimientos[requerimientosEstado].subcategorias[subcategoriasEstado]["titulo"];

    $descripcionSubcategoria.classList.add("subcategoria-descripcion-encabezado");
    $descripcionSubcategoria.innerHTML = todasLasOfertas.requerimientos[requerimientosEstado].subcategorias[subcategoriasEstado]["descripcion"];
    
    $ofertas.appendChild($tituloSubcategoria);
    $ofertas.appendChild($descripcionSubcategoria)
    //FIN - muestra el titulo de una subcategoria

    ofertas.forEach(element => {
        const $nuevoOfertaItem = crearNuevoOfertaItem(element.titulo, element.descripcion, element.icono);
        $ofertas.appendChild($nuevoOfertaItem);
        })    
    }
async function iniciar(){
    const requestURL = 'https://raw.githubusercontent.com/hernanruscica/ServiciosInformaticosSoporte/master/sistemas-ayuda.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const todasLasOfertasText = await response.text();

    todasLasOfertas = JSON.parse(todasLasOfertasText);            
    }
iniciar().then(() => {  
        
        llenarRequerimientos(todasLasOfertas.requerimientos);       
        leyendoClicksRequerimientos('requerimiento-item');   
        llenarSubcategorias(todasLasOfertas.requerimientos[requerimientosEstado].subcategorias);   
        leyendoClicksSubcategorias('subcategoria-item');
            
        llenarOfertas(todasLasOfertas.requerimientos[requerimientosEstado].subcategorias[subcategoriasEstado].ofertas);           
        mostrarEstados(); /* 
        //console.log(todasLasOfertas.requerimientos[requerimientosEstado]);
        //console.log(todasLasOfertas.requerimientos[requerimientosEstado].subcategorias[subcategoriasEstado]);
        console.log(todasLasOfertas.requerimientos);
        */
        });          
    