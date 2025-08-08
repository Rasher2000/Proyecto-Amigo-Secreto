let amigoSecreto = [];  //almacenar los nombres que se ingresan
let amigoRepetido = []; //para almacenar los nombres ya sorteados
const ul = document.getElementById('listaAmigos');
const ul2 = document.getElementById('listaAmigos');
let sorteoFinalizado = false; // definir el final del sorteo


console.log(amigoSecreto);  


function agregarAmigo() {
    let amigo = document.getElementById('nombreAmigo');
    let nombreAmigo = amigo.value.trim();

    if(nombreAmigo != ""){
        amigoSecreto.push(nombreAmigo); // agregar el nmbre al array
        amigo.value = '';
        actualizarListadeAmigos() //llama otra funcion de actualizar
    }else{
        alert('Escriba un nombre'); //Si el espacio esta vacio lanzar un alert
    }


}


function actualizarListadeAmigos() {
    ul.innerHTML = "";

    for (let i = 0; i < amigoSecreto.length; i++){
        let li = document.createElement('li');
        li.textContent = `${amigoSecreto[i]}`;
        ul.appendChild(li);
    }
}

function indeiceRamdom() {
    let listaAleatoria = Math.floor(Math.random()* amigoSecreto.length);
    return listaAleatoria;  
}


function sortearAmigo() {
    if (sorteoFinalizado) return condicionInicial();
    if (amigoSecreto.length < 2){
            alert ("deben haber mas de dos nombres para el sorteo"); // Lanzar un alert para ingresar mas nombres
            return;
        }
    let amigoSorteado = amigoSecreto [indeiceRamdom()];
    //Sortear un amigo secreto
    
    if (amigoRepetido.includes(amigoSorteado)) {
        if (amigoRepetido.length === amigoSecreto.length) {
            alert ("se han sorteado todos los nombres");
            condicionInicial();
        }
        return sorteo();
    }

    amigoRepetido.push(amigoSorteado);

//Crear un elemento p para mostrar el amigo secreto
    let r = document.createElement('h1');
    r.textContent = `Tu amigo secreto es ${amigoSorteado}`;
    ul.innerHTML = '';
    ul2.appendChild(r);
    sorteoFinalizado = true;//Marcar que el sorteo ha terminado  

}


//reiniciar todo al inicio
function condicionInicial() {
    amigoSecreto =[];
    amigoRepetido = [];
    sorteoFinalizado = false;
    ul.innerHTML = '';
}
