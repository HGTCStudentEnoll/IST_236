import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import AddRecipeScreen from './screens/AddRecipeScreen';
import RecipeScreen from './screens/RecipeScreen';

//Main app function, handles logic for switching screens, as well as handling fonts.
export default function App() {
  //Loads in required font.
  const [fontsLoaded] = useFonts({
    "migae": require("./assets/fonts/MigaeSemibold-3zd2M.otf")
  })

  //useState for holding the current screen and ID, as well as recipe viewed.
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState("4")
  const [currentRecipe, setCurrentRecipe] = useState([
    {
      id: 1,
      title: "Strawberry Pie",
      text: "1. Make the pie.\n2. The Pie is done."
    },
    {
      id: 2,
      title: "Pumpkin Pie",
      text: "1. Make the pie.\n2. The Pie is done."
    },
    {
      id: 3,
      title: "Strawberry Pie",
      text: "1. Make the pie.\n2. The Pie is done."
    }
  ]);

  //Function setting the current screen to HomeScreen.
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  //Function setting the current screen to RecipeScreen.
  function recipeScreenHandler() {
    setCurrentScreen("recipes");
  }

  //Function setting the current screen to AddRecipeScreen.
  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  //function for adding new recipes.
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipe((currentRecipe) => {
      return [...currentRecipe, {id: currentID, title: enteredRecipeTitle, text: enteredRecipeText}]
    })
    setCurrentID(currentID + 1);
    recipeScreenHandler();
  }

  //Function for deleting recipes.
  function deleteRecipeHandler(id) {
    setCurrentRecipe((currentRecipe) => {
      return currentRecipe.filter((item) => item.id !== id);
    })
  }

  //Allows screen to utilize button behavior to move to RecipeScreen
  let screen = <HomeScreen onNext = {recipeScreenHandler}/>
  
  //Allows button on current screen to utilize onAdd and onCancel if screen is AddRecipeScreen.
  if (currentScreen === "add"){
    screen = <AddRecipeScreen onAdd = {addRecipeHandler} onCancel = {recipeScreenHandler}/>
  }

  //If statement handling what functions to run on each screen.
  if (currentScreen === "recipes") {
    screen = 
    <RecipeScreen
      onHome = {homeScreenHandler} 
      onAdd = {addRecipeScreenHandler} 
      onDelete = {deleteRecipeHandler} 
      currentRecipe = {currentRecipe} 
    />
  }

  //Holds screen in SafeAreaProvider that is currently being displayed.
  return (
    <>
    <StatusBar style="dark"/>
    <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

//Beginning of styling.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
