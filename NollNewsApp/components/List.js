import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from '../components/ListItem'

//Function utilizing props to create List component.
function List(props) {
    function renderListingItem(itemData) {
        const listingItemProps = {
            id: itemData.item.id,
            type: itemData.item.type,
            headline: itemData.item.headline,
            date: itemData.item.date,
            author: itemData.item.author,
            agency: itemData.item.agency,
            description: itemData.item.description,
            imageUrl: itemData.item.imageUrl
        };
        return <ListingItem {...listemItemProps}/>;
    }

    //Returns view containing flatlist of rendered list items.
    return (
        <View style = {styles.container}>
            <FlatList
                data = {props.items}
                keyExtractor = {(item) => item.id}
                renderItem = {renderListingItem}
                showsVerticalScrollIndicator = {false}
            />
        </View>
    )
}

//exports List component.
export default List;

//Beginning of component styling.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "white"
    },
    backgroundImage: {
        opacity: 0.1
    }
})