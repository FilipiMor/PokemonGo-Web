class Pokemon {
  constructor(data) {
    this.id = data.pokemon_id;
    this.name = Pokemon.getPokemonById(this.id).Name || "Unknown";
    this.combatPower = data.cp || 0;
    this.attackIV = data.individual_attack || 0;
    this.defenseIV = data.individual_defense || 0;
    this.speedIV = data.individual_stamina || 0;
    this.IV = ((this.attackIV + this.defenseIV + this.speedIV) / 45.0).toFixed(2);
    this.creationTime = data.creation_time_ms || 0;
  }

  get image() {
    return this.paddedId + '.png';
  }

  get paddedId() {
    return Pokemon.getPaddedId(this.id);
  }

  static getPaddedId(id) {
    var padLength = 3;
    var myString = '' + id;
    while (myString.length < length) {
      myString = '0' + myString;
    }
    return myString;
  }

  static getImageById(id) {
    return Pokemon.getPaddedId(id) + '.png'
  }

  static setPokemonData(data) {
    Pokemon.pokemonData = data;
  }

  static setPokemonCandyData(data) {
    Pokemon.pokemonCandyData = data;
  }

  static getPokemonById(id) {
    return Pokemon.pokemonData[id - 1];
  }

  static getNameById(id) {
    return Pokemon.getPokemonById(id).Name;
  }
}
