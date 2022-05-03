const Hashtag = {
    title: "Playstation",
    NumberTweetsinlasthour: "3570",
    getTitle:function(){
        return `#${this.title}`
    },
    getGeneralinfo: function(){
        return `The hastag #${this.title} tiene ${this.NumberTweetsinlasthour} Tweets en la ultima hora`
    }
}
console.log(Hashtag.getTitle())
console.log(Hashtag.getGeneralinfo())