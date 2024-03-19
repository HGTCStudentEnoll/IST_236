import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import BookmarkedNewsScreen from './screens/BookmarkedNewsScreen';
import USNewsScreen from './screens/USNewsScreen';
import WorldNewsScreen from './screens/WorldNewsScreen';
import CatNewsScreen from './screens/CatNewsScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';
import Colors from './constants/colors';

//Const holding Stack, Drawer, and Tabs.
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

//Function to create the Drawer navigator.
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName = "News"
      screenOption = {{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "migae",
          fontSize: 40,
          color: Colors.accent800
        },
        sceneContainerStyle: {backgroundColor: Colors.primary300},
        drawerContentStyle: {backgroundColor: Colors.primary500},
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800
      }}
    >
      <Drawer.Screen 
        name = "News"
        component = {TabsNavigator}
        options = {{
          title: "News List",
          drawerLabel: "News",
          drawerIcon: ({ color, size }) => (
            <Feather name = "list" size = {size} color = {color} />
          )
        }}
      />
      <Drawer.Screen 
        name = "BookedmarkedNews"
        component = {BookmarkedNewsScreen}
        options = {{
          title: "Bookmarked News",
          drawerLabel: "Bookedmarked News",
          drawerIcon: ({ color, size }) => (
            <Feather name = "bookmark" size = {size} color = {color} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

//Function to create the Tabs navigator.
function TabsNavigator(){
  return (
    <Tabs.Navigator
      screenOptions = {{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: "migae"
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500
        }
      }}
    >
      <Tabs.Screen 
        name = "WorldNews"
        component = {WorldNewsScreen}
        options = {{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name = "news" size = {size} color = {color} />
          ),
          tabBarLabel: "World News"
        }}
      />
      <Tabs.Screen 
        name = "USNews"
        component = {USNewsScreen}
        options = {{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name = "news" size = {size} color = {color} />
          ),
          tabBarLabel: "US News"
        }}
      />
      <Tabs.Screen 
        name = "CatNews"
        component = {CatNewsScreen}
        options = {{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name = "cat" size = {size} color = {color} />
          ),
          tabBarLabel: "Cat News"
        }}
      />
    </Tabs.Navigator>
  )
}

//Exports App.
export default function App() {

  //Loads in fonts.
  const [fontsLoaded, fontError] = useFonts({
    migae: require("./assets/fonts/MigaeSemibold.otf")
  })
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  })

  if (!fontsLoaded && !fontError){
    return null
  } else {
    return (
      <>
        <StatusBar style = "light" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName = "DrawerScreen"
            screenOptions = {{
              headerTintColor: Colors.primary300,
              headerStyle: {backgroundColor: Colors.primary500},
              contentStyle: {backgroundColor: "black"}
            }}
          >
            <Stack.Screen
              name = "DrawerScreen"
              component = {DrawerNavigator}
              options = {{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name = "NewsDetail"
              component = {NewsDetailScreen}
              options = {{
                headerBackTitleVisible: false
              }}
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
