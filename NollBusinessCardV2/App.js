import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View, Image, Linking } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style ={styles.root}>
        <View style = {styles.imageContainer}>
          <Image style = {styles.image} source = {require("./assets/images/aDefinitelyRealNoSarcasmPictureOfMe.png")}/>
        </View>
        <View style = {styles.InformationContainer}>
          <Text style = {styles.text}>Ethan Noll</Text>
          <Text style = {styles.text}>enoll@hgtc.edu</Text>
          <Text style = {styles.text} onPress={() => Linking.openURL("tel:5551111111")}>555-111-1111</Text>
          <Text style = {styles.text} onPress={() => Linking.openURL("https://github.com/HGTCStudentEnoll/IST236_2024.git")}>-- Github Link --</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 3,
    paddingTop: 50,
    width: "100%",
  },
  image: {
    height: 350,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 3, 
    borderColor: "#cecece"
  },
  informationContainer: {
    flex: 4,
    justifyContents: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 25,
    color: "#ffffff",
    fontStyle: "italic",
    marginBottom: 1,
    paddingBottom: 40
  }
});