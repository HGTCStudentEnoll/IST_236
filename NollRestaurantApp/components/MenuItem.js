import { StyleSheet, View, Text, Image } from 'react-native';
import Colors from '../constants/colors';

//Holds structure of list information, to be exported to MenuScreen.
function MenuItem(props){
    return(
        <View style = {styles.itemContainer}>
            <View style = {styles.nameContainer}>
                <Text style = {styles.nameStyle}>{props.name}</Text>
            </View>
            <View style = {styles.imageContainer}>
                <Image style = {styles.imageStyle} source = {props.image}/>
            </View>
            <View style = {styles.priceContainer}>
                <Text style = {styles.priceStyle}>{props.price}</Text>
            </View>
        </View>
    );
}

//Exports MenuItem.
export default MenuItem;

styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20
    },
    nameContainer: {
        borderWidth: 3,
        borderRadius: 5
    },
    nameStyle: {
        fontSize: 30,
        textAlign: "center",
        fontFamily: "migae",
        color: Colors.accent500
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 5
    },
    imageStyle: {
        width: "100%",
        height: 250,
        resizeMode: "cover"
    },
    priceContainer: {
        borderWidth: 3,
        borderRadius: 5
    },
    priceStyle: {
        fontSize: 30,
        textAlign: "center",
        fontFamily: "migae",
        paddingBottom: 35,
        color: Colors.accent500
    }
});