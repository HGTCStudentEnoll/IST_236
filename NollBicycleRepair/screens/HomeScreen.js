import { StyleSheet, Text, View, ScrollView, ImageBackground, Switch } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RadioGroup } from 'react-native-radio-buttons-group';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Title from '../components/Title';
import Colors from '../constants/colors';
import NavButton from '../components/NavButton';


//Function utilizing props to create HomeScreen.
function HomeScreen(props){

    //Sets the boundaries of the screen.
    const insets = useSafeAreaInsets();

    //Beginning of app structure.
    return(

    //App structure contained in ImageBackground to provide custom image to background.
    <ImageBackground
        source = {require("../assets/images/homeBackground.jpg")}
        resizeMode = "cover"
        style = {styles.rootContainer}
        imageStyle = {styles.backgroundImage}
    >
        {/* View containing style handling insets for pages padding. */}
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
        
        {/* View containing imported Title component. */}
        <View style = {styles.titleContainer}>
            <Title>Bike Repair</Title>
        </View>

        {/* Scrollview containing all input methods. */}
        <ScrollView style = {styles.scrollContainer}>

        {/* View containing radio buttons for service time selection. */}
        <View style = {styles.radioContainer}>
        <Text style = {styles.radioHeader}>Service Times:</Text>
            <RadioGroup 
            radioButtons={props.serviceTimeRadioButtons}
            onPress = {props.onSetServiceTimeId}
            selectedId = {props.serviceTimeId} 
            layout = "row"
            containerStyle = {styles.radioGroup}
            labelStyle = {styles.radioGroupLabels}
            />
        </View>

        {/* View containing checkbox for service option selection. */}
        <View style = {styles.checkboxOverall}>
            <View style = {styles.checkboxContainer}>
                <Text style = {styles.checkboxHeader}></Text>
                <View style = {styles.checkboxSubContainer}>
                    {props.serviceOption.map((item) => {
                        return <BouncyCheckbox 
                        key={item.id}
                        text={item.name}
                        onPress = {props.onSetServiceOption.bind(this, item.id)}
                        textStyle = {{
                            textDecorationLine: "none",
                            color: Colors.accent500
                        }}
                        innerIconStyle={{
                            borderRadius: 0,
                            borderColor: Colors.accent500
                        }}
                        iconStyle={{
                            borderRadius: 0
                        }}
                        fillColor = {Colors.accent500}
                        style = {{ 
                            padding: 2 
                        }}
                        />;                        
                    })}
                </View>
            </View>
        </View>

        {/* View containing switches for selecting newsletter and rental options. */}
        <View style = {styles.rowContainer}>
            <View style = {styles.signupsContainer}>
                <View style = {styles.signupsSubContainer}>
                    <Text style = {styles.signupsLabel}>Newsletter:</Text>
                    <Switch
                    onValueChange = {props.onSetNewsletterOption} 
                    value = {props.newsletterOption}
                    thumbColor = 
                    {
                        props.newsletterOption ? Colors.accent500 : Colors.primary300
                    }
                    trackColor = {{false: Colors.accent500, true: Colors.primary300}}
                    />
                </View>
                <View style = {styles.signupsSubContainer}>
                    <Text style = {styles.signupsLabel}>Rental Membership:</Text>
                    <Switch
                    onValueChange = {props.onSetRentalMembershipOption} 
                    value = {props.rentalMembershipOption}
                    thumbColor = 
                    {
                        props.rentalMembershipOption ? Colors.accent500 : Colors.primary300
                    }
                    trackColor = {{false: Colors.accent500, true: Colors.primary300}}
                    />
                </View>
            </View>
        </View>

        {/* View containing imported NavButton component. */}
        <View style = {styles.buttonContainer}>
            <NavButton onPress = {props.onNext}>Submit</NavButton>
        </View>

    </ScrollView>
    </View>
    </ImageBackground>
    );
}

//Exports HomeScreen.
export default HomeScreen;

//Beginning of styling.
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    titleContainer: {
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.accent500,
        paddingHorizontal: 30,
        paddingVertical: 5
    },
    scrollContainer: {
        flex: 1
    },
    radioContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    radioHeader: {
        fontSize: 30,
        color: Colors.accent500
    },
    radioGroup: {
        paddingBottom: 20
    },
    radioGroupLabels: {
        fontSize: 15,
        fontFamily: "migae",
        color: Colors.accent500
    },
    checkboxOverall: {
        paddingBottom: 20,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    backgroundImage: {
        opacity: 1.0
    },
    checkboxHeader: {
        fontSize: 20,
        color: Colors.accent500
    },
    checkboxSubContainer: {
        padding: 2
    },
    rowContainer: {
        paddingBottom: 20,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    signupsContainer: {
        justifyContent: "space-between"
    },
    signupsSubContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    sigupsLabel: {
        color: Colors.accent500,
        fontFamily: "migae",
        fontSize: 20
    },
    buttonContainer: {
        alignItems: "center"
    },
    //Not currently in use.
    checkboxContainer: {

    },
})