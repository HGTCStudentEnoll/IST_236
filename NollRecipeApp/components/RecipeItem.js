import { Button, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

//Function utilizing props containing all necessary structuring for displaying recipes.
function RecipeItem(props) {
    return (
        <View style = {styles.item}>

            {/* View containing title of recipe. */}
            <View style = {styles.itemTitleContainer}>
                <Text style = {styles.itemTitle}>{props.title}</Text>
            </View>

            {/* View containing both required buttons. */}
            <View style = {styles.itemButtonsContainer}>
                {/* View and button for viewing of recipe. */}
                <View style = {styles.button}>
                    <Button title = "View" onPress = {props.onView} />
                </View>
                {/* View and button for deletion of recipe. */}
                <View style = {styles.button}>
                    <Button title = "Delete" onPress = {props.onDelete} />
                </View>
            </View>
        </View>
    )
}

//Exports RecipeItem.
export default RecipeItem;

//Beginning of styling.
const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 8,
        borderRadius: 6,
        backgroundColor: Colors.primary500
    },
    itemTitleContainer: {
        justifyContent: "center"
    },
    itemTitle: {
        fontSize: 20,
        color: Colors.accent500,
        padding: 8
    },
    itemButtonsContainer: {
        flexDirection: "row"
    },
    button: {
        marginVertical: 5,
        marginHorizontal: 3
    }
});