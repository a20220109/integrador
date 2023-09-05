alert("Bienvenidos al Chifa Madam Tusan, esta es su cuenta ");
var presupuesto=parseInt(prompt("¿Cuanto tiene de presupuesto?"));
var entrada=parseInt(prompt("¿Cuanto cuesta la entrada?"));
var principal=parseInt(prompt("¿Cuanto cuesta el plato principal?"));
var postre=parseInt(prompt("¿Cuanto cuesta el postre?"));
var total=entrada+principal+postre;
var igv=parseInt(total*18/100)+total;
console.log("La entrada cuesta",entrada);
console.log("El plato principal cuesta",principal);
console.log("El postre cuesta",postre);
console.log("La cuenta total cuesta",total);
console.log("El total con IGV sale",igv);
console.log("Madam Tusan agradece su visita, vuelve pronto");
console.log("Tu vuelto es de:", (presupuesto-igv))