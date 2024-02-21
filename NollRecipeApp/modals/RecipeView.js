import { Modal, Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

//Function utilizing props to view all recipe information in a modal.
function RecipeView(props){

//Sets the safe area screen boundaries
const insets = useSafeAreaInsets();

return (
    
    //Modal containing title, text, and button for viewing recipes.
    <Modal visible = {props.visible}>
    <View
        style = {[styles.rootContainer,
        {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
        }
    ]}
    >
        {/* Views and buttons for viewing and returning from recipe. */}
        <View style = {styles.titleContainer}>
            <Text style = {styles.title}>{props.title}</Text>
        </View>
        <View style = {styles.textContainer}>
            <Text style = {styles.text}>{props.text}</Text>
        </View>

        <View style = {styles.returnButtonContainer}>
            <NavButton onNext={props.onClose}>Return</NavButton>
        </View>
    </View>
    </Modal>
);
}

//Exports RecipeView.
export default RecipeView;

//Beginning of styling.
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.primary500,
        alignItems: "center"
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 35,
        textAlign: "center",
        fontFamily: "migae",
        color: Colors.accent500
    },
    textContainer: {
        flex: 4,
        width: "100%",
        borderWidth: 3,
        borderColor: Colors.accent500,
        backgroundColor: Colors.primary300,
        padding: 12
    },
    text: {
        color: Colors.accent500,
        fontSize: 18
    },
    returnButtonContainer: {
        marginTop: 10,
        marginBottom: 40,
        flex: 1
    }
});