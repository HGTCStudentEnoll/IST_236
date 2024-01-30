import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, SafeAreaView, TextInput } from 'react-native';

//Start of page functionality.
export default function App() {


  //const for randomly chosen sentences.
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];


  //State management variables.
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [randomResponse, setRandomResponse] = useState("");


  //Min and max for randomly chosen number.
  const min = 0;
  const max = 19;


  //Function for when the submit button is pressed.
  function onSubmitPress() {

    //Generates random number.
    const randomNumber = Math.floor(Math.random() * (max - min) + min)
    
    //Uses random number to pick response
    setRandomResponse(responses[randomNumber]);

    //Sets modal to visible.
    setModalIsVisible(true);

    //console logged response, keep for problem solving.
    console.log(randomResponse);
  }


  //Function for when the close button is pressed.
  function onClosePress() {
    setModalIsVisible(false);
  }




  //Start of page layout and styling.
  return (
    <>
    <StatusBar style = 'dark'/>

    <SafeAreaView style={styles.container}>


      {/* Title views. */}
      <View style={styles.titleContainer}>
        <View style={styles.titleBackground}>
          <Text style={styles.title}>Magic 8 Ball</Text>
        </View>
      </View>


      {/* User input. */}
      <TextInput
            style={styles.textInput}
            //Placeholder for when it is empty
            placeholder = "Enter your question here"
            //Changes userQuestion when text is modified
            onChangeText = {setUserQuestion}
      />


      {/* Submit button. */}
      <View style={styles.buttonContainer}>
      <Button
        onPress = {onSubmitPress}
        title = "Submit question"
        color = "#757575"
      />
      </View>
        

      {/* Modal displaying results. */}
      <Modal visible = {modalIsVisible}>
      <SafeAreaView style={styles.modalContainer}>

        <View userQuestionPlaybackContainer>
        <Text style = {styles.resultsLabel}>You asked:</Text>
        <Text style = {styles.resultsDisplay}>{userQuestion}</Text>
        </View>

        <View style={styles.answersContainer}>
          <Text style = {styles.resultsLabel}>Response:</Text>
          <Text style = {styles.resultsDisplay}>{randomResponse}</Text>
        </View>

        <View style={styles.modalCloseButton}>
        <Button
        onPress = {onClosePress}
        title = "Close"
        color = "#757575"
        />
        </View>

      </SafeAreaView>
      </Modal>


    </SafeAreaView>
    </>
  );
}


{/* Beginning of styling. */}
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center"
  },
  titleBackground: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20, 
    borderWidth: 3,
    borderRadius: 7
  },
  title: {
    fontSize: 60,
    fontWeight: "bold"
  },
  textInput: {
    backgroundColor: "#cacaca",
    borderWidth: 1,
    borderRadius: 6,
    padding: 15,
    color: '#ffffff',
    marginBottom: 300
  },
  buttonContainer: {
    paddingBottom: 50
  },
  answersContainer: {
    paddingBottom: 60,
    paddingTop: 50
  },
  userQuestionPlaybackContainer: {

  },
  resultsDisplay: {
    fontSize: 25,
    color: "white",
    marginTop: 20
  },
  resultsLabel: {
    backgroundColor: "white",
    padding: 5,
    paddingTop: 5,
    paddingBottom: 3,
    paddingHorizontal: 20, 
    borderWidth: 3,
    borderRadius: 7
}});
