import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors"

//Function for title utilizing props to be used in screens and modals.
function Title(props) {
    return <Text style = {styles.title}>{props.children}</Text>
}

//Exports Title.
export default Title;

//Beginning of styling.
const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        color: Colors.accent500,
        fontFamily: "migae",
        textAlign: "center",
        paddingBottom: 25
    }
})