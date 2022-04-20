let subcategorias; 
let imagesUrl = "./imagenes/"    
let requerimientosEstado = 0, subcategoriasEstado = 0;  
const $requerimientoItems = document.getElementsByClassName("requerimiento-item");
const $subCategoriasItems = document.getElementsByClassName("subcategoria-item");
const $subcategorias = document.getElementById("subcategorias");
const $ofertas = document.getElementById("ofertas");

const leyendoClicksRequerimientos = () => {
    //leyendo los clicks en los requerimientos
    for (let i = 0; i < $requerimientoItems.length; i++){    
        $requerimientoItems[i].addEventListener("click", function() {   
            requerimientosEstado = i;
            mostrarEstados();
            var current = document.getElementsByClassName("activeReq");        
            current[0].className = current[0].className.replace(" activeReq", "");
            this.className += " activeReq";        
            });
        }
}
const leyendoClicksSubcategorias = () => {
    //leyendo los clicks en las subcategorias
    for (let i = 0; i < $subCategoriasItems.length; i++){    
        $subCategoriasItems[i].addEventListener("click", function() {   
            subcategoriasEstado = i;
            mostrarEstados();
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

const crearNuevoSubcategoriaItem = (titulo, imagen) => {
    //inicio de creacion de la subcategoria        
    let $subCategoriasFragment = document.createDocumentFragment();

    let $subCategoriasItem = document.createElement("div");
    let $subCategoriasImagen = document.createElement("img");
    let $subCategoriasTitulo = document.createElement("p");
    

    $subCategoriasItem.classList.add("subcategoria-item");
    $subCategoriasImagen.classList.add("subcategoria-imagen");
    $subCategoriasTitulo.classList.add("subcategoria-descripcion");
    

    $subCategoriasTitulo.innerText = titulo;
    $subCategoriasImagen.setAttribute("src", imagesUrl + imagen);

    $subCategoriasItem.appendChild($subCategoriasImagen);  
    $subCategoriasItem.appendChild($subCategoriasTitulo);  
              

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
const llenarSubcategorias = (subcats) => {
    subcats.forEach(element => {                
        const $nuevoSubcategoriaItem = crearNuevoSubcategoriaItem(element.titulo, element.icono);
        if (element.id == 0) { $nuevoSubcategoriaItem.classList.add("activeSub"); }

        $subcategorias.appendChild($nuevoSubcategoriaItem);
        });
        console.log("llenando subcats");
    }
const llenarOfertas = (ofertas) => {
    ofertas.forEach(element => {
        const $nuevoOfertaItem = crearNuevoOfertaItem(element.titulo, element.descripcion, element.icono);
        $ofertas.appendChild($nuevoOfertaItem);
        })
    }
async function populate(){
    const requestURL = 'https://raw.githubusercontent.com/hernanruscica/ServiciosInformaticosSoporte/master/sistemas-ayuda.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const subcategoriasText = await response.text();

    subcategorias = JSON.parse(subcategoriasText);            
    }
populate().then(() => {  
        leyendoClicksRequerimientos();                
        llenarSubcategorias(subcategorias["subcategorias"]);
        leyendoClicksSubcategorias();
        llenarOfertas(subcategorias["subcategorias"]["2"]["ofertas"]);        
        });          
    