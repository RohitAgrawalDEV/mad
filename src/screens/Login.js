import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import background from "../../assets/background1.jpg";
import logo from "../../assets/logo.png";
import { button1 } from "../common/button";
import {
  head1,
  head2,
  input,
  label,
  formgroup,
  link,
  link2,
} from "../common/formcss";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={background} />
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.s2}>
          <Text style={head1}>Login</Text>
          <Text style={head2}>Sign in to continue</Text>
          <View style={formgroup}>
            <Text style={label}>Email</Text>
            <TextInput style={input} placeholder="Enter Email" />
          </View>
          <View style={formgroup}>
            <Text style={label}>Password</Text>
            <TextInput style={input} placeholder="Enter Password" />
          </View>
          <View style={styles.fp}>
            <Text style={link}>Forgot Password</Text>
          </View>
          <Text style={button1}>Login</Text>
          <Text style={link2}>
            Don't have an account?&nbsp;
            <Text style={link} onPress={() => navigation.navigate("signup")}>
              >Create a new account
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  patternbg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  s1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
  },
  small1: {
    color: "#fff",
    fontSize: 17,
  },
  h1: {
    fontSize: 30,
    color: "#fff",
  },
  s2: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  formgroup: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginVertical: 10,
  },
  label: {
    fontSize: 17,
    color: "#000",
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "grey",
    borderRadius: 20,
    padding: 10,
  },
  fp: {
    display: "flex",
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  logo: {
    height: 200,
    resizeMode: "contain",
  },
});
