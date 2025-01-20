import React, { useEffect, useState } from 'react';
import { useAppContext } from "../context/contextProvider"
import {  View, StyleSheet, FlatList } from "react-native";
import { ServiceCard  } from '../components/serviceCard';
import { availableAppointments } from '../dataHolders/dataHolder';
import { useRouter } from "expo-router";


export default function SelectAppointment(){
    
    const { setHeaderText } = useAppContext()
    const router = useRouter();

    useEffect(() => {
        setHeaderText("Select appointment")
    }, []);

    const serviceSelected = (service, professorName) => {
        const selectedProfessor = service.professors.find(
            (professor) => professor.name === professorName
        );

        const selectedAppointment = {
            type: service.type,
            professor: selectedProfessor.name,
            description: service.description,
            price: service.price,
            duration: service.duration,
            location: service.location,
            schedule: JSON.stringify(selectedProfessor.schedule),
        }
    
        router.push({
            pathname: "/pages/scheduleAppointment",
            params: selectedAppointment
        });
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={availableAppointments}
                keyExtractor={(item) => item.type}
                renderItem={({ item }) => <ServiceCard service={item} serviceSelected={serviceSelected} />}
            />
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