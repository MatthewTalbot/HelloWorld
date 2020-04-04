import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function BudgetMonthSpecific(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum1}>Current Monthly Budget</Text>
      <Text style={styles.loremIpsum2}>$0.00 / $0.00 Spent This Week</Text>
      <Text style={styles.loremIpsum3}>Money Wasted This Week:</Text>
      <Text style={styles.loremIpsum4}>Money Saved This Week:</Text>
      <Text style={styles.loremIpsum5}>$0.00 / $0.00 Spent This Month</Text>
      <Text style={styles.loremIpsum6}>$0.00 / $0.00 Spent This Week</Text>
      <View style={styles.rect1}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loremIpsum1: {
    color: "rgba(245,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 361,
    marginLeft: 38
  },
  loremIpsum2: {
    color: "rgba(41,14,202,1)",
    fontSize: 20,
    fontFamily: "alef-regular",
    marginTop: 286,
    marginLeft: 38
  },
  loremIpsum3: {
    color: "rgba(245,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -196,
    marginLeft: 38
  },
  loremIpsum4: {
    color: "rgba(245,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 105,
    marginLeft: 38
  },
  loremIpsum5: {
    color: "rgba(41,14,202,1)",
    fontSize: 20,
    fontFamily: "alef-regular",
    marginTop: -231,
    marginLeft: 38
  },
  loremIpsum6: {
    color: "rgba(41,14,202,1)",
    fontSize: 20,
    fontFamily: "alef-regular",
    marginTop: 116,
    marginLeft: 38
  },
  rect1: {
    width: 242,
    height: 240,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: -494,
    alignSelf: "center"
  }
});

export default BudgetMonthSpecific;
