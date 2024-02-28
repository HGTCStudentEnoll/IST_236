import { StatusBar } from 'expo-status-bar';
import { useMemo, useState, useCallback, fontError } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import HomeScreen from './screens/HomeScreen'
import Colors from './constants/colors';
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  
  //Loads in required font.
  const [fontsLoaded] = useFonts({
    "migae": require("./assets/fonts/MigaeSemibold-3zd2M.otf")
  })

  //Hides splash screen only when fonts are loaded.
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError])

  //useState for holding the current screen and price of order.
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  //useMemo for radio buttons, as well as a useState for holding the current ID.
  const [ serviceTimeId, setServiceTimeId] = useState(0);
  const serviceTimeRadioButtons = useMemo(
    () => [
      {
        id: 0,
        label: "Standard",
        value: "standard",
        price: 0.0,
        borderColor: Colors.accent500,
        color: Colors.accent500
      },
      {
        id: 1,
        label: "Expedited",
        value: "expedited",
        price: 50.0,
        borderColor: Colors.accent500,
        color: Colors.accent500
      },
      {
        id: 2,
        label: "Next Day",
        value: "next day",
        price: 100.0,
        borderColor: Colors.accent500,
        color: Colors.accent500
      },
    ]
  );

  //Beginning of useState to hold information of user chosen repair options.
  const [ serviceOption, setServiceOption ] = useState([
    {id: 0, name: "Basic Tune-Up", value: false, price: 50.0},
    {id: 1, name: "Comprehensive Tune-Up", value: false, price: 75.0},
    {id: 2, name: "Flat Tire Repair", value: false, price: 20.0},
    {id: 3, name: "Brake Servicing", value: false, price: 50.0},
    {id: 4, name: "Gear Servicing", value: false, price: 40.0},
    {id: 5, name: "Chain Servicing", value: false, price: 15.0},
    {id: 6, name: "Frame Repair", value: false, price: 35.0},
    {id: 7, name: "Safety Check", value: false, price: 25.0},
    {id: 8, name: "Accessory Install", value: false, price: 10.0}
  ]);

  //useState for holding user chosen newsletter and membership options.
  const [ newsletterOption, setNewsletterOption ] = useState(false);
  const [ rentalMembershipOption, setRentalMembershipOption ] = useState(false);

  //Beginning of handlers for passed on information.
  function setNewsletterOptionHandler(){
    setNewsletterOption((previous) => !previous);
  }
  function setRentalMembershipOptionHandler(){
    setRentalMembershipOption((previous) => !previous);
  }
  function setServiceOptionHandler(id){
    setServiceOption((prevOption) =>
      prevOption.map((item) =>
        item.id === id ? { ...item, value: item.value } : item
      )
    );
  };

  //Handler for when HomeScreen is displayed.
  function homeScreenHandler(){
    setCurrentPrice(0)
    setCurrentScreen("home")
  }

  //Handler for reviewing the chosen information in OrderReviewScreen, as well as handling the final price shown.
  function orderReviewHandler() {

    let price = 0
    for (let i = 0; i < serviceOption.length; i++) {
      if (serviceOption[i].value){
        price = price + serviceOption[i].price
      }
    }

    if (newsletterOption) {
      price = price + 0
    }

    if (rentalMembershipOption) {
      price = price + 100.0
    }

    price = price + serviceTimeRadioButtons[serviceTimeId].price

    setCurrentPrice(price);
    setCurrentScreen("review")
  }

  //Sets the screen as homescreen, as well as passes required data to that screen.
  let screen = <HomeScreen 
    currentPrice = {currentPrice}
    serviceTimeId = {serviceTimeId}
    servicetimeRadioButtons = {serviceTimeRadioButtons}
    serviceOption = {serviceOption}
    newsletterOption = {newsletterOption}
    rentalMembershipOption = {rentalMembershipOption}
    onSetServiceTimeId = {setServiceTimeId}
    onSetServiceOption = {setServiceOptionHandler}
    onSetNewsletterOption = {setNewsletterOptionHandler}
    onSetRentalMembershipOption = {setRentalMembershipOptionHandler}
    onNext = {orderReviewHandler}
  />

  //If statement to change screen to OrderReviewScreen.
  if (currentScreen == "review") {
    screen = <OrderReviewScreen 
    
    //Passes information to OrderReviewScreen.
    time = {serviceTimeRadioButtons[serviceTimeId].value}
    serviceOption = {serviceOption}
    newsletterOption = {newsletterOption}
    rentalMembershipOption = {rentalMembershipOption}
    price = {currentPrice}
    onNext = {homeScreenHandler}
    />
  }

  //If statement determining if fonts are not loaded, and if so returns null. Displays page otherwise.
  if (!fontsLoaded && !fontError){
    return null;
  } else {
    //Displays screen in SafeAreaProvider, only if fonts have loaded.
    return (
      <>
        <StatusBar style = "dark"/>
        <SafeAreaProvider style = {styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

//Beginning of styling.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    alignItems: 'center',
    justifyContent: 'center',
  }
});