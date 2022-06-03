let fijo=0.20
let claro=0.40
let mov=0.60
let entel=1.00 

let empresa=prompt(`¿A que operador desea realizar su llamada?\nTener en cuenta el tarifario por minuto en su llamada\n1. FIJO su valor es de 0.20 centimos x minuto\n2. CLARO  su valor es de 0.40 centimos x minuto\n3. MOVISTAR su valor es de 0.60 centimos x minuto\n4. ENTEL su valor es de 1.00 sol x minuto\n¡¡¡ Escoja una alternativa del 1 al 4!!!`);

let tiempo=parseInt(prompt(`¿Por cuantos minutos desea realizar su llamada?\n ¡¡¡ Coloque solo el numero de minutos!!!`));

let $fijo=parseInt(tiempo*fijo);
let $claro=parseInt(tiempo*claro);
let $mov=parseInt(tiempo*mov);
let $entel=parseInt(tiempo*entel);

if(empresa==1){
    document.write(`La llamada que realizo duro un tiempo de ${tiempo} minutos a un numero FIJO su costo es : S/.${$fijo}.00\n`);
}
else if(empresa==2){
    document.write(`La llamada que realizo duro un tiempo de ${tiempo} minutos a un numero CLARO su costo es : S/.${$claro}.00\n`);
}
else if(empresa==3){
    document.write(`La llamada que realizo duro un tiempo de ${tiempo} minutos a un numero MOVISTAR su costo es : S/.${$mov}.00\n`);
}
else if(empresa==4){
    document.write(`La llamada que realizo duro un tiempo de ${tiempo} minutos a un numero ENTEL su costo es : S/.${$entel}.00\n`);
}
else{
    alert("Colocó una opcion incorrecta")
}