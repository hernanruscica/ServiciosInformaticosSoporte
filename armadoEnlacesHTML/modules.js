
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
                nombre: "Forzado de contraseña",
                contenido: `, necesita hacer el forzado de contraseña, lo puede hacer el usuario afectado u otro usuario en su nombre. Primero, tiene que ingresar los datos del usuario afectado, al hacerlo, aparecerán más opciones, entre las cuales deberá seleccionar “Modificación” y luego “Forzado de contraseña”.
                Le enviamos el formulario de forzado de contraseña indicado: <a href = 'https://login-int.trabajo.gob.ar/adfs/ls?wtrealm=https://tramites.trabajo.gob.ar&wreply=https://tramites.trabajo.gob.ar/auth?redirect_url=/%23/gsr/create/form/6388b37dd17ea0000d877e69&whr=https://login-int.trabajo.gob.ar/adfs/services/trust&accion=login&wa=wsignin1.0' target = '_blank'>Gestion de Servicios de Red</a>
                Cualquier otra duda, estamos a su disposición.
                `
                },
                {id: "3",
                nombre: "Ampliar Casilla Outlook",                
                contenido: `, le envio los articulos de conocimiento del portal de soporte sistemas, el primero sobre como liberar espacio en su casilla de outlook, y el segundo sobre cómo pedir una ampliación de la misma:
                <a href='https://soportesistemas.trabajo.gob.ar/KnowledgeBase/View/24#/' target = '_blank'>¿Cómo liberar espacio en el correo electrónico mediante Microsoft Outlook?</a><br>
                <a href = 'https://soportesistemas.trabajo.gob.ar/KnowledgeBase/View/35#/' target = '_blank'>¿Cómo solicitar más espacio en casilla de Outlook ?</a><br>
                Cualquier otra duda, estamos a su disposición.
                `
                },
                {id: "4",
                nombre: "Pedir Captura",
                contenido: `, para poder diagnosticar mejor el incidente, necesitamos una captura de pantalla completa, del momento del incidente.
                Le paso un articulo que podria serle útil: <a href = 'https://soportesistemas.trabajo.gob.ar/KnowledgeBase/View/5#/' target = '_blank'>¿Qué es y cómo realizar una captura de pantalla?</a>
                Además le recuerdo que tal vez ya exista una oferta para reportar dicho incidente, en el portal de Soporte Sistemas, dicho método es más ágil que la "Genérica", ya que implica un paso más, que es categorizar el incidente.
                <a href = 'https://soportesistemas.trabajo.gob.ar/' target = '_blank'>Portal de Soporte Sistemas</a>
                Quedamos a su disposición.
                `
                },
                {id: "5",
                nombre: "Pedir Formulario",
                contenido: `, necesitamos que nos envíe el formulario mencionado o el enlace al mismo, de esta manera podremos identificar más rápidamente, el área que podría solucionarlo.. Gracias.
                Quedamos a su disposición.
                `
                },
                {id: "6",
                nombre: "Servicios Especiales de Internet",
                contenido: `, para acceder a esos sitios web, necesita completar el formulario de “Servicios Especiales de Internet”. Primero debe ingresar sus datos o los de la persona para quien los solicita, y luego indicar que servicios necesita desbloquear.
                Le envio el enlace a dicho formulario: <a href = 'https://tramites.trabajo.gob.ar/#/gsr/create/form/62715705c9e3165e01cb21c2' target = '_blank'>Formulario de Servicios Especiales de Internet</a>
                Quedamos a su disposición.
                `
                },
                {id: "7",
                nombre: "Speech Streaming",
                contenido: `, le paso las indicaciones:
                “Para requerimientos de acceso a Redes Sociales y Streaming se solicita que vía correo electrónico a <a href= 'mailto: seguridad-informatica@trabajo.gob.ar'>seguridad-informatica@trabajo.gob.ar</a>, el Funcionario responsable indique las razones de servicio que justifiquen el acceso a estos recursos que utilizan tráfico multimedia. La nueva metodología de aprobación se basa principalmente en lograr la utilización del ancho de banda en forma equitativa entre los usuarios del MTEySS.”
                Quedamos a su disposición.
                `
                },
                {id: "8",
                nombre: "Pedido de Instalacion de Software",
                contenido: `, tiene que enviar un Memo a través de GDE, dirigido a la Dirección General de Informática e Innovación Tecnológica. Indicando el software y el uso que se le dará, el GDE tiene que estar aprobado por un firmante autorizado.
                Quedamos a su disposición.
                `
                },
                {id: "9",
                nombre: "Incidentes en GDE",
                contenido: `, le informamos que las fallas e inconvenientes técnicos relacionados al sistema de Gestión Documental Electrónico (GDE), deberá reportarlos ingresando al servicio de ayuda de la Subsecretaría de Innovación Administrativa perteneciente a la Jefatura de Gabinete de Ministros:
                <a href = 'https://incidencias.innovacion.gob.ar/servicedesk/customer/portal/1/user/login?destination=portal%2F1%2Fcreate' target = '_blank'>incidencias.innovacion.gob.ar</a>
                Logueandose con el usuario y contraseña de GDE.<br>
                Quedamos a su disposición para cualquier otro tema.                
                `
                }
                ,
                {id: "99",
                nombre: "",
                contenido: ``
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

export const enlaces = [
    [
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
        },
        {    
            id: "3",
            nombre: "Error de conectividad a través de VPN o Escritorio Remoto",
            enlace: "https://soportesistemas.trabajo.gob.ar/SC/ServiceCatalog/RequestOffering/c5a3ba0d-6aed-43f4-9381-b95e96df59fd,07a6ff50-bcea-5025-ff81-d8274e395927"    
        },
        {    
            id: "4",
            nombre: "Error al acceder a una aplicación",
            enlace: "https://soportesistemas.trabajo.gob.ar/SC/ServiceCatalog/RequestOffering/fd68da9a-2b28-c78e-b080-ba1e5273986a,45f5f5af-b3df-8911-ca99-a94b60e68cc0"    
        },
        {    
            id: "5",
            nombre: "Error al utilizar PNRT",
            enlace: "https://soportesistemas.trabajo.gob.ar/SC/ServiceCatalog/RequestOffering/16ac3e93-5dc2-c1e1-8e9a-619d94566096,45f5f5af-b3df-8911-ca99-a94b60e68cc0"    
        },
        {    
            id: "6",
            nombre: "Error en Tablet",
            enlace: "https://soportesistemas.trabajo.gob.ar/SC/ServiceCatalog/RequestOffering/c730a651-e540-9afc-8aea-0114f3a76056,4752bf4e-386f-7b3d-81ad-59ef9ac55c7a"    
        },
        {    
            id: "7",
            nombre: "Error al utilizar software instalado en PC",
            enlace: "https://soportesistemas.trabajo.gob.ar/SC/ServiceCatalog/RequestOffering/66ea06ba-2566-6fef-719d-595819bbb648,dbfb7389-fde0-f03c-235d-92ecfe22d90a"    
        },

    ],
    [
        {    
            id: "0",
            nombre: "¿Qué es y cómo realizar una captura de pantalla?",
            enlace: "https://soportesistemas.trabajo.gob.ar/KB/KnowledgeBase/View/5#/"    
        },
        {    
            id: "1",
            nombre: "¿Cómo agregar información a un requerimiento que ya registré?",
            enlace: "https://soportesistemas.trabajo.gob.ar/KnowledgeBase/View/8#/"    
        },
        {    
            id: "2",
            nombre: "¿Qué es y cómo reportar una falla?",
            enlace: "https://soportesistemas.trabajo.gob.ar/KnowledgeBase/View/25#/"    
        },
        {    
            id: "3",
            nombre: "Manual de uso del Centro de Atenciòn de Sevicios Informaticos",
            enlace: "https://soportesistemas.trabajo.gob.ar/KnowledgeBase/View/33#/"    
        },
        {    
            id: "4",
            nombre: "¿Cómo configuro una impresora de red en mi PC?",
            enlace: "https://soportesistemas.trabajo.gob.ar/KnowledgeBase/View/11#/"    
        },
        {    
            id: "5",
            nombre: "¿Cómo realizar el forzado de clave para usuarios de red?",
            enlace: "https://soportesistemas.trabajo.gob.ar/KnowledgeBase/View/13#/"    
        },
        {    
            id: "6",
            nombre: "¿Cómo registrarse para poder realizar un autoforzado de clave para usuarios de red?",
            enlace: "https://soportesistemas.trabajo.gob.ar/KnowledgeBase/View/14#/"    
        }
    ],

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

export const barraPrincipal2 = (idPadre, estadosBarraPrincipal) => {

    let respuesta = `            
            <div class="col-2  ">
                <select class="form-select" aria-label="Default select example" id="sujeto-select">                    
                `;
    sujetos.forEach((sujeto, index) => {
            respuesta += `<option value="${ index }" ${ index == 0 ? 'selected' : '' }>${ sujeto }</option>`
    });             

    respuesta += `</select>
            </div>
            <div class="col-3  dropdown  align-items-center">  
                <select class="form-select" aria-label="Default select example" id="ofertas-select">                    
                `;
    plantillas.forEach((plantilla, index) => {
            respuesta += `<option value="${ index }" ${ index == 0 ? 'selected' : '' }>${ plantilla.nombre }</option>`

    });
    respuesta += `</select>                
            </div>
            <div class="col-7 row align-items-center border  p-0" style="position: relative; ">                
                <i class="col-1 fa-solid fa-magnifying-glass fs-4"></i>
                <input type="search"  class=" col form-control border " id="input-busqueda" placeholder="nombre de oferta o instructivo" value="${(estadosBarraPrincipal.oferta != null) ? ofertas[estadosBarraPrincipal.oferta]["nombre"] : ''}">

                <div class="searchOfertasResultados" id="searchOfertasResultados"></div>

                <i class="col-1 fa-solid fa-circle-plus operators-btn operators-btn-success border  " id = "agregar-oferta"></i>
            </div> `;
    console.log(estadosBarraPrincipal);
    document.getElementById(idPadre).innerHTML = respuesta;
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
        
    let $tarjetaRespuestaEnlaces  =  '<ul>';
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