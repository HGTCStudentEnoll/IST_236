import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';

export default function App() {

  //Loads fonts
  const [fontsLoaded] = useFonts({
    "migae": require("./assets/fonts/MigaeSemibold-3zd2M.otf")
  })

  //Sets the state variable for current screen.
  const [currentScreen, setCurrentScreen] = useState("home");

  //Function that will change the current screen to MenuScreen.
  function menuScreenhandler(){
    setCurrentScreen("menu");
  }

  //Function that will change the current screen to MenuScreen.
  function homeScreenhandler(){
    setCurrentScreen("home");
  }


  //Determines what screen to be on.
  let screen = <HomeScreen onNext={menuScreenhandler}/>;

  if (currentScreen === "menu"){
    screen = <MenuScreen onNext = {homeScreenhandler}/>;
  }

  return (
    <>
      <StatusBar style = 'dark' />
      <SafeAreaProvider style = {styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
