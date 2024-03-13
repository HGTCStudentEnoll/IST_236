import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View, StyleSheet, Platform, Text } from "react-native";
import Colors from '../constants/colors';

//Function utilizing props for creation of CountryGridTile component. 
function CountryGridTile(props){
    return(
        <View>
            {/* Pressable with styling for when pressed. */}
            <Pressable
            style = {({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null
            ]}
            android_ripple = {{ color: Colors.primary300 }}
            onPress = {props.onPress}
            >
                {/* Creates a linear gradient for each tile. */}
                <LinearGradient
                    colors = {[props.color, props.color, Colors.accent300o75]}
                    style = {styles.innerContainer}
                >
                    {/* Displays name of country in tile. */}
                    <Text style = {styles.name}>{props.name}</Text>
                </LinearGradient>
            </Pressable>
        </View>
    )
}

//Exports CountryGridTile component.
export default CountryGridTile;

//Beginning of component styling.
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible" 
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 20,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        textAlign: "center",
        fontSize: 30,
        fontFamily: "migae"
    }
})