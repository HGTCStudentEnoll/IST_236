import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

//Function utilizing props to display title.
function Title(props) {
    return <Text style={styles.title}>{props.children}</Text>
}

//Exports Title.
export default Title;

//Beginning of styling.
const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        color: Colors.accent500,
        fontFamily: "migae",
        textAlign: "center"
    }
});