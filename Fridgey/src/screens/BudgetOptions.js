import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function BudgetOptions(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.budgetingOptions}>Budgeting Options</Text>
      <Text style={styles.loremIpsum}></Text>
      <View style={styles.iconRow}>
        <EntypoIcon name="credit" style={styles.icon}></EntypoIcon>
        <Text style={styles.loremIpsum2}>
          Create New Budget / View {"\n"}Current Budget
        </Text>
      </View>
      <View style={styles.icon2Row}>
        <EntypoIcon name="block" style={styles.icon2}></EntypoIcon>
        <Text style={styles.deleteBudget}>Delete Budget</Text>
      </View>
      <View style={styles.icon3Row}>
        <EntypoIcon
          name="arrow-with-circle-left"
          style={styles.icon3}
        ></EntypoIcon>
        <EntypoIcon
          name="arrow-with-circle-left"
          style={styles.icon4}
        ></EntypoIcon>
      </View>
      <View style={styles.icon6Row}>
        <EntypoIcon
          name="controller-fast-backward"
          style={styles.icon6}
        ></EntypoIcon>
        <Text style={styles.budgetHistory}>Budget History</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  budgetingOptions: {
    color: "rgba(245,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 144,
    marginLeft: 10
  },
  loremIpsum: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: -58,
    marginLeft: 75
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  loremIpsum2: {
    color: "rgba(245,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 20
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 96,
    marginLeft: 15,
    marginRight: 58
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  deleteBudget: {
    color: "rgba(245,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 20,
    marginTop: 10
  },
  icon2Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 15,
    marginRight: 176
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 380
  },
  icon3Row: {
    height: 40,
    flexDirection: "row",
    marginTop: -315,
    marginLeft: 314,
    marginRight: -360
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  budgetHistory: {
    color: "rgba(245,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 20,
    marginTop: 10
  },
  icon6Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 325,
    marginLeft: 15,
    marginRight: 168
  }
});

export default BudgetOptions;
