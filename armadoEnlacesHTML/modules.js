
export const sujetos = ["Estimado", "Estimada", "Estimade"];
export const plantillas = [
                {id: "0",
                nombre: "Ofertas en el portal",
                contenido: ", en el portal de 'Soporte Sistemas', existe una oferta específica para la tarea que desea realizar. Siempre que sea posible, le recomendamos elegir alguna de ellas, ya que se resuelven más rápido que las genéricas.<br>Quedamos a su disposición.<br>Le enviamos los enlaces:<br>",
                },    
                {id: "1",
                nombre: "Art. de conocimiento en el portal",
                contenido: ", en el portal de “Soporte Sistemas”, existe un artículo de conocimiento que puede serle de utilidad. <br>Quedamos a su disposición.<br>Le enviamos los enlaces:<br>"    
                },
                {id: "2",
                nombre: "Respuestas genericas",
                contenido: "diferentes contenidos, segun la respuesta elegida de un array con objetos que tienen un titulo y una descripcion. Son respuestas genericas para problemas y solicitudes populares."    
                },
                {id: "3",
                nombre: "Ninguna",                
                contenido: ""/*ninguna plantilla, para generar solo un enlace o una lista de enlaces a una oferta/as o instructivo/os especificos. */    
                }
];
export const ofertas = [
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

export const barraPrincipal = (idPadre, estadosBarraPrincipal) => {

    const selectedSujeto = ['', '', ''];    
    selectedSujeto[parseInt(estadosBarraPrincipal.sujeto)] = 'selected';
    const selectedPlantilla = ['', '', ''];    
    selectedPlantilla[parseInt(estadosBarraPrincipal.plantilla)] = 'selected';        

    document.getElementById(idPadre).innerHTML = `            
            <div class="col-2  ">
                <select class="form-select" aria-label="Default select example" id="sujeto-select">                    
                    <option value="0" ${selectedSujeto[0]}>Estimado</option>
                    <option value="1" ${selectedSujeto[1]}>Estimada</option>
                    <option value="2" ${selectedSujeto[2]}>Estimade</option>
                </select>
            </div>
            <div class="col-3  dropdown  align-items-center">                
                
                <select class="form-select" aria-label="Default select example" id="ofertas-select">                    
                    <option value="0" ${selectedPlantilla[0]}>Ofertas del portal</option>
                    <option value="1" ${selectedPlantilla[1]}>Instructivos del portal</option>
                    <option value="2" ${selectedPlantilla[2]}>Respuestas genéricas</option>
                    <option value="3" ${selectedPlantilla[3]}>Ninguna</option>
                </select>                
            </div>
            <div class="col-7 row align-items-center border  p-0" style="position: relative; ">                
                <i class="col-1 fa-solid fa-magnifying-glass fs-4"></i>
                <input type="search" class=" col form-control border " id="input-busqueda" placeholder="nombre de oferta o instructivo" value="${(estadosBarraPrincipal.oferta != null) ? ofertas[estadosBarraPrincipal.oferta]["nombre"] : ''}">

                <div class="searchOfertasResultados" id="searchOfertasResultados"></div>

                <i class="col-1 fa-solid fa-circle-plus operators-btn operators-btn-success border  " id = "agregar-oferta"></i>
            </div>            
            `
}

export const vistaPrevia = (idPadre, respuestaEstado) => {

    let $tarjetaRespuestaIntro =  `<h2 class=" fw-light align-items-center secondary-title">
                <i class="fa-regular fa-eye secundary-title-icon"></i>
                <span>Vista previa de la respuesta</span>
            </h2>     
            <div class="alert alert-info info-card" role="alert">
                <p >
                    ${sujetos[respuestaEstado.sujeto] + plantillas[respuestaEstado.plantilla].contenido}
                </p>`;
    let $tarjetaRespuestaEnlaces =  '<ul>';
    respuestaEstado.enlaces.forEach(enlace => {
        $tarjetaRespuestaEnlaces += `<li>                        
                                        <a href="${enlace.enlace}" target="_BLANK">
                                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                            ${enlace.nombre}</a>
                                        <i class="fa-solid fa-circle-minus operators-btn operators-btn-danger"></i>
                                    </li>
                                    `    
    });
    $tarjetaRespuestaEnlaces += '</ul>';
    

    let $tarjetaRespuestaBotones = `<div class="row info-buttons-container">
                                        <button type="button" class="col-2 btn btn-primary btn-rounded operators-btn-primary-light">
                                            Copiar <i class="fa-regular fa-copy"></i>
                                        </button>
                                        <button type="button" class="col-2 btn btn-warning btn-rounded operators-btn-accent-light">
                                            Editar <i class="fa-regular fa-edit "></i>
                                        </button>
                                    </div>
                                    </div>
                                    `;

    document.getElementById(idPadre).innerHTML = $tarjetaRespuestaIntro + $tarjetaRespuestaEnlaces + $tarjetaRespuestaBotones                           
                
}