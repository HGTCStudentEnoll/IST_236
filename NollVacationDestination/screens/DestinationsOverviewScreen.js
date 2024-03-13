import { useLayoutEffect } from 'react';
import { View, Flatlist, StyleSheet } from 'react-native';
import { COUNTRIES, DESTINATIONS } from '../data/dummyData';

//Function utilizing props for DestinationsOverviewScreen.
function DestinationsOverviewScreen(props){
    const countryId = props.route.params.countryId;

    //Finds country id and navigates to the correct one, displaying its name.
    useLayoutEffect(() => {
        const country = COUNTRIES.find((country) => country.id === countryId);
        props.navigation.setOptions({title: country ? country.name : null});
    }, [countryId, props.navigation]);

    //Filters out destinations for only the ones for the chosen country.
    const displayedDestinations = DESTINATIONS.filter(destinationItem => {
        return destinationItem.countryId === countryId;
    })

    //Function to render destination objects to flatlist.
    function renderDestinationData(itemData){
        const destinationItemProps = {
            name: itemData.item.name,
            imageUrl: itemData.item.imageUrl,
            averageCost: itemData.item.averageCost,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            listIndex: itemData.index 
        }

        //Returns destinationItem
        return <destinationItem {...destinationItemProps}/>
    }

    //Returns view containing flatList of destinations.
    return (
        <View style = {styles.container}>
            <Flatlist
                data = {displayedDestinations}
                keyExtractor = {(item) => item.id}
                renderItem = {renderDestinationData}
            />
        </View>
    )
}

//Exports DestinationsOverviewScreen screen.
export default DestinationsOverviewScreen;

//Beginning of screen styling.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    }
})