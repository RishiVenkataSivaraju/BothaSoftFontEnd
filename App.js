import { StatusBar } from "expo-status-bar";
// import React, { useEffect } from 'react';
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios"
const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [fullName, setFullName] = useState("");

  const number = 32454566;
  let data = null
  const userdetails = async (number) => {
    const response = await axios.get(`http://localhost:8080/api/profile/mobile/${number}`);
    data = response.data
  }
  userdetails(number).then(() => {
    if (data=='') {
      console.log("User Does Not Exist!");
    } else {
      console.log(data);
    }
  })
  .catch(error => {
    console.log("Error in userdetails function:", error);
  });
  const handleSubmit = async () => {
    const data = {
      "username": username,
      "email": email,
      "password": password,
      "mobilephone": mobilePhone,
      "fullname": fullName
    }
    const response = await axios.post("http://localhost:8080/api/registration", data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerBox}>
        <StatusBar style="auto" />
        <Text style={styles.header}>Create your Account</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Mobile Phone"
          onChangeText={setMobilePhone}
          value={mobilePhone}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Full Name"
          onChangeText={setFullName}
          value={fullName}
        />
        <View style={styles.forgetPasswordContainer}>
          <Text style={styles.forgetPasswordText}>
            I am agree to the Terms of Service and Privacy Policy
          </Text>
        </View>
        <Button title="Create Account" onPress={handleSubmit} />
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Text>Already Registered? </Text>
          <Text style={{ color: "blue" }} onPress={() => navigateToLogin()}>
            Click here to Login
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7851A9",
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  innerBox: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 20,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    padding: 8,
  },
  loginText: {
    marginTop: 20,
    textAlign: "center",
  },
});

export default Registration;
