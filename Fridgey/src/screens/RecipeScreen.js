import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar
} from "react-native";
import styled from "styled-components";
import { SearchBar } from "react-native-elements";
import Card from "../components/Card/Card";
import Menu from "../components/Menu/Menu";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const API_KEY = "dedef814c2f44537b5c5c16d6c993941";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class RecipeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  };
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity
          }}
        >
          <TopBar>
            <TouchableOpacity onPress={this.props.openMenu}>
              <Ionicons name="ios-menu" size={40} />
            </TouchableOpacity>
          </TopBar>

          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <SearchBar> Search</SearchBar>
              <Subtitle>Based on what's in your inventory</Subtitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                {cards.map((card, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      this.props.navigation.push("RecipeFull");
                    }}
                  >
                    <Card title={card.title} image={card.image} />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}


/* const cards = async () => {
const req = `https://api.spoonacular.com/recipes/random?number=4&apiKey=${API_KEY}`;
const response = await fetch(req);
const data = await response.json();
console.log(data);
}; */

export default connect(mapStateToProps, mapDispatchToProps)(RecipeScreen);

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const TopBar = styled.View`
  margin-left: 20px;
  padding-top: 40px;
`;
const cards = [
  {
    title: "Apple pie",
    image: require("../../assets/background11.jpg")
  },
  {
    title: "Mac and Cheese",
    image: require("../../assets/background12.jpg")
  },
  {
    title: "Steak with veggies",
    image: require("../../assets/background13.jpg")
  },
  {
    title: "Beef stir fry",
    image: require("../../assets/background14.jpg")
  }
];


