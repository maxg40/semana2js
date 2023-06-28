let dialogos = prompt ('¿Conoces varios dialogos de los simpsons? (Completar con: si, no los miro o algunos)');

if ((dialogos == 'si')||(dialogos == 'algunos') ) {
    alert ('¡Genial! Entonces ¡¡A darle ATOMOS!!');
}
else {
    alert ('Esto se va a poner feo');
}


alert ('Hay un tiroteo y eres Johnny Boca Cerrada');

let disparo = prompt ('!Jhonny Boca Cerrada!, ¿Donde te dieron?');

if (disparo == 'no dire nada') {
    alert ('¡¡No dire nada!!');
}
else {
    alert ('¡Eres un impostor, Jhonny nunca dira nada!');
}

let doctor = prompt ('¿Que le digo al doctor?');

if (doctor == 'dile que chupe limon'){
    alert ('¡¡Dile que chupe limon!!');
}
else if (doctor == 'no dire nada'){
    alert ('¡¡Se acerco bastante!!')
}
else {
    alert ('Te recomiendo que vayas a ver los simpsons');
}


let yaLlegamos = 0;
do {
    yaLlegamos = prompt ('¿Ya llegamos a la India?');
    alert (yaLlegamos)
}while (yaLlegamos=='no'){
    alert ('Vamos con el Jefe de los Mini Super');
    
}

for (let jefeMiniSuper = 1 ; jefeMiniSuper <= 3; jefeMiniSuper++) {
    if (jefeMiniSuper == 1) {
        prompt ('¿Usted es el Jefe de los Mini Super?');
        alert ('Si');
    }
    else if ( jefeMiniSuper == 2){
        prompt ('¿Enserio?');
        alert ('Si');
    }
    else if (jefeMiniSuper == 3){
        prompt ('¿Usted?');
        alert ('Asi es, ¡Gracias vuelvan pronto!');
}
}