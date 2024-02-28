import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../components/Title';
import Colors from '../constants/colors';
import NavButton from '../components/NavButton';

//Function utilizing props to create OrderReviewScreen.
function OrderReviewScreen(props){

    //Sets the boundaries of the screen.
    const insets = useSafeAreaInsets();

    //Beginning of app structure.
    return (

    //App structure contained in LinearGradient for background styling.
    <LinearGradient 
    colors = {[Colors.primary500, Colors.primary300]}
    style = {styles.rootContainer}
    >
        <View
            style = {[
                styles.rootContainer,
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right
                },
            ]}
        >
        
        {/* View containing imported title component. */}
        <View style = {titleContainer}>
            <Title>Review Page</Title>
        </View>

        {/* View containing text describing page purpose. */}
        <View style = {styles.subTitleContainer}>
            <Text style = {styles.subTitle}>Below are your repair order details:</Text>
        </View>

        {/* Displays all relevant user picked info. */}
        <View style = {styles.inputContainer}>
            <Text style = {styles.inputLabel}>Time Chosen:</Text>
            <Text style = {styles.inputDisplay}>{props.time}</Text>
            <Text style = {styles.inputLabel}>Service Options:</Text>
            {props.serviceOption.map((item) => {
                if (item.value) {
                    return (
                        <Text key = {item.id} style = {styles.inputLabel}>
                        {item.name}
                        </Text>
                    )
                }
            })}
            {/* Displays user picked newsletter and membership options.*/}
            <Text style = {styles.inputLabel}>Additional Services:</Text>
            <Text style = {styles.inputDisplay}>{props.newsletterOption ? "Joined Newsletter:" : ""}</Text>
            <Text style = {styles.inputDisplay}>{props.rentalMembershipOption ? "Joined Rental Membership:" : ""}</Text>
        </View>

        {/* Displays the subtotal, sales tax, and total amount owed. */}
        <View style = {inputContainer}>
            <Text style = {styles.inputDisplay}>Subtotal: ${props.price.toFixed(2)}</Text>
            <Text style = {styles.inputDisplay}>Sales Tax: ${(props.price * 0.06).toFixed(2)}</Text>
            <Text style = {styles.inputDisplay}>Total: ${(props.price + props.price * 0.06).toFixed(2)}</Text>
        </View>
        
        {/* View containing imported navbutton component. */}
        <View style = {styles.NavButtonStyle}>
            <NavButton onPress = {props.onNext}>Return</NavButton>
        </View>



    </View>
    </LinearGradient>
    );
}

//Exports OrderReviewScreen.
export default OrderReviewScreen;

//Beginning of styling.
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    titleContainer: {
        marginBottom: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.accent500
    },
    subTitleContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.accent500
    },
    inputContainer: {
        flex: 3
    },
    inputLabel: {
        fontSize: 20,
        fontFamily: "migae",
        color: Colors.accent500
    },
    inputDisplay: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold"
    },
    NavButtonStyle: {
        alignItems: "center"
    }
})