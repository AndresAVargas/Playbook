const pullrequest = {
    title: "Comparto mi Blog",
    author: "AndresAVargas",
    BranchName: "main",
    dateCreated: "15 de Abril del 2022",
    status: "Open",
    repositoryNameAssociated: "visualpartnership/launch-x-explorers",
    getStatus: function(){
        return this.status
    },
    getTitleandAuthor: function(){
        return `El pull request ${this.title} fue hecho por ${this.author}`
    }
}

console.log("El pull request: " + pullrequest.title +", esta en estado: " + pullrequest.getStatus())
console.log(pullrequest.getTitleandAuthor())