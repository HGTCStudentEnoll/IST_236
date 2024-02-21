import { View, StyleSheet, ScrollView, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title"; 
import NavButton from "../components/NavButton";
import Colors from "../constants/colors"
import { useState } from "react";

//Function utilizing props for all necessary handling of adding recipes.
function AddRecipeScreen(props){
    //Sets the safe area screen boundaries.
    const insets = useSafeAreaInsets();

    //useState for setting the recipe text and title.
    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeText, setRecipeText] = useState("");

    //Function to add recipes. 
    function addRecipeHandler(){
        props.onAdd(recipeTitle, recipeText);
        props.onCancel();
    }

    //Beginning of page structure.
    return (
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

        {/* View containing imported title. */}
        <View>
            <Title>Add New Recipe</Title>
        </View>

        {/* View containing scroll container for user input. */}
        <View style = {styles.scrollContainer}>
            <ScrollView>

                {/* Allows user input of recipe title. */}
                <View style = {styles.recipeTitleContainer}>
                    <TextInput 
                    placeholder = "Enter Recipe Title Here" 
                    style = {styles.recipeTitle} 
                    onChangeText = {setRecipeTitle} />
                </View>

                {/* Allows user input of recipe text. */}
                <View style = {styles.recipeTextContainer}>
                    <TextInput 
                    placeholder = "Enter Recipe Text Here" 
                    style = {styles.recipeText} 
                    onChangeText = {setRecipeText} 
                    textAlignVertical = "top"
                    multiline = {true}
                    numberOfLines = {25}
                    />
                </View>

                {/* View containing nav buttons for submission and cancellation. */}
                <View style = {styles.navContainer}>
                    <View style = {styles.navbutton}>
                        <NavButton onNext = {addRecipeHandler}>Submit</NavButton>
                    </View>
                    <View style = {styles.navButton}>
                        <NavButton onNext = {props.onCancel}>Cancel</NavButton>
                    </View>
                </View>

            </ScrollView>
        </View>
        </View>
    )
}

//Exports AddRecipeScreen.
export default AddRecipeScreen;

//Beginning of styling.
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        marginBottom: 50
    },
    scrollContainer: {
        flex: 5
    },
    recipeTitleContainer: {
        borderWidth: 3,
        backgroundColor: Colors.accent500
    },
    recipeTitle: {
        color: Colors.primary500,
        fontSize: 25
    },
    recipeTextContainer: {
        marginVertical: 15,
        borderWidth: 3,
        backgroundColor: Colors.accent500,
        alignItems: "flex-start"
    },
    recipeText: {
        color: Colors.primary500
    },
    navContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    navButton: {
        marginHorizontal: 5
    }
});