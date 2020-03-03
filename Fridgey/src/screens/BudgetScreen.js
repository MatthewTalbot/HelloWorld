import React,  { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import {BudgetTracker} from '../components/application_data/BudgetTracker';


const BudgetScreen = ({navigation}) => {
	const [monthlyBudget, setMonthlyBudget] = useState(BudgetTracker.monthlyBudget);

	return (
		<View>
			<Text>Set Monthly Budget</Text>
			<TextInput 
				style = {styles.textInput}
				keyboardType = 'numeric'
				onChangeText = {(inputBudget) => {
					setMonthlyBudget(inputBudget)
					BudgetTracker = {...BudgetTracker, {monthlyBudget: {monthlyBudget}}}
					}
				}
			/>
			<Button 
				title = "Spent this week"
				onPress = {() => navigation.navigate('Spending')}
			/>
			<Text>
				Remaining Budget: {monthlyBudget}
			</Text>
			<Text>
				Weekly Spending: {BudgetTracker.weeklySpending}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
		textInput: {
			margin: 20,
			borderColor: 'black',
			borderWidth: 1
	}
});

export default BudgetScreen;