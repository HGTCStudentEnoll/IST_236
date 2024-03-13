import { View, Text, FlatList } from 'react-native';
import { COUNTRIES } from '../data/dummyData';
import CountryGridTile from '../components/CountryGridTile';

//Beginning of screen structure, utilizes props.
function HomeScreen(props){

    //Overall function for use in renderItem that handles what is rendered in the flatlist.
    function renderCountryItem(itemData){

        //Function to handle navigation to the correct destinations screen depending on country.
        function pressHandler(){
            props.navigation.navigate("DestinationsOverviewScreen", {
                stateId: itemData.item.id,
            })
        }

        //Returns countryGridTile component with all relevant data for the country option to display and function properly.
        return (
            <CountryGridTile
                name = {itemData.item.name}
                color = {itemData.item.color}
                onPress = {pressHandler}
            />
        )
    }

    //Returns view containing a flatlist of countries for user to choose.
    return (
        <View>
            <FlatList
                data = {COUNTRIES}
                keyExtractor = {(item) => {
                    return item.id
                }}
                renderItem = {renderCountryItem}
                numColumns= {2}
            />
        </View>
    )
}

//Exports HomeScreen screen.
export default HomeScreen;