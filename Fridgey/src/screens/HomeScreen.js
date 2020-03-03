import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text>HomeScreen</Text>
			<Button 
				title = "Budget"
				onPress = { () => navigation.navigate('Budget', {spending: 0})}
			/>
			<Button 
				title = "Inventory"
				onPress = { () => navigation.navigate('Inventory')}
			/>
			<Button 
				title = "Recipes"
				onPress = { () => navigation.navigate('Recipe')}
			/>

			
		</View>
	)
}

const styles = StyleSheet.create({});

export default HomeScreen;