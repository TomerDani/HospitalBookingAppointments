import React, { useState } from 'react';
import { useAppContext } from "../context/contextProvider"
import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import { ServiceCard  } from '../components/serviceCard';
import { availableAppointments } from '../dataHolders/dataHolder';

const Appointments = []

export default function SelectAppointment() {
    const { activeUser } = useAppContext()

    return(
        <View style={styles.container}>
            <FlatList
            data={availableAppointments}
            keyExtractor={(item) => item.type}
            renderItem={({ item }) => <ServiceCard service={item} />}
      />
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