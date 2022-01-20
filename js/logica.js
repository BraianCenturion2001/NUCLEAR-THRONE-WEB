function VerificarFormulario(){
    var campo, valido;
    valido = true;

    //Verifico el campo Nombre
    campo = document.getElementById("nombre");
    if (campo.value == "" || !isNaN(campo.value)){
        colorAlerta(campo);
        valido = false;
    } else {
        LimpiarColor(campo);
    }

    //Verifico el campo Contraseña
    campo = document.getElementById("contra");
    if (campo.value == "" || !isNaN(campo.value)){
        colorAlerta(campo);
        valido = false;
    } else {
        LimpiarColor(campo);
    }

    //Verifico el campo Mensaje
    campo = document.getElementById("mensaje");
    if (campo.value == "" || !isNaN(campo.value)){
        colorAlerta(campo);
        valido = false;
    } else {
        LimpiarColor(campo);
    }

    //Verifico el campo Fecha
    campo = document.getElementById("fecha");
    if (campo.value == "" || !isNaN(campo.value)){
        colorAlerta(campo);
        valido = false;
    } else {
        var validarFecha = validarFechaMenorActual();
        if (!validarFecha){
            colorAlerta(campo);
            alert ("FECHA NO VALIDA");
            valido = false;
        } else {
            LimpiarColor(campo);
        }
    }

    return valido;
}
function LimpiarColor(campo){
    campo.style.borderColor = "";
    campo.style.backgroundColor = "";
}
function colorAlerta(campo){
    campo.style.borderColor = "rgba(145, 79, 211, .5)";
    campo.style.backgroundColor = "rgb(33, 33, 185, .5)";
}
function LimpiarFormulario(){
    document.getElementById("nombre").value = "";
    document.getElementById("contra").value = "";
    document.getElementById("cantidad").value = "Cantidad de Copias";
    document.getElementById("fecha").value = "";
    document.getElementById("mensaje").value = "";
}

function validarFechaMenorActual(){
    var retorno = false;

    var today = new Date(); //Traigo la fecha actual
    today.setHours(0,0,0,0); //Seteo sus valores de tiempo en 0, ya que solo quiero comparar las fechas

    var fecha = document.getElementById("fecha").value.split("-"); //Traigo la fecha ingresada en el form y extraigo el dia,año y mes separados por "-"
    var fechaForm = new Date(fecha[0], (fecha[1]-1), fecha[2]); //Creo un objeto tipo Date con los valores del array de fecha (dia, mes año)

    if (fechaForm>=today){ //Si la fecha ingresada es hoy o posterior a hoy
        retorno = true;
        alert("PARA EL DIA "+fecha[2]+"/"+fecha[1]+"/"+fecha[0]+" SE HA PROGRAMADO EL PAGO");
    }
    
    return retorno;
}

function calcularCosto(){
    var costo = document.getElementById("cantidad").value;
    var precioBase = costo * 95.50;
    var impuesto = (precioBase/100)*50;
    var precioFinal = precioBase + impuesto;

    return precioFinal;
}

function Principal(){
    var ValidarForm;
    ValidarForm = VerificarFormulario();

    if(ValidarForm){
        var costoPagar = calcularCosto();

        alert("Y DEBERA PAGAR UN TOTAL DE $"+costoPagar);

        LimpiarFormulario();
    }
}