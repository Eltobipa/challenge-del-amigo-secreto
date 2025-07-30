// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// se crea un arreglo vacio para que se puedan guardar los nombres de los amigos.
const listaAmigos = [];

// estos elemenos mostraran la lista y el resultado del amigo secreto sorteado.
const listaHTML = document.getElementById("listaAmigos");
const resultadoHTML = document.getElementById("resultado");
const inputAmigo = document.getElementById("amigo");

// funcion que agrega un nuevo amigo a la lista.
// se obtiene el nombre ingresado y se eliminan los espacios en blanco.
// se verifica que no este vacio.
// y se sale de la funcion si no hay nombre.
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese un nombre valido.");
        return;
    }

// se agrega el nombre a la lista.
// se muestra la lista actualizada en la pagina.
// se limpia el campo de entrada para escribir otro nombre.
    listaAmigos.push(nombre);
    mostrarLista();
    inputAmigo.value = "";
}

// funcion para mostrar la lista de amigos.
// recorre la lista y muestra cada uno como <li>.
// se crea un nuevo elmento <li>.
// se pone numero y nombre.
// se agrega el <li>  a la lista.
function mostrarLista() {
    listaHTML.innerHTML = "";
    listaAmigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = (index + 1) + ". " + nombre;
        listaHTML.appendChild(li);
    });
}

// funcion para sortear amigo secreto de forma random.
// si la lista esta vacia, muestra un mensaje y salimos.
// se elige un indice aleatorio dentro del rango de la lista.
// se obtiene el nombre del amigo seleccionado.
// mostramos el nombre del amigo sorteado en la pagina.
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        resultadoHTML.innerHTML = "<li>No hay nombres para sortear.</li>";
        return;
    }

    const index = Math.floor(Math.random() * listaAmigos.length);
    const seleccionado = listaAmigos[index];
    resultadoHTML.innerHTML = `<li>El amigo secreto sorteado es: <strong>${seleccionado}</strong></li>`;
}
