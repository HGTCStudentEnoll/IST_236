//News class with constructor for News objects.
class News {
    constructor(id, type, headline, date, author, agency, description, imageUrl) {
        this.id = id;
        this.type = type;
        this.headline = headline;
        this.date = date;
        this.author = author;
        this.agency = agency;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}

//Exports News model.
export default News;