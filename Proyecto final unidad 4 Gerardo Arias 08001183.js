var nombre = prompt ("Ingrese su nombre")
console.log (nombre);
var edad =   prompt ("Ingrese su edad") 

var estado_civil = prompt ("Ingrese su estado civil") 


if (edad < 18 ){console.log ("No aplica")}
else if (edad  <= 25){console.log ("10% recargo unitario")}
else if (edad  <= 49){console.log ("20% recargo unitario")}
else if (edad >= 50){console.log("30% recargo unitario")}
else {console.log ("No aplica")}

if (estado_civil == "casado") {var nombre_conyugue = prompt ("Ingrese el nombre del Conyugue")}
else {console.log ("Seguro personal")}
console.log (nombre_conyugue);

var edad_conyugue = prompt ("Ingrese la edad del conyugue")
if (edad_conyugue < 18 ){console.log ("No aplica")}
else if (edad_conyugue  <= 25){console.log ("10% recargo para el conygue")}
else if (edad_conyugue  <= 49){console.log ("20% recargo para el conygue")}
else if (edad_conyugue >= 50){console.log("30% recargo para el conyugue")}
else  {console.log ("No aplica")}

 
var cantidad_hijos = prompt ("Ingrese el numero de hijos")

if (cantidad_hijos == 1) {console.log ("20% recargo por un hijo")}
else if (cantidad_hijos == 2) {console.log ("40% recargo por dos hijos")}
else if (cantidad_hijos == 3) {console.log ("60% recargo por tres hijos") }
else if (cantidad_hijos == 4 ){console.log ("80% recargo por cuatro hijos")}
else if (cantidad_hijos == 5) {console.log ("90% recargo a partir de cinco hijos")}
else {console.log ("No aplica")}