function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// function funcaoDoInterval(){
//     console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 1000);

const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000);


setTimeout(function (){
    clearInterval(timer);
}, 3000);

setTimeout(function (){
    console.log('Se passaram 5 segundos');
}, 5000);