import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

//Function utilizing props to create ListItem component.
function ListItem(props) {
    const navigation = useNavigation();

    function selectedListingHandler() {
        navigation.navigate("NewsDetail", {
            listingId: props.id
        });
    }

    //Returns View containing pressable, alongside all displayed news information.
    return (
        <View
            style = {[
                styles.itemContainer,
                { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff"}
            ]}
        >
            {/* News list item information contained in pressable, allowing for user to view NewsDetailScreen on press. */}
            <Pressable onPress = {selectedListingHandler}>
                <View>
                    <Image style = {styles.image} source = {{ uri: props.imageUrl }}/>
                </View>
                <View style = {styles.infoContainer}>
                    <Text style = {headline}>{props.headline}</Text>
                    <Text style = {styles.newsDetails}>
                        Date: {props.date} | Author: {props.author} | Agency: {props.agency} 
                    </Text>

                    <Text style = {styles.description}>
                        {props.description}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

//Exports ListItem component.
export default ListItem;

//Beginning of component styling.
const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 5,
        paddingTop: 5,
        marginBottom: 10,
        borderRadius: 7
    },
    button: {
        flex: 1,
    },
    imageContainer: {
        height: 300
    },
    image: {
        height: "100%",
        resizeMode: "cover",
        borderRadius: 7
    },
    infoContainer: {
        flex: 1,
        alignItems: "center"
    },
    headline: {
        fontSize: 30,
        fontFamily: "migae",
        paddingBottom: 5
    },
    description: {
        textAlign: "center",
        width: "100%",
        fontSize: 15,
        fontFamily: "migae",
        paddingBottom: 5
    },
    newsDetails: {
        fontSize: 15,
        textAlign: "center",
        fontFamily: "migae",
        paddingBottom: 5
    }
});