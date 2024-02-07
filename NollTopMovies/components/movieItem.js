import { Image, View, Text, StyleSheet } from "react-native";

function movieItem(props) {
    return (
        <View style = {styles.itemContainer}>
            <View style = {styles.nameContainer}>
                <Text style = {styles.itemName}>{props.name}</Text>
            </View>
            <View style = {styles.imageContainer}>
                <Image style = {itemImage} source = {props.image}/>
            </View>
            <View style = {styles.ratingContainer}>
                <Text style = {styles.itemRating}>{props.rating} / 10</Text>
            </View>
        </View>
    );
}

export default movieItem;

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20
    },
    nameContainer: {
        backgroundColor: "white",
        borderWidth: 3,
        borderRadius: 5
    },
    itemName: {
        fontSize: 30,
        textAlign: "center"
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 5
    },
    itemImage: {
        width: "100%",
        height: 200,
        resizeMode: "cover"
    },
    ratingContainer: {
        backgroundColor: "white",
        borderWidth: 3,
        borderRadius: 5
    },
    itemRating: {
        fontSize: 30,
        textAlign: "center"
    }
});