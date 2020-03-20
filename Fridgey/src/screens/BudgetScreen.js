import React, {useState} from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import BudgetInput from '../components/Budget/BudgetInput'

const displayBudget = (budget) => {
	return <Text>budget</Text>
}
const BudgetScreen = () => {
	const [budget, setBudget] = useState(0)
	return (
		<View>
			<Text>Enter Monthly Budget</Text>
			<BudgetInput
				budget = {budget}
				onBudgetChange = {(newBudget) => setBudget(newBudget)}
				onBudgetSubmit = {{<Text>{budget}</Text>}}
			/>
		</View>
	)
}



const styles = StyleSheet.create({});

export default BudgetScreen;
