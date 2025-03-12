let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre !== "") {
        amigos.push(nombre);
        actualizarLista();
        console.log(amigos);
        input.value = "";
    } else {
        alert("Por favor, ingrese un nombre");
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = `${amigo}`;
        lista.appendChild(li);
    });
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    let li = document.createElement("li");
    li.textContent = `El amigo seleccionado es: ${amigoSeleccionado}`;
    resultadoLista.appendChild(li);

    document.getElementById("listaAmigos").classList.add("oculto");
}
