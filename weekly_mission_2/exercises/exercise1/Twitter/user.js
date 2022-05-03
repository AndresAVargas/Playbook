const User={
    user: "Andres Vargas",
    username: "AndresAVargas12",
    bio: "Estudiante de Fisica, 22 años",
    age: "22",
    location: "Estado de México",
    joined: "Enero del 2020",
    getUsernameandBio: function(){
        return `Bio de ${this.username}: ${this.bio}`
    },
    getJoined: function(){
        return `Se unió el ${this.joined}`
    }
}

console.log(User.user)
console.log(User.getUsernameandBio())
console.log(User.getJoined())