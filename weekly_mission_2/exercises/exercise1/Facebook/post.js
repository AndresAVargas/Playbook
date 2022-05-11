const Post={
    Tipo: "Status",
    post: "Hola mundo",
    reactions: 0,
    comments: 0,
    shared: 0,
    getGeneralInfo: function(){
        return `This post is a ${this.Tipo} have ${this.reactions} reactions, ${this.comments} comments and ${this.shared} shared `
    },
    getPost: function(){
        return `This post tells ${this.post}`
    }
}
console.log(Post.getGeneralInfo())
console.log(Post.getPost())