import React, { useState } from 'react';
import { useAppContext } from "../context/contextProvider"
import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import { ServiceCard  } from '../components/serviceCard';
import { availableAppointments } from '../dataHolders/dataHolder';
import { useRouter } from "expo-router";

const Appointments = []


export default function SelectAppointment() {
    const { activeUser } = useAppContext()
    const router = useRouter();

    const serviceSelected = (service, professorName) => {
        const selectedProfessor = service.professors.find(
            (professor) => professor.name === professorName
        );
    
        router.push({
            pathname: "/pages/scheduleAppointment",
            params: {
              appointmentType: service.type,
              professor: selectedProfessor.name,
              description: service.description,
              price: service.price,
              duration: service.duration,
              location: service.location,
              schedule: JSON.stringify(selectedProfessor.schedule),
            },
          });
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={availableAppointments}
                keyExtractor={(item) => item.type}
                renderItem={({ item }) => <ServiceCard service={item} serviceSelected={serviceSelected} />}
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