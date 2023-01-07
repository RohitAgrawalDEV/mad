import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import background from "../../assets/background1.jpg";
import logo from "../../assets/logo.png";
import { button1 } from "../common/button";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={background} />
      {/* <Text style={styles.head}>Hello </Text> */}

      <View style={styles.container1}>
        <Image style={styles.logo} source={logo} />
        <Text style={button1} onPress={() => navigation.navigate("login")}>
          Login
        </Text>
        <Text style={button1} onPress={() => navigation.navigate("signup")}>
          Signup
        </Text>
        <Text style={button1} onPress={() => navigation.navigate("home")}>
          UPLOAD iMAGE
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  patternbg: {
    width: "100%",
    height: "100%",
    top: 0,
    position: "absolute",
    zIndex: -1,
  },
  head: {
    top: 50,
    fontSize: 30,
    color: "#fff",
  },
  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  logo: {
    height: "60%",
    resizeMode: "contain",
    marginBottom: 10,
  },
});
