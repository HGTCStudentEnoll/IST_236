import { View, Text, StyleSheet, Image } from 'react-native';
import { useState, useLayoutEffect } from 'react';
import { NEWS } from '../data/dummy_data';
import Colors from '../constants/colors';

//Function utilizing props to create NewsDetailScreen.
function NewsDetailScreen(props){

    //Finds the current newsId, and finds the selectedNews utilizing it.
    const newsId = props.route.params.newsId;
    const selectedNews = NEWS.find((news) => news.id === newsId);

    //useState holding when the header button is pressed.
    const [pressed, setPressed] = useState(false);

    //If the header button is pressed, allow for navigation to and from details screen. 
    function headerButtonPressHandler() {
        setPressed(!pressed);
    }

    useLayoutEffect(() => {
        props.navigation.setOptions({

        });

    }, [props.navigation], headerButtonPressHandler);

// Beginning of page structure.
return (

    //View containing all displayed information.
    <View style = {styles.rootContainer}>

        {/* View containing and displaying image depending on news picked. */}
        <View style = {styles.imageContainer}>
            <Image 
                style = {styles.image}
                source = {{ uri: selectedNews.imageUrl }}
            />
        </View>

        {/* View containing all text displaying news information. */}
        <View style = {infoContainer}>

            {/* Displays news headline. */}
            <Text style = {styles.headline}>
                {selectedNews.headline}
            </Text>

            {/* displays news date. */}
            <Text style = {styles.date}>
                {selectedNews.date}
            </Text>
            
            {/* Displays news author. */}
            <Text style = {styles.author}>
                {selectedNews.author}
            </Text>

            {/* Displays news agency. */}
            <Text style = {styles.agency}>
                {selectedNews.agency}
            </Text>

            {/* Displays news description. */}
            <Text style = {styles.description}>
                {selectedNews.description}
            </Text>

        </View>
    </View>

    );
}

//Exports NewsDetailScreen.
export default NewsDetailScreen;

//Beginning of page styling.
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    imageContainer: {
        marginVertical: 10,
        height: 300
    },
    image: {
        height: "100%",
        resizeMode: "cover",
        borderRadius: 7
    },
    infoContainer: {
        borderRadius: 7,
        backgroundColor: Colors.primary500o8,
        flex: 1,
        alignItem: "center"
    },
    headline: {
        color: Colors.primary300,
        fontSize: 30,
        fontFamily: "migae",
        paddingBottom: 5
    },
    date: {
        color: Colors.primary300,
        fontSize: 20,
        fontFamily: "migae",
        paddingBottom: 5
    },
    author: {
        color: Colors.primary300,
        fontSize: 20,
        fontFamily: "migae",
        paddingBotom: 20
    },
    agency: {
        color: Colors.primary300,
        fontSize: 20,
        fontFamily: "migae",
        paddingBotom: 20
    },
    description: {
        color: Colors.primary300,
        fontSize: 20,
        fontFamily: "migae",
        paddingBotom: 20
    }
})