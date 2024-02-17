import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import NavButton from '../components/NavButton';
import Colors from '../constants/colors';
import Title from '../components/Title';
import MenuItems from '../components/MenuItem';

function MenuScreen(props) {
    
    //Sets the safe area screen boundaries
    const insets = useSafeAreaInsets();
    
    //Array of required menu items.
    const [menuItem, setMenuItems] = useState([
    {
        name: "Burger",
        image: require("../assets/images/burger.jpg"),
        price: "$99.99",
        id: 1,
    },
    {
        name: "Fries",
        image: require("../assets/images/fries.jpeg"),
        price: "$89.99",
        id: 2,
    },
    {
        name: "Hotdog",
        image: require("../assets/images/hotdog.jpg"),
        price: "$24.99",
        id: 3,
    },
    {
        name: "Pancakes",
        image: require("../assets/images/pancakes.jpg"),
        price: "$1.99",
        id: 4,
    },
    {
        name: "Strawberries",
        image: require("../assets/images/strawberries.jpg"),
        price: "$199.99",
        id: 5,
    },
    ]);

    //Beginning of app structure for MenuScreen.
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

        {/* View and title of MenuScreen, utilizing title component.*/}
        <View style = {styles.titleContainer}>
            <Title>Menu</Title>
        </View>

        {/* View containing flatlist, utilizes array as data and imported menuItems information to render.*/}
        <View style = {styles.listContainer}>
            <FlatList 
            data = {menuItem}

            keyExtractor = {(item) => item.id}

            showVerticalScrollIndicator = {false}

            renderItem={(itemData) => {
                return(
                    <MenuItems
                        name = {itemData.item.name}
                        image = {itemData.item.image}
                        price = {itemData.item.price}
                    />
                );
            }}
            />
        </View>

        {/* View containing imported NavButton for returning to HomeScreen.*/}
        <View style = {styles.navContainer}>
            <NavButton onPress = {props.onNext}>Return Home</NavButton>
        </View>


        </View>
    );

}

//Exports MenuScreen.
export default MenuScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center"
    },
    titleContainer: {
        flex: 1,
        justifyContents: "center"
    },
    listContainer: {
        flex: 7,
        width: 300
    },
    buttonContainer: {
        flex: 1
    }
});