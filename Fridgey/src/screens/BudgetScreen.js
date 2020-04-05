import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import BudgetInput from "../components/Budget/BudgetInput";

const BudgetScreen = () => {
  const [budget, setBudget] = useState(0);
  const [foodWaste, setFoodWaste] = useState(0);
  const [spending, setSpending] = useState(0);
  return (
    <View>
      <Text>Enter Monthly Budget</Text>
      <BudgetInput
        budget={budget}
        onBudgetChange={(newBudget) => setBudget(newBudget)}
        display="Budget"
      />
      <BudgetInput
        budget={spending}
        onBudgetChange={(newSpending) => setSpending(newSpending)}
        onBudgetSubmit={() => setBudget(budget - spending)}
        display="Spent on Food"
      />
      <Text>Remaining Budget: {budget}</Text>
      <Text>Wasted Food: {foodWaste}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BudgetScreen;
