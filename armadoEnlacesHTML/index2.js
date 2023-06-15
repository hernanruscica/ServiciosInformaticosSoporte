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
    sujeto: "Estimado",
    plantilla: 0,
    enlaces: []
}
const ofertas = [
    {    
        id: "0",
        nombre: "PC/Notebook no enciende/no inicia",
        enlace: "https://soportesistemas.trabajo.gob.ar/SC/ServiceCatalog/RequestOffering/a4e1b960-9cd2-2f17-bc5e-7616926f31c1,dbfb7389-fde0-f03c-235d-92ecfe22d90a"    
    },
    {    
        id: "1",
        nombre: "Error al utilizar una aplicación pc",
        enlace: "https://soportesistemas.trabajo.gob.ar/SC/ServiceCatalog/RequestOffering/7e364b54-2800-2357-ecfa-68bb4f0089b1,45f5f5af-b3df-8911-ca99-a94b60e68cc0"    
    },
    {    
        id: "2",
        nombre: "Forzado de contraseña para usuario del sistema Mesa de Entradas",
        enlace: "https://soportesistemas.trabajo.gob.ar/SC/ServiceCatalog/RequestOffering/7e364b54-2800-2357-ecfa-68bb4f0089b1,45f5f5af-b3df-8911-ca99-a94b60e68cc0"    
        }

];

const buscarOfertas = (busqueda) => {
    let busquedaMinus = busqueda.toLowerCase()
    let respuestas = ofertas.filter((oferta) => oferta.nombre.toLowerCase().includes(busquedaMinus)).map(oferta => oferta.nombre);
    
    return respuestas;
}

$d.addEventListener('keyup', (e)=> {
    if (e.target.id == 'input-busqueda'){
        console.log(buscarOfertas(e.target.value));        
    }
})