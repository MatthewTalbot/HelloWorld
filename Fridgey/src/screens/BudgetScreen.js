import React,  { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import WeeklySpendingScreen from '../components/WeeklySpendingScreen';


const BudgetScreen = () => {
	const [weeklySpending, setWeeklySpending] = useState(0);
	const [monthlyBudget, setMonthlyBudget] = useState(0);

	return (
		<View>
			<Text>Monthly Budget</Text>
			<TextInput 
				style = {styles.textInput}
				placeholder = "Budget"
				keyboardType = 'numeric'
				onChangeText = {(updatedBudget) => setMonthlyBudget(updatedBudget) }
			/>
			<WeeklySpendingScreen 
				value = {weeklySpending}
				onWeeklySpendingChange = {(newWeeklySpending) => setWeeklySpending(newWeeklySpending)}
			/>
			<Text>
				Remaining Budget: {monthlyBudget-weeklySpending}
			</Text>
			<Text>Weekly Spending: {weeklySpending}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
		textInput: {
			margin: 20,
			borderColor: 'black',
			borderWidth: 1,
			backgroundColor: '#F0EEEE'
	}
});

export default BudgetScreen;