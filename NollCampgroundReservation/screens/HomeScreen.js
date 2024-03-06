import { useSafeAreaInsets } from "react-native-safe-area-context"; 
import { View, StyleSheet, ImageBackground, ScrollView, Text, Pressable, Platform, useWindowDimensions, Modal, Button } from 'react-native';
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import Title from '../components/Title';
import Colors from '../constants/colors';
import WheelPicker from "react-native-wheely";
import NavButton from '../components/NavButton';

//Function handling HomeScreen page.
function HomeScreen(){
    //Retrieves the safe area insets
    const insets = useSafeAreaInsets();

    //The following handles when check out DatetimePicker should be displayed and sets the date inputted.
    const [checkIn, setCheckIn] = useState(new Date());
    const [showCheckIn, setShowCheckIn] = useState(false);
    
    function showCheckInPicker(){
        setShowCheckIn(true);
    }

    function hideCheckInPicker(){
        setShowCheckIn(false);
    }

    function onChangeCheckIn(event, selectedDate){
        const currentDate = selectedDate; 
        
        if (Platform.OS === "android"){
            hideCheckInPicker(true);
        }

        setCheckIn(currentDate);
    }


    //The following handles when check out DatetimePicker should be displayed and sets the date inputted.
    const [checkOut, setCheckOut] = useState(new Date());
    const [showCheckOut, setShowCheckOut] = useState(false);
    
    function showCheckOutPicker(){
        setShowCheckOut(true);
    }

    function hideCheckOutPicker(){
        setShowCheckOut(false);
    }

    function onChangeCheckOut(event, selectedDate){
        const currentDate = selectedDate; 
        
        if (Platform.OS === "android"){
            hideCheckInPicker(true);
        }

        setCheckOut(currentDate);
    }


    //useStates and functions for handling showing of picker for guest count and storing data inputted.
    const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const [numGuests, setNumGuests] = useState(0);
    const [showNumGuests, setShowNumGuests] = useState(false);

    function showNumGuestsPicker(){
        setShowNumGuests(true);
    }

    function hideNumGuestsPicker(){
        setShowNumGuests(false);
    }

    function onChangeNumGuests(index){
        setNumGuests(index);
    }


    //useStates and functions for handling showing of picker for campsite count and storing data inputted.
    const campsiteCounts = [1, 2, 3, 4, 5]
    const [numCampsites, setNumCampsites] = useState(0);
    const [showNumCampsites, setShowNumCampsites] = useState(false);

    function showNumCampsitesPicker(){
        setShowNumCampsites(true);
    }

    function hideNumCampsitesPicker(){
        setShowNumCampsites(false);
    }

    function onChangeNumCampsites(index){
        setNumCampsites(index)
    }


    //Handles collecting and displaying results.
    const [results, setResults] = useState("");

    function onReserveHandler(){
        let res =  `Check In:\t\t${checkIn.toDateString()}\n`
        res = res + `Check Out:\t\t${checkIn.toDateString()}\n`
        res = res + `Num of Guests:\t\t${guestCounts[numGuests]}\n`
        res = res + `Num of Camps:\t\t${campsiteCounts[numCampsites]}\n`
        setResults(res);7
    }


    //Code below handles the changing window dimensions of the app.
    const { width, height } = useWindowDimensions();

    const dateLabelFlex = {
        fontSize: width * 0.05
    }

    const dateTextFlex = {
        fontSize: width * 0.04
    }


    //Beginning of page structure.
    return(
    <ImageBackground 
    source = {require("../assets/images/campBackground.jpeg")}
    resizeMode = "cover"
    style = {styles.rootContainer}
    imageStyle = {styles.backgroundImage}
    >
        <View style = {[
            styles.rootContainer, 
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right
            }
        ]}>
                
        {/* ScrollView containing majority of screen structure. */}
        <ScrollView style = {styles.scrollContainer}>


        {/* View containing imported title component. */}
        <View style = {styles.titleContainer}>
            <Title>Camp Reservation</Title>
        </View>


        {/* View containing labels and pressables allowing for user input of check in and out times. */}
        <View style = {styles.rowContainer}>
            <View style = {styles.dateContainer}>
                <Text style = {[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
                <Pressable onPress = {showCheckInPicker}>
                    <Text style = {[styles.dateText, dateTextFlex]}>{checkIn.toDateString()}</Text>
                </Pressable>
            </View>
            <View style = {styles.dateContainer}>
                <Text style = {[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
                <Pressable onPress = {showCheckOutPicker}>
                    <Text style = {[styles.dateText, dateTextFlex]}>{checkOut.toDateString()}</Text>
                </Pressable>
            </View>
        </View>


        {/* View holding differing methods of displaying user input for checking in and out depending on device. */}
        <View>
            {/* Handles input for checking in depending on if the device is Android or IOS. */}
            {showCheckIn && Platform.OS === "android" && (
                <DateTimePicker 
                    testID = "dateTimePickerCheckInAndroid"
                    value = {checkIn}
                    mode = {"date"}
                    display = "spinner"
                    onChange = {onChangeCheckIn}
                />
            )}
            {showCheckIn && Platform.OS === "ios" && (
                <Modal
                    animationType = "slide"
                    transparent = {true}
                    supportedOrientations = {["portrait", "landscape"]}
                >
                    <View style = {styles.centeredModalView}>
                        <View style = {styles.modalView}>
                            <DateTimePicker 
                            testID = "dateTimePickerCheckInIOS"
                            value = {checkIn}
                            mode = {"date"}
                            display = "spinner"
                            onChange = {onChangeCheckIn}
                            />
                            <Button title = "Confirm" onPress = {hideCheckInPicker}/>
                        </View>
                    </View>
                </Modal>
            )}


            {/* Handles input for checking out depending on if the device is Android or IOS. */}
            {showCheckOut && Platform.OS === "android" && (
                <DateTimePicker 
                    testID = "dateTimePickerCheckOutAndroid"
                    value = {checkOut}
                    mode = {"date"}
                    display = "spinner"
                    onChange = {onChangeCheckOut}
                />
            )}
            {showCheckOut && Platform.OS === "ios" && (
                <Modal
                    animationType = "slide"
                    transparent = {true}
                    supportedOrientations = {["portrait", "landscape"]}
                >
                    <View style = {styles.centeredModalView}>
                        <View style = {styles.modalView}>
                            <DateTimePicker 
                            testID = "dateTimePickerCheckOutIOS"
                            value = {checkOut}
                            mode = {"date"}
                            display = "spinner"
                            onChange = {onChangeCheckOut}
                            />
                            <Button title = "Confirm" onPress = {hideCheckOutPicker}/>
                        </View>
                    </View>
                </Modal>
            )}
        </View>


        {/* View containing modal for user input via WheelPicker, allows user input for number of guests. */}
        <View style = {styles.rowContainer}>
            <Text style = {[styles.dateLabel, dateLabelFlex]}>Number of Guests:</Text>
            <Pressable onPress = {showNumGuestsPicker}>
                <View style = {styles.dateContainer}>
                    <Text style = {[styles.dateText, dateTextFlex]}>{guestCounts[numGuests]}</Text>
                </View>
            </Pressable>
            <Modal
            animationType = "slide"
            transparent = "true"
            visible = {showNumGuests}
            supportedOrientations = {["portrait", "landscape"]}
            >
            <View style = {styles.centeredModalView}>
                <View style = {styles.modalView}>
                    <Text style = {[styles.dateText, dateTextFlex]}>Enter Guest Number:</Text>
                    <WheelPicker
                        selectedIndex = {numGuests}
                        options = {guestCounts}
                        onChange = {onChangeNumGuests}
                        containerStyle = {{ width: 200 }}
                    />
                    <Button title = "confirm" onPress = {hideNumGuestsPicker}/>
                </View>
                </View>
            </Modal>
        </View>


        {/* View containing modal for user input via WheelPicker, allows user input for number of camps. */}
        <View style = {styles.rowContainer}>
            <Text style = {[styles.dateLabel, dateLabelFlex]}>Number of Camps:</Text>
            <Pressable onPress = {showNumCampsitesPicker}>
                <View style = {styles.dateContainer}>
                    <Text style = {[styles.dateText, dateTextFlex]}>{campsiteCounts[numCampsites]}</Text>
                </View>
            </Pressable>
            <Modal
            animationType = "slide"
            transparent = "true"
            visible = {showNumCampsites}
            supportedOrientations = {["portrait", "landscape"]}
            >
            <View style = {styles.centeredModalView}>
                <View style = {styles.modalView}>
                    <Text style = {[styles.dateText, dateTextFlex]}>Enter Campsites Number:</Text>
                    <WheelPicker
                        selectedIndex = {numCampsites}
                        options = {campsiteCounts}
                        onChange = {onChangeNumCampsites}
                        containerStyle = {{ width: 200 }}
                    />
                    <Button title = "confirm" onPress = {hideNumCampsitesPicker}/>
                </View>
                </View>
            </Modal>
        </View>


        {/* View containing imported NavButton component for confirming reservation. */}
        <View style = {styles.buttonContainer}>
            <NavButton onPress = {onReserveHandler}>Reserve</NavButton>
        </View>


        {/* View containing text displaying results. */}
        <View style = {styles.resultsContainer}>
            <Text style = {[styles.results, dateLabelFlex]}>{results}</Text>
        </View>

        </ScrollView>
        </View>
    </ImageBackground>
    );
}


//Exports HomeScreen.
export default HomeScreen;


//Beginning of page styling.
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    backgroundImage: {
        opacity: 0.8
    },
    titleContainer: {
        padding: 7,
        marginVertical: 20,
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: Colors.primary400
    },
    scrollContainer: {
        flex: 1,
        width: 3000,
        maxWidth: "90%"
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 20,
        marginBottom: 20
    },
    dateContainer: {
        backgroundColor: Colors.primary300,
        padding: 10
    },
    dateLabel: {
        color: Colors.accent500,
        fontFamily: "migae",
        fontSize: 22
    },
    dateText: {
        color: Colors.accent500,
        fontSize: 15,
        fontWeight: "bold"
    },
    centeredModalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.primary300,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        elevations: 5
    },
    buttonContainer: {
        alignItems: "center"
    },
    results: {  
        textAlign: "center",
        color: Colors.accent500,
        fontFamily: "migae"
    }
});