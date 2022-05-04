const Trending_topic ={
    title: "Chicharito",
    ranking: "13",
    categoria: "Tendencias",
    hashtag: ["chihcharito", "Herbalife"],
    tweetsinlasthour: "1342",
    getName: function(){
        return `${this.title}`
    },
    getGeneralInfo: function(){
        return `El tema ${this.title} se encuentra en el lugar ${this.ranking} con ${this.tweetsinlasthour} en la ultima hora`
    }

}
console.log(Trending_topic.getName())
console.log(Trending_topic.getGeneralInfo())