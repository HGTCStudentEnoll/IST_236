import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

//Function of title utilizing props, to be exported to pages in need of it.
function Title(props){
    return <Text style = {styles.title}>{props.children}</Text>
}

//Exports Title.
export default Title;


const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        textAlign: "center",
        color: Colors.accent500,
        fontFamily: "migae"
    }
})