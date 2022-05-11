const Biography={
    name: "Andres Vargas",
    Birthday: "4 de enero",
    age: "22",
    Civil_Status: "Soltero",
    getGeneralInfo: function(){
        return `${this.name} nacio el ${this.Birthday}, su estado civil es ${this.Civil_Status}`
    },
    getNameandAge: function(){
        return `${this.name} tiene ${this.age} años`
    }
}
console.log(Biography.getGeneralInfo())
console.log(Biography.getNameandAge())