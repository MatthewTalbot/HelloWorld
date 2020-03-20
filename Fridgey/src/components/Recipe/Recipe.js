import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";

import Card from "../Card/Card";

const YOUR_API_KEY = "5bcac43624cd4fde163db0d5b37859e3";
const YOUR_APP_ID = "53c99899";
const FROM = Math.floor(Math.random() * Math.floor(30));

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log("Effect has been run");
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=random&app_id=${YOUR_APP_ID}&app_key=${YOUR_API_KEY}&from=${FROM}&to=35`
    );

    const data = await response.json();
    setRecipes(data.hits);
  };

  return recipes.map(recipe => (
    <TouchableOpacity key={recipe.recipe.label}>
      <Card
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        image={{ uri: recipe.recipe.image }}
        ingrediants={recipe.recipe.ingrediantLines}
      />
    </TouchableOpacity>
  ));
};
export default Recipe;
