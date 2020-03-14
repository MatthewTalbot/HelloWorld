import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
    StyleSheet,
    Text, 
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export defauly class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
            <Text style={style.welcome}>Login To My App</Text>
            <TextInput
            styles{styles.input}
            placeholder="UserName"
            />
            <TextInput
            styles{styles.input}
            placeholder="Password"
            secureTextEntry
            />
            <View{styles.btnContainer}>
                <TouchableOpacity
                style{styles.userBtn}
                onPress{() => alert("Login Works")}
                >
                    <text{styles.btnTxt}>
                        Login
                    </text>
                </TouchableOpacity>
                <TouchableOpacity
                style{styles.userBtn}
                onPress{() => alert("Login Works")}
                >
                    <text{styles.btnTxt}>
                        SignUp
                    </text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "______"
    },

    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: "#ffff",
        fontFamily: "DancingScipt-Bold"
    },

    input: {
        width: "90%",
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10
    },

    userBtn: {
        backgroundColor: "FFD700",
        padding: 15,
        width: "45%"
    },

    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%"
    },

    btnTxt: {
        fontSize: 16,
        textAlign: "center",
    }
});