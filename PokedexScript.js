const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';

function searchPokemon(){
    const pokeNome = document.getElementById('pokemon').value.toLowerCase();
    const pokeFoto = document.getElementById('pokeFoto');

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            const pokemonData = JSON.parse(this.responseText);
            console.log(pokemonData);
            document.getElementById('pokeNome').innerHTML = pokemonData.name;
            pokeFoto.setAttribute('src', pokemonData.sprites.front_default);
            pokeFoto.setAttribute('alt', pokemonData.name);
        } else {
            document.getElementById('pokeNome').innerHTML = 'Pokemon não existe';
            pokeFoto.setAttribute('src', '/TrabalhoPokédex/Images/pokebolaVazia.png');
            pokeFoto.width = 70;
            pokeFoto.setAttribute('alt', 'Pokébola vazia.');
        }
    };
    xhttp.open('GET', pokeApi + pokeNome, true);
    xhttp.send();
}