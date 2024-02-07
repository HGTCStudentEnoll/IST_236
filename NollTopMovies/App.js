import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image } from 'react-native';

import movieItem from "./components/movieItem"; 



export default function App() {


  {/* Array of movie information. */}
  const [movieItems, setMovieItems] = useState([
    {
      name: "Definitely Real Movie 1",
      image: require("./assets/images/moviePoster1.jpg"),
      rating: "10.0"
    },
    {
      name: "Definitely Real Movie 2",
      image: require("./assets/images/moviePoster2.jpg"),
      rating: "9.5"
    },
    {
      name: "Definitely Real Movie 3",
      image: require("./assets/images/moviePoster3.jpg"),
      rating: "8.5"
    },
    {
      name: "Definitely Real Movie 5",
      image: require("./assets/images/moviePoster4.jpg"),
      rating: "8.0"
    },
    {
      name: "Definitely Real Movie 4",
      image: require("./assets/images/moviePoster5.jpg"),
      rating: "7.6"
    },
    {
      name: "GPU Prices: A Horror Movie",
      image: require("./assets/images/moviePoster6.jpg"),
      rating: "7.5"
    },
    {
      name: "Don't Forget Me: A RAM Story",
      image: require("./assets/images/moviePoster7.jpg"),
      rating: "7.4"
    },
    {
      name: "MineBlocks: A Documentary",
      image: require("./assets/images/moviePoster8.jpg"),
      rating: "7.3"
    },
    {
      name: "Definitely Real Movie 6",
      image: require("./assets/images/moviePoster9.jpg"),
      rating: "7.2"
    },
    {
      name: "Definitely Real Movie 7",
      image: require("./assets/images/moviePoster10.jpg"),
      rating: "7.1"
    }
  ]);


  {/* Arrow function holding view containing all necessary list information to display. */}
  const movieItemsRender = ({ item }) => (
    <View style = {styles.movieDisplayContainer}>
      <Text style = {styles.nameText}>{item.name}</Text>
      <Image source = {item.image} style = {styles.imageStyle} />
      <Text style = {styles.ratingText}>{item.rating} / 10</Text>
    </View>
  ); 



  {/* Start of apps structure. */}
  return (
    <>
    <StatusBar style = "dark" />
    <SafeAreaView style = {styles.root}>
    
      <View style = {styles.titleContainer}>
        <Text style = {styles.title}>Top 10 Movies</Text>
      </View>

      <View style = {styles.listContainer}>
        <FlatList 
        data = {movieItems}
        keyExtractor = {(item) => item.name}

        /* renderItem calls function, using view containing structure of each snippet on the list */
        renderItem = {movieItemsRender}
        />
      </View>

    </SafeAreaView>
    </>
  );
}



{/* Start of apps styling. */}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10
  },
  title: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#1b1b1b"
  },
  listContainer: {
    flex: 8,
    width: "80%", 
    justifyContents: "center",
    alignItems: "center"
  },
  imageStyle: {
    height: 240,
    width: 300
  },
  nameText: {
    color: "white",
    fontSize: 15,
    paddingBottom: 10,
    paddingTop: 10
  },
  ratingText: {
    color: "white",
    fontSize: 15,
    paddingBottom: 40,
    paddingTop: 10
  },
  movieDisplayContainer: {
    backgroundColor: "#1b1b1b",
  }
});
