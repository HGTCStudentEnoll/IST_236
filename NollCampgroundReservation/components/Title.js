import { Text, StyleSheet, useWindowDimensions } from 'react-native';
import Colors from '../constants/colors';

//Function utilizing props to display title.
function Title(props) {
    const { width, height } = useWindowDimensions();

    return <Text style={[styles.title, {fontSize: width * 0.13}]}>{props.children}</Text>
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