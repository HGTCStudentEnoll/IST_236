import { Pressable, StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/colors';

//Function of NavButton utilizing props, to be exported to pages in need.
function NavButton(props){
    return(
        <Pressable onPress = {props.onPress}>
            <View style = {styles.buttonContainer}>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )
}

//Exports NavButton.
export default NavButton;




const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 300,
        borderWidth: 3,
        borderColor: Colors.accent500,
        width: 300,
        margin: 10
    },
    textContainer: {

    },
    text: {
        padding: 8,
        fontSize: 25,
        textAlign: "center",
        color: Colors.accent500,
        fontFamily: "migae"
    }
});