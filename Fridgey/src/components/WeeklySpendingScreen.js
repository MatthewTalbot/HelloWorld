import React,  { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

const WeeklySpendingScreen = ({onWeeklySpendingChange}) => {
	return (
		<View>
			<Text>Weekly Spending</Text>
			<TextInput 
				style = {styles.textInput}
				keyboardType = 'numeric'
				placeholder = "Spending"
				onChangeText  = {onWeeklySpendingChange}	
			/>
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
})

export default WeeklySpendingScreen;