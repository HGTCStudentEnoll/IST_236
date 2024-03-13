import { useState } from "react";
import { Pressable, View, Text, Image } from 'react-native';
import Colors from '../constants/colors';

//DestinationItem utilizing props to act as a component to properly display each destination item.
function DestinationItem(props){

    //A useState holding when the modal is visible or not.
    const [modalIsVisible, setModalIsVisible] = useState(false);

    //Function to set modal visible when the destination is pressed.
    function viewImageHandler(){
        setModalIsVisible(true)
    }

    //Function to set modal invisible when the destination is pressed.
    function closeImageHandler(){
        setModalIsVisible(false);
    }

    //Beginning of DestinationItem structure.
    return(
        <View style = {[
            styles.itemContainer,
            {
                backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff"
            }
        ]}>
            {/* Pressable handling when a destination is pressed, to open viewImageHandler. */}
            <Pressable
                style = {({ pressed }) => [
                   styles.button,
                   pressed ? styles.buttonPressed : null 
                ]}
                android_ripple = {{ color: Colors.primary300 }}
                onPress = {viewImageHandler}
            >
                {/* rowContainer view for holding image, and text of name, founding year, and rating of destination. */}
                <View style = {styles.rowContainer}>
                    <Image style = {styles.image} source= {{ uri: props.imageUrl }} />
                        <View style = {styles.infoContainer}>
                            <Text style = {styles.name}>{props.name}</Text>
                        <View style = {styles.innerRowContainer}> 
                            <Text style = {styles.averagePrice}>{props.averagePrice}</Text>
                            <Text style = {styles.foundedYear}>{props.foundedYear}</Text>
                        </View>
                        <Text style = {styles.rating}>Rating: {props.rating} / 100</Text>
                    </View>
                </View>
            </Pressable>

            {/* ImageViewModal component to view modal of image */}
            <ImageViewModal 
                isVisible={modalIsVisible}
                imageUrl = {props.imageUrl}
                onClose = {closeImageHandler}
            />
        </View>
    )
}

//Exports DestinationItem component.
export default DestinationItem;

//Beginning of component styling.
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#CCC",
        paddingHorizontal: 5,
        paddingTop: 3,
        marginBottom: 3,
        borderRadius: 7
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.6
    },
    rowContainer: {
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    image: {
        width: "25%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 10
    },
    infoContainer: {
        width: "75%",
        paddingLeft: 20
    },
    name: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20
    },
    sites: {
        width: "85%",
        fontSize: 15
    },
    averagePrice: {
        fontSize: 15,
        fontStyle: "bold"
    },
    year: {
        fontSize: 15,
        fontWeight: "bold"
    },
    innerRowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    rating: {
        fontSize: 15,
        fontStyle: "italic"
    }
})