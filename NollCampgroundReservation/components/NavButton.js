import { Text, View, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import Colors from '../constants/colors';

//Function utilizing props for reusable NavButton.
function NavButton(props) {

    //Retrieves width and height for page using useWindowDimensions
    const { width, height } = useWindowDimensions();

    return (
        //Pressable utilizing a view for styling, when pressed utilizes onNext.
        <Pressable
            onPress = {props.onNext}
            style = {({ pressed }) => pressed && styles.pressedItem} 
        >  
        <View style = {styles.buttonContainer}>
            <View style = {styles.textContainer}>
                <Text style = {[styles.text, {fontSize: width * 0.07}]}>{props.children}</Text>
            </View>
        </View>
        </Pressable>
    );
}

//Exports NavButton.
export default NavButton;

//Beginning of styling.
const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "70%",
        width: 1000,
        marginHorizonal: 10,
        marginVertical: 10,
        backgroundColor: Colors.primary300
    },
    pressedItem: {
        opacity: 0.8
    },
    text: {
        padding: 8,
        textAlign: "center",
        fontFamily: "migae",
        color: Colors.accent500
    }
})