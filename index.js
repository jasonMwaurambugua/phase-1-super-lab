class Tree {
    constructor( species ) {
      this._species = species
    }
  
    get species() {
      return this._species
      this.species = species
    }
  
    static definition() {
  class Tree {
  class Deciduous extends Tree {
    constructor( species, name ) {
      super( species )
      this._name = name
      this.name = name
    }
  
    static definition() {
  class Deciduous extends Tree {
  class Evergreen extends Tree {
    constructor( species,tree) {
      super( species )
      this._name = name
      this.name = name
    }
  
    static definition() {
      return `${super.definition()} Evergreens keep their leaves all year round.`
    }
  }
  }
  