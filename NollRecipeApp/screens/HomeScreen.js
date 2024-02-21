import { Image, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title"; 
import NavButton from "../components/NavButton";
import Colors from "../constants/colors"

function HomeScreen(props){
    //Sets the safe area screen boundaries
    const insets = useSafeAreaInsets();

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
 
        {/* View containing imported title componenet. */}
        <View>
            <Title>All Things Recipes</Title>
        </View>

        {/* View containing image. */}
        <View style = {styles.imageContainer}>
            <Image 
            source = {require("../assets/images/recipeBook.jpg")}
            style = {styles.image}
            />    
        </View>

        {/* View containing NavButton component for navigation to RecipeScreen.*/}
        <View style = {styles.navContainer}>
            <NavButton onNext = {props.onNext}>View Recipes</NavButton>
        </View>

        </View>
    )
}

//Exports HomeScreen.
export default HomeScreen;

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
   imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: Colors.accent500,
   },
   image: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch"
   },
   navContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
   }
})