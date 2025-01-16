import React, { useState } from 'react';
import { useAppContext } from "../context/contextProvider"
import { Text, View, Button, StyleSheet } from "react-native";

export default function SelectAppointment() {
    const { activeUser } = useAppContext()

    return(
        <View style={styles.container}>
            <Text>Welcome to the order page {activeUser ? activeUser.Name : "NoUserActive"}!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
});