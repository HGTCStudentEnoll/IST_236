//Destination class for constructing Destination objects for display, primarily for use in dummyData.
class Destination {
    constructor (id, countryId, name, foundedYear, rating, imageUrl) {
        this.id = id;
        this.countryId = countryId;
        this.name = name;
        this.averageCost;
        this.foundedYear = foundedYear;
        this.rating = rating;
        this.imageUrl = imageUrl;  
    }

//Returns a string of the name, founding year, and rating of destination for display.
toString() {
    return `${this.name } was founded in ${this.foundedYear} average cost: ${this.averageCost} rating: ${this.rating}`;
}

}

//Exports Destination model.
export default Destination;