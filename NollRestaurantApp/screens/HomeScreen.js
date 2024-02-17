import { View, StyleSheet, Text, Image, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title';
import NavButton from '../components/NavButton';
import Colors from '../constants/colors';

function HomeScreen(props) {
    
    //Sets the safe area screen boundaries
    const insets = useSafeAreaInsets();
    
    //Beginning of app structure.
    return (
        <View style = {[
            styles.rootContainer,
            {
                paddingTop: insets.top,
                paddingBotton: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right
            }
        ]}>

        {/* View and title of restaurant, utilizing title component.*/}
        <View style = {styles.titleContainer}>
            <Title>Restaurant of Food</Title>
        </View>

        {/* View containing image of restaurant.*/}
        <View style = {styles.imageContainer}>
            <Image style = {styles.image} source = {require("../assets/images/restaurant.jpg")} />
        </View>

        {/* View off all relevant info regarding restaurant, with working links. */}
        <View style = {styles.infoContainer}>
            <Text 
            style = {styles.infoText} 
            onPress = {() => Linking.openURL("tel:555-112-1212")}>
            555-112-1212
            </Text>
            <Text 
            style = {styles.infoText} 
            onPress = {() => Linking.openURL("https://maps.app.goo.gl/ekKiJggMB6Q9ed4Z7")}>
            555 Restaurant Row
            </Text>
            <Text 
            style = {styles.infoText} 
            onPress = {() => Linking.openURL("https://www.mcdonalds.com/us/en-us.html")}>
            www.RealRestaurant.com
            </Text>
        </View>

        {/* Container of NavButton, allows moving to menu screen.*/}
        <View style = {styles.navContainer}>
            <NavButton onPress = {props.onNext}>Open Menu</NavButton>
        </View>


        </View>
    );

}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center"
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center"
    },
    imageContainer: {
        flex: 4
    },
    image: {
        resizeMode: "cover",
        height: "100%",
        width: 380
    },
    infoText: {
        fontSize: 25,
        textAlign: "center",
        padding: 7,
        color: Colors.accent500,
        fontFamily: "migae"
    },
    infoContainer: {
        flex: 3,
        justifyContent: "center"
    },
    navContainer: {
        flex: 1
    }
});