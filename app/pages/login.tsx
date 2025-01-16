import { View, Text, Button, StyleSheet,TextInput } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { useAppContext } from "../context/contextProvider"

export default function Login() {
  const router = useRouter();/////////////////////
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  const { setActiveUser} = useAppContext()

  const users = [
    {
      "Name": "Mr. Admin",
      "userName": "Admin",
      "password": "123",
      "userType": "Admin"
    },
    {
      "Name": "Jane Smith",
      "userName": "janesmith",
      "password": "securepassword456",
      "userType": "Worker"
    },
    {
      "Name": "Tomer",
      "userName": "TomerD",
      "password": "tomertomer",
      "userType": "User"
    }
  ];

  const tryLogin = () => {
    
    const user = users.find(
      (user) => user.userName === username && user.password === password
    );
    
    if(user){
      setFeedbackText("Welcome!")
      setActiveUser(user)
      router.push("/pages/selectAppointment")
    }
    else{
      setFeedbackText("Username or passowrd are incorrect.")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please log in</Text>
      <TextInput 
      style={styles.textInput}
      value={username}
      onChangeText={setUsername}
      />
      <TextInput 
      style={styles.textInput}
      value={password}
      onChangeText={setPassword}
      />
      <Text>{feedbackText}</Text>
      
      <Button title="Login" onPress={tryLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInput:
  {
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'black',
    width: 200,  // Adjustable width
    height: 40,  // Adjustable height
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3, // Optional: Adds rounded corners
    marginBottom:10
  }
});