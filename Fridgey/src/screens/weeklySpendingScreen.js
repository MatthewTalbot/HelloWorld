import React,  { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

const weeklySpendingScreen = ({navigation}) => {
	const [weeklySpending, setWeeklySpending] = useState(navigation.state.params.spending);


	return (
		<View>
			<TextInput 
				style = {styles.textInput}
				keyboardType = 'numeric'
				onChangeText  = {(inputBudget) => setWeeklySpending(inputBudget)}
				
			/>
			<Button 
				title = "Go Back"
				onPress = {() => navigation.navigate('Budget', {
						spending: weeklySpending
					})				
				}
			/>
			<Text>Your weekly Spending is: {weeklySpending}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	textInput: {
		margin: 20,
		borderColor: 'black',
		borderWidth: 1
	}
})

export default weeklySpendingScreen;