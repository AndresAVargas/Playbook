const Issue={
    title: " 04 Live 1 Semana 2 [Lunes 11 de Abril]",
    repositoryNameAssociated: "LaunchX-InnovaccionVirtual/MissionNodeJS",
    status: "Open",
    NumberofComments: "118",
    labels: ["FINALIZADO", "LIVE 1", "Semana-2"],
    author: "carlogilmar",
    dateCreated: "3 de Abril del 2022",
    lastUpdate: new Date(),
    getTitleandAuthor: function(){
        return `Este Issue ${this.title} fue creado por ${this.author}` 
    },
    getGeneralInfo: function(){
        return `Estw}e Issue fue creado el ${this.dateCreated}, su actual estado es: ${this.status}, y la ultima actualización fue ${this.lastUpdate}`
    }
}

console.log(Issue.title)
console.log(Issue.getTitleandAuthor())
console.log(Issue.getGeneralInfo())
