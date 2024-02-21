import { View, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title"; 
import NavButton from "../components/NavButton";
import RecipeItem from "../components/RecipeItem";
import RecipeView from "../modals/RecipeView";
import { useState } from "react";

function RecipeScreen(props){
    //Sets the safe area screen boundaries
    const insets = useSafeAreaInsets();

    //useState for handling if the modal is visible, as well as the recipe title and text.
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [modalRecipeTitle, setModalRecipeTitle] = useState("");
    const [modalRecipeText, setModalRecipeText] = useState("");

    //Function to display recipe title, text, and sets the modal to true.
    function recipeViewHandler(title, text){
        setModalRecipeTitle(title);
        setModalRecipeText(text);
        setModalIsVisible(true);
    }

    //Function to close the modal.
    function closeRecipeViewHandler(){
        setModalIsVisible(false);
    }
    
    //Beginning of page structure.
    return (
        <View
        //Sets page insets through useSafeAreaInsets.
        style = {[styles.rootContainer,
        {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right
        }
        ]}
        >

        {/* View containing title component. */}
        <View>
            <Title>Recipes</Title>
        </View>

        {/* View containing flatlist, utilizing RecipeItem component. */}
        <View style = {styles.itemContainer}>
            <FlatList 
            data = {props.currentRecipe}

            keyExtractor = {(item, index) => {
                return item.id;
            }}
            alwaysBounceVertical = {false}
            renderItem = {(itemData) => {
                return (
                    <RecipeItem
                    id = {itemData.item.id}
                    title = {itemData.item.title}
                    text = {itemData.item.text}
                    onView= {recipeViewHandler.bind(this, itemData.item.title, itemData.item.text)}
                    onDelete= {props.onDelete.bind(this, itemData.item.id)}
                    /> 
                )
            }}
            />
        </View>

        {/* Utilization of RecipeView Modal. */}
        <RecipeView 
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeViewHandler}
        />

        {/* Views containing NavButton components for adding new recipe, and returning home. */}
        <View style = {styles.navContainer}>
        <View style = {styles.navbutton}>
            <NavButton onNext = {props.onAdd}>Add New Note</NavButton>
        </View>
        <View style = {styles.navButton}>
            <NavButton onNext = {props.onHome}>Return Home</NavButton>
        </View>
        </View>


        </View>
    )
}

//Exports RecipeScreen.
export default RecipeScreen;

//Beginning of styling.
const styles = StyleSheet.create({
   rootContainer: {
    flex: 1,
    width: "90%"
   },
   titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
   },
   itemContainer: {
    flex: 4
   },
   navContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
   }
})