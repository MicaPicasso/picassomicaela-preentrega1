// ----------- PREENTREGA 1 ----------

// ACLARACIONES
//Mi primera entrega se tratará sobre una simulación de un homebanking para empresas donde se hará el deposito de sueldos de los dos empleados que posee este cliente.


console.log("Mi preentrega n°1"); //esto lo hice para que cargue antes el titulo del HTML y no salte directo el prompt

const usuario1 ={
    nombre: "Leonardo Guillermo Mattioli",
    usuarioGuardado: "LeoMattioli",
    claveGuardada: "Eleon123",
    empleados: { empleado1:"27456789547", empleado2: "20235643476"}, 
}

let ingreso= false;

for (let i = 0; i < 3; i++) {
    let usuarioIngresado = prompt("USUARIO: ");
    let claveIngresada = prompt("CLAVE: ");
    if(usuarioIngresado === usuario1.usuarioGuardado && claveIngresada === usuario1.claveGuardada){
        alert("Hola " + usuario1.nombre + " ya puedes operar en nuestra banca digital" )  
        ingreso = true;  
        break;
    }else{
        alert("Lo siento, ha ocurrido un ERROR")
    }        
}

if(ingreso){
    let opcion= prompt("Selecciona la operacion que deseas realizar: \n1. Ingresar a la banca personal \n2. Pago a proveedores \n3. Pago de Haberes \n4. Otras consultas \n5. Cerrar sesión");

    while (opcion !="5") {
        switch (opcion) {
            case "1":
                alert("Lo siento, el simulacro es para el pago de haberes ")
                break;
            case "2":
                alert("Lo siento, el simulacro es para el pago de haberes ")
                break;
            case "3":
                for (let i = 1; i < 3; i++) {
                    let empleadoIngresado1 = prompt("Ingresa el n° de CUIL del empleado " + i);
                    
                    if(empleadoIngresado1 == usuario1.empleados.empleado1 || empleadoIngresado1 == usuario1.empleados.empleado2){
                        let periodo=prompt("Ingresa el periodo de pago");
                        let sueldoNeto= prompt("Introduce el sueldo neto");
                        alert("Se depositó $" + sueldoNeto + " en concepto de haberes por el periodo " + periodo +  "\nEmpleado n° de CUIL: " + empleadoIngresado1);
                    }else{
                    alert("El CUIL que ingresaste no se corresponde con ningun empleado declarado");
                    }
                }
                break;
            case "4":
                alert("Lo siento, el simulacro es para el pago de haberes ")
                break;
            default:
                alert("Opcion NO VALIDA")
                break;
        }
    //condicion de salida
    opcion= prompt("¡¡Gracias por operar con nosotros!! \n¿Deseas realizar otra operacion? \n1. Ingresar a la banca personal \n2. Pago a proveedores \n3. Pago de Haberes \n4. Otras consultas \n5. Cerrar sesión");
    }
}else{
    alert("Lo siento hemos bloqueado tu cuenta. Por favor comunicate con tu agente de banco mas cercano o al 0800-2423-333")
}


   






