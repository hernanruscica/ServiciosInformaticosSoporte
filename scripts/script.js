let subcategorias; 
let imagesUrl = "./imagenes/"      
const $subcategorias = document.getElementById("subcategorias");
const $ofertas = document.getElementById("ofertas");



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
        llenarSubcategorias(subcategorias["subcategorias"]);
        llenarOfertas(subcategorias["subcategorias"]["1"]["ofertas"]);
        });          
console.clear();