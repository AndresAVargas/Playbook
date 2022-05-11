const User={
    user: "Andres Vargas",
    username: "Andres Vargas",
    age: "22",
    Birthday: "4 de Enero",
    Joined: "Agosto del 2011",
    getGerneralInfo: function(){
        return `${this.user} se unió el ${this.Joined}`
    },
    getBirthdayandAge: function() {
        return `${this.username} tiene ${this.age} y cumple años el ${this.Birthday}`
    }
}

console.log(User.getGerneralInfo())
console.log(User.getBirthdayandAge())