console.log("desde el js")

$d = document;
$form = $d.getElementById("form");
$inputs = $d.querySelectorAll(".input_item input")

//console.log($form);
 
const campos = {
  "apellido" : false,
  "nombres" : false,
  "numero_documento" : false,
  "domicilio": false,
  "piso" : false,
  "telefono" : false
}

const validaciones = {
  "apellido" : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  "nombres" : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  "numero_documento" : /^\d{7,8}$/,
  "numero_documento_cuit" : /^\d{7,8}$/,
  "domicilio": /[A-Za-z]+ [0-9]+ /,
  "piso" : false,
  "telefono" : /0[\d]{2}[\d]?[\d]{8}/   
}



const validarCampoFeedback = (evento) => {
  let campoNombre = evento.target.name
  let campoValor = evento.target.value;
  let campoExpReg = validaciones[evento.target.name];
  let campoAlertaAlUsuario = evento.target.title;
  let CampoResultadoValidacion = campoExpReg.test(campoValor);

  console.clear();
  console.log("validando ", campoNombre, "\n", campoValor, "\n", campoExpReg, "\n", campoAlertaAlUsuario, "\n", CampoResultadoValidacion);

  /*
  Clases necesarias:
  normal_input: un input antes de un evento keyup (sin error)
  error_input: un input despues de keyup y no validado
  show_msg: display: block para la label de abajo del input no validado
  hide_msg: display: none para la label de abajo del input no validado 
  Ademas es necesaria una label abajo del input a validar, para mostrar el mensaje.
  */
  $labelMsg = $d.getElementById(campoNombre + "_label");
  console.log($labelMsg)
  if (CampoResultadoValidacion) {
    console.log("validado!");
    evento.target.classList.remove("error_input");
    evento.target.classList.add("normal_input");
    
    /*
    evento.target.nextElementSibling.classList.remove("show-msg");
    evento.target.nextElementSibling.classList.add("hide-msg");
    */    
    $labelMsg.classList.remove("show-msg");
    $labelMsg.classList.add("hide-msg");
    
  } else {
    console.log("NO validado");
    evento.target.classList.remove("normal_input");
    evento.target.classList.add("error_input");    
    /* probando solo con el cuit, faltaria agregar los ids correspondientes a las label de los otros mensajes
    evento.target.nextElementSibling.classList.remove("hide-msg");
    evento.target.nextElementSibling.classList.add("show-msg");
    evento.target.nextElementSibling.textContent = campoAlertaAlUsuario;
    */        
    $labelMsg.classList.remove("hide-msg");
    $labelMsg.classList.add("show-msg");
    $labelMsg.textContent = campoAlertaAlUsuario;

  }

}

const validarCampos = (e) => {  
    //console.log(`Valido el input : ${e.target.name}`);  
    switch (e.target.name){
      case "apellido":
        validarCampoFeedback(e);
        
      break;  
      case "nombres":
        validarCampoFeedback(e);
        /*
        console.log("Validando los nombres con ", e.target.pattern);
        console.log("Mensaje al usuario: ", e.target.title);        
        */
      break; 
      case "numero_documento":
        validarCampoFeedback(e);
        /*
        console.log("Validando el N° de documento con ", e.target.pattern);
        console.log("Mensaje al usuario: ", e.target.title);        
        */
      break; 
      case "numero_documento_cuit":
        validarCampoFeedback(e);
        /*
        console.log("Validando el N° de documento con ", e.target.pattern);
        console.log("Mensaje al usuario: ", e.target.title);        
        */
      break;       
      case "domicilio":
        validarCampoFeedback(e);
        console.log("Validando el domicilio con ", e.target.pattern);
        console.log("Mensaje al usuario: ", e.target.title);        
      break; 
      /*
      case "piso":
        validarCampoFeedback(e);
        console.log("Validando el piso con ", e.target.pattern);     
        console.log("Mensaje al usuario: ", e.target.title);   
      break; 
      */
      case "telefono":
        validarCampoFeedback(e);
        console.log("Validando el telefono con ", e.target.pattern);        
        console.log("Mensaje al usuario: ", e.target.title);
      break;
    }    
}

$inputs.forEach(element => {
  //console.log(element.id)    
  element.addEventListener('keyup', (e) => validarCampos(e));
  //element.addEventListener('blur', (e) => validarCampo(e));
});

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(`Si estan todos los campos correctos, envio formulario id = ${e.target.id}`);
}); 