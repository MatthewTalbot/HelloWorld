import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import Icon from "react-native-vector-icons/Entypo";

function BudgetMain(props) {
  return (
    <View style={styles.container}>
      <View style={styles.pathRow}>
        <Svg viewBox="0 0 299 149" style={styles.path}>
          <Path
            strokeWidth={1}
            fill="rgba(230, 230, 230,1)"
            stroke="rgba(230, 230, 230,1)"
            d="M0.00 149.00 L299.00 0.00 L299.00 0.00 L0.00 149.00 Z"
          ></Path>
        </Svg>
        <View style={styles.iconColumn}>
          <Icon name="arrow-with-circle-left" style={styles.icon}></Icon>
          <View style={styles.rect}></View>
        </View>
      </View>
      <Text style={styles.loremIpsum}>Current Monthly Budget</Text>
      <Text style={styles.loremIpsum2}>$0.00 / $0.00 Spent This Week</Text>
      <Text style={styles.loremIpsum3}>Money Wasted This Week:</Text>
      <Text style={styles.loremIpsum4}>Money Saved This Week:</Text>
      <Text style={styles.loremIpsum5}>$0.00 / $0.00 Spent This Month</Text>
      <Text style={styles.loremIpsum6}>$0.00 / $0.00 Spent This Week</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  path: {
    width: 427,
    height: 213
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 241
  },
  rect: {
    width: 242,
    height: 240,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 31
  },
  iconColumn: {
    width: 281,
    marginLeft: 14,
    marginTop: 35
  },
  pathRow: {
    height: 346,
    flexDirection: "row",
    marginTop: -15,
    marginLeft: -375,
    marginRight: 28
  },
  loremIpsum: {
    color: "rgba(245,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 36,
    marginLeft: 38
  },
  loremIpsum2: {
    color: "rgba(41,14,202,1)",
    fontSize: 20,
    fontFamily: "alef-regular",
    marginTop: 287,
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
    marginTop: 104,
    marginLeft: 38
  },
  loremIpsum5: {
    color: "rgba(41,14,202,1)",
    fontSize: 20,
    fontFamily: "alef-regular",
    marginTop: -230,
    marginLeft: 38
  },
  loremIpsum6: {
    color: "rgba(41,14,202,1)",
    fontSize: 20,
    fontFamily: "alef-regular",
    marginTop: 116,
    marginLeft: 38
  }
});

export default BudgetMain;
