import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SearchBar } from "react-native-elements";

const RecipeScreen = () => {
  const API_KEY = "dedef814c2f44537b5c5c16d6c993941";
  const exampleReq = `https://api.spoonacular.com/recipes/search?query=cheese&apiKey=${API_KEY}`;

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    console.log("working");
    getRecipes();
  }, []);

  return (
    <View>
      <SearchBar> Search</SearchBar>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RecipeScreen;
