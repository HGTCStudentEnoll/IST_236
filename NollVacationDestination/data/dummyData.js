import Country from '../models/countries';
import Destination from '../models/destinations';

//Exported object data for countries to be displayed.
export const COUNTRIES = [
    new Country("c1", "United States", "#a40535"),
    new Country("c2", "Canada", "#23778a"),
    new Country("c3", "Australia", "#e6dc4a"),
    new Country("c4", "Iceland", "#91bb82")
];

//Exported object data for destinations within chosen country.
export const DESTINATIONS = [
    new Destination(
        "d1",
        "c1",
        "New York",
        700,
        "1624",
        80,
        "https://media.istockphoto.com/id/1454217037/photo/statue-of-liberty-and-new-york-city-skyline-with-manhattan-financial-district-world-trade.webp?b=1&s=170667a&w=0&k=20&c=ILAXN43qdlPTT8ljbbT7Hwp95AQJxKTNygWhsQ3qzO4="
    ),
    new Destination(
        "d2",
        "c1",
        "Harrisburg",
        340,
        "1785",
        75,
        "https://cdn.britannica.com/45/145045-050-E37B3405/Harrisburg-Pa.jpg"
    ),
    new Destination(
        "d3",
        "c2",
        "Vancouver",
        640,
        "1886",
        85,
        "https://cdn.britannica.com/56/94456-050-2ECDE7B8/Vancouver-British-Columbia-Canada.jpg"
    ),
    new Destination(
        "d4",
        "c2",
        "Toronto",
        720,
        "1793",
        90,
        "https://cdn.britannica.com/93/94493-050-35524FED/Toronto.jpg"
    ),
    new Destination(
        "d5",
        "c3",
        "Sydney",
        520,
        "1788",
        92,
        "https://i.natgeofe.com/n/bd48279e-be5a-4f28-9551-5cb917c6766e/GettyImages-103455489cropped_2x1.jpg"
    ),
    new Destination(
        "d6",
        "c3",
        "Melbourne",
        1900,
        "1835",
        95,
        "https://cdn.britannica.com/64/190464-050-B74E1FD9/view-central-business-district-Melbourne-train-station.jpg"
    ),
    new Destination(
        "d7",
        "c4",
        "Reykjavík",
        1500,
        "1786",
        95,
        "https://cdn.britannica.com/71/73371-050-9DFAEC1E/Reykjavik-Iceland.jpg"
    ),
    new Destination(
        "d8",
        "c4",
        "Vik",
        500,
        "9th Century",
        97,
        "https://media.istockphoto.com/id/1225587414/photo/view-of-basalt-stacks-reynisdrangar-black-sand-beach-near-vik-and-violet-lupine-flowers-and.jpg?s=612x612&w=0&k=20&c=5pMLfIAmIryx0UyKkkDmJ32T085j2vkY5fkr5jsm-v8="
    ),
];