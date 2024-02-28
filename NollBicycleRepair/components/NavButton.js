import { Text, View, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

//Function utilizing props for reusable NavButton.
function NavButton(props) {
    return (
        //Pressable utilizing a view for styling, when pressed utilizes onNext.
        <Pressable
            onPress = {props.onNext}
            style = {({ pressed }) => pressed && styles.pressedItem} 
        >  
        <View style = {styles.buttonContainer}>
            <View style = {styles.textContainer}>
                <Text style = {styles.text}>{props.children}</Text>
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
        borderRadius: 25,
        borderWidth: 4,
        borderColor: Colors.accent500,
        height: 90,
        width: 120,
        margin: 8,
        borderRadius: 6,
        backgroundColor: Colors.primary300
    },
    pressedItem: {
        opacity: 0.8
    },
    text: {
        padding: 2,
        fontSize: 25,
        textAlign: "center",
        fontFamily: "migae",
        color: Colors.accent500
    }
})