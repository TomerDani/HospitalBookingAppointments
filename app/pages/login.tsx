import { View, Text, TouchableOpacity, StyleSheet,TextInput } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { useAppContext } from "../context/contextProvider"
import { users } from "../dataHolders/dataHolder";

export default function Login(){
  const router = useRouter();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  const { setActiveUser} = useAppContext()

  const tryLogin = () => {
    
    const user = users.find(
      (user) => user.userName === username && user.password === password
    );
    
    if(user){
      setActiveUser(user)
      router.push("/pages/selectAppointment")
      setFeedbackText("")
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
      secureTextEntry={true}
      />      
      <TouchableOpacity
      style={styles.button}
        onPress={tryLogin}>
      <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text
      style = {styles.feedbackText}>
        {feedbackText}
      </Text>
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
    width: 200,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    marginBottom:10,
    fontSize: 20
  },
  button: {
    backgroundColor: "#5a7ca3",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  feedbackText: {
    color: 'red',
    fontSize: 20
  },
});
