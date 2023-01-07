import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
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
  input1,
} from "../common/formcss";

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={background} />

      <View style={styles.container1}>
        <View style={styles.s1}></View>

        <ScrollView style={styles.s2}>
          <Text style={head1}>Create a New Account</Text>
          <Text style={link2}>
            Already Registered?&nbsp;
            <Text style={link} onPress={() => navigation.navigate("login")}>
              Login here
            </Text>
          </Text>
          <View style={formgroup}>
            <Text style={label}>Name</Text>
            <TextInput style={input} placeholder="Enter Name" />
          </View>
          <View style={formgroup}>
            <Text style={label}>Email</Text>
            <TextInput style={input} placeholder="Enter Email" />
          </View>
          <View style={formgroup}>
            <Text style={label}>Mobile No.</Text>
            <TextInput style={input} placeholder="Enter Name" />
          </View>
          <View style={formgroup}>
            <Text style={label}>Password</Text>
            <TextInput style={input} placeholder="Enter Password" />
          </View>
          <View style={formgroup}>
            <Text style={label}>Confirm Password</Text>
            <TextInput style={input} placeholder="Confirm Password" />
          </View>
          <View style={formgroup}>
            <Text style={label}>Address</Text>
            <TextInput style={input1} placeholder="Enter Address" />
          </View>

          <Text style={button1}>Sign Up</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;

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
    height: "5%",
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
    height: "90%",
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
    backgroundColor: "#FFB0CC",
    borderRadius: 20,
    padding: 10,
  },
  fp: {
    display: "flex",
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
