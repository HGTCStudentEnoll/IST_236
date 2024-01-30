import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function App() {
// set max and min dice value
const maxVal = 6;
const minVal = 1;
// Create state management variables (useState is a default value, dice1 is the variable and setDice1 is the command to change said variable.)
const [dice1, setDice1] = useState(1); 
const [dice2, setDice2] = useState(1);
const [modalIsVisible, setModalIsVisible] = useState(false);
const [userGuess, setUserGuess] = useState("");
const [userWager, setUserWager] = useState("");
const [diceSum, setDiceSum] = useState(0);

// Starts dice roll modal screen, sets user guess and wager to empty.
function startDiceRollHandler() {
  setModalIsVisible(true);
  setUserGuess("");
  setUserWager("");
}

// Closes modal 
function endDiceRollHandler() {
  setModalIsVisible(false);
}

// Determines what happens on a dice roll
function onDiceRoll() {
  const rndNum1 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
  const rndNum2 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
  setDice1(rndNum1);
  setDice2(rndNum2);

  let result = rndNum1 + rndNum2;
  setDiceSum(result);

  endDiceRollHandler();  
}

// Dynamically determine what type of result text to display
let resultText = (
  <Text style={styles.resultText}>Roll the dice and make a wager</Text>
)

const userGuessNum = parseInt(userGuess);
const diceSumNum = parseInt(diceSum);
const userWagerNum = parseInt(userWager);
if (userGuess !== "" && userGuessNum == diceSumNum) {
  resultText = <Text style={styles.resultText}>You Won ${(userWagerNum * 5).toFixed(2)}</Text>
}

if (userGuess !== "" && userGuessNum !== diceSumNum) {
  resultText = <Text style={styles.resultText}>You Lost ${(userWagerNum).toFixed(2)}</Text>
}

  // Main page and modal
  return (
    <>
    <Statusbar style = 'auto'/>
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleBackground}>
          <Text style={styles.title}>Dice Roller</Text>
        </View>
      </View>
    

    <View style={styles.rollButtonContainer}>
      <Pressable
      //Adds the android ripple
      android_ripple={{color: "#cc8d8d"}}
      //Styles the button when pressed
      style = {({pressed})=> pressed && styles.pressedButton}
      //When pressed, open modal screen
      onPress={startDiceRollHandler}
      >
        <View style={styles.rollButton}>
          <Text style={styles.rollButtonText}>Roll Dice</Text>
        </View>
      </Pressable>
    </View>

        <View style={styles.diceContainer}>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>{dice1}</Text>
          </View>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>{dice2}</Text>
          </View>
        </View>

        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>The resulting dice roll is {diceSum}</Text>
        </View>
      
        <View style={styles.resultscontainer}>
          <Text style={styles.resultText}>{resultText}</Text>
        </View>

        
        <Modal visible = {modalIsVisible}>
          <safeAreaView style={styles.modalRoot}>
            <Text style={styles.inputLabel}> Guess The Roll Value:</Text>
            <TextInput
            style={styles.textInput}
            //Placeholder for when it is empty
            placeholder = "Enter A Guess Between 2 and 12"
            //Sets the keyboard type to number pad for only integers
            keyboardType = "number-pad"
            //When the text is changed, update the userGuess
            onChangeText={setUserGuess}
            //Tie the entered value to the userGuess so when it is reset to blank, the input field will also reset
            value={userGuess}
            />
            <Text style={styles.inputLabel}> What is your wager:</Text>
            <TextInput
            style={styles.textInput}
            //Placeholder for when it is empty
            placeholder = "Enter your wager here"
            //Sets the keyboard type to number pad for only integers
            keyboardType = "number-pad"
            //When the text is changed, update the userGuess
            onChangeText={setUserWager}
            //Tie the entered value to the userGuess so when it is reset to blank, the input field will also reset
            value={userWager}
            />

            <View style={styles.modalButtonContainer}>
              <View style={styles.modalButton}>
                <Button title = "Roll Dice" onPress={onDiceRoll}/>
              </View>
              <View style={styles.modalButton}>
                <Button title = "Cancel" color= "black" onPress={endDiceRollHandler}/>
              </View>
            </View>

          </safeAreaView>
        </Modal>




      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8849b3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
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
  rollButtonContainer: {
    flex: 1,
    justifyContent: "center"
  },
  pressedButton: {
    opacity: 0.8
  },
  rollButton: {
    backgroundColor: "White",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7
  },
  rollButtonText: {
    fontSize: 25
  },
  diceContainer: {
    flex: 3,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    width: "80%"
  },
  dice: {
    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 7,
    margin: 20,
    width: 100,
    height: 100,
    justifyContent: "center"
  },
  diceNumber: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic"

  },
  resultsContainer: {
    flex: 1
  },
  resultText: {
    fontSize: 25
  },
  modalRoot: {
    flex: 1,
    backgroundColor: '#8849b3',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 25,
    color: "white",
    marginTop: 20
  },
  textInput: {
    backgroundColor: "#ffd4d4",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    color: '#8849b3',
    marginBottom: 30
  },
  modalButtonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  modalButton: {
    width: "30%",
    marginHorizontal: 8
  }
});
