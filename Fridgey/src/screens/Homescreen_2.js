import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import * as firebase from "firebase";

export default class HomeScreen_2 extends React.Component {

    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const {email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut;
    };

    render() {
        return (
            <View style={StyleSheet.container}>
                <Text>Hi {this.state.email}!</Text>

                <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "Center",
        alignItems: "center",
    }
});