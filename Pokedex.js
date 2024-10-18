function searchPokemon() {
    const pokeNome = document.getElementById('pokemon').value.toLowerCase();
    const pokeFoto = document.getElementById('pokeFoto');
    const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokeNome}`;
    console.log(pokeApi);

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", pokeApi, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            const pokemonData = JSON.parse(this.responseText);
            console.log(pokemonData);
            document.getElementById('PokeNome').innerHTML = pokemonData.name;
            pokeImg.setAttribute('src', pokemonData.sprites.front_default);
            pokeImg.setAttribute('alt', pokemonData.name);
        } else {
            document.getElementById('PokeNome').innerHTML = 'Pokemon não existe';
            pokeImg.setAttribute('src', './assets/images/pokebolaVazia.png');
            pokeImg.width = 70;
            pokeImg.setAttribute('alt', 'Pokébola vazia.');
        }
    }

}