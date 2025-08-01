let friends = []

function agregarAmigo() {
    friendName = document.getElementById("amigo").value;

    if (friendName.trim() != "") {
        friends.push(friendName);
        showFriends();
    } else {
        alert("Por favor ingrese un nombre valido");
    }

    clearInput("amigo");
    clearAll("resultado");
}

function showFriends() {
    const ul = document.getElementById("listaAmigos");
    const li = document.createElement("li");

    li.textContent = friends[friends.length - 1];
    ul.appendChild(li);
}

function clearInput(id) {
    document.getElementById(id).value = "";
}

function clearAll(id) {
    document.getElementById(id).innerHTML = "";
}

function sortearAmigo() {
    if (friends.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const ul = document.getElementById("resultado");
    const li = document.createElement("li");

    maxFriends = friends.length - 1;
    minFriends = 0;

    secretFriend = randomNumber(minFriends, maxFriends);

    li.textContent = "El amigo secreto es: " + friends[secretFriend];
    ul.appendChild(li);

    friends.length = 0;
    clearAll("listaAmigos");
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

