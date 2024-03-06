import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import Colors from './constants/colors';
import HomeScreen from './screens/HomeScreen';

//Apps function handling fonts, and the current screen.
export default function App() {

  //Loads required fonts.
  const [ fontsLoaded, fontError] = useFonts({
    migae: require("./assets/fonts/MigaeSemibold-3zd2M.otf")
  })

  //Shows SplashScreen only when fonts are loaded.
  const onLayoutRootView = useCallback( async () => {
    if (fontsLoaded || fontError){
      await SplashScreen.hideAsync();
    }
  })

  //Sets screen to HomeScreen.
  let screen = <HomeScreen />

  //If fonts are not loaded, return nothing, if they are, returns the screen through SafeAreaProvider.
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style = "light" />
        <SafeAreaProvider style = {styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

//Beginning of styling.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500
  },
});
