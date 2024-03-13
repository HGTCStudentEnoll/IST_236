import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './screens/HomeScreen';
import DestinationsOverviewScreen from './screens/DestinationsOverviewScreen';
import Colors from './constants/colors';

//Const holding stack utilizing createNativeStackNavigator.
const Stack = createNativeStackNavigator();

//Beginning of app structure.
export default function App() {

  //Loads fonts, and holds if the font has loaded or if there was an error.
  const [fontsLoaded, fontError] = useFonts({
    migae: require("./assets/fonts/MigaeSemibold.otf")
  });

  //onLayoutRootView that hides the splash screen until fonts have loaded.
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError])

  //If the fonts have loaded, returns the rest of the app.
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
      <StatusBar style = "dark"/>
      <NavigationContainer>

        {/* Stack Navigator for flipping between pages. */}
        <Stack.Navigator
          initialRouteName = "HomeScreen"
          screenOptions = {{
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: Colors.primary300,
            headerTitleStyle: {fontFamily: "migae", fontSize: 30},
            contentStyle: {backgroundColor: Colors.primary800}
          }}
        
        >
          {/* Part of the stack that directs to HomeScreen. */}
          <Stack.Screen 
          name = "HomeScreen"
          component = {HomeScreen}
          options = {{
            title: "Destination Locations"
          }}
          />
          {/* Part of the stack that directs to DestinationsOverviewScreen. */}
          <Stack.Screen
            name = "DestinationsOverviewScreen"
            component = {DestinationsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </>
    );
  }
}

//Beginning of app styling.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
