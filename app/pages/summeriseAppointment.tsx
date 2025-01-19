import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { useSearchParams } from 'expo-router/build/hooks';
import { useRouter } from "expo-router";

export default function SummeriseAppointment(){

    const searchParams = useSearchParams();
    const router = useRouter();

    const appointmentDetails = {
        type: searchParams.get("type"),
        professor: searchParams.get("professor"),
        description: searchParams.get("description"),
        price: searchParams.get("price"),
        duration: searchParams.get("duration"),
        location: searchParams.get("location"),
        date: searchParams.get("date"),
        time: searchParams.get("time"),
    };

    const onAnotherAppointmentPress = () => {
        router.push("/pages/selectAppointment")
    }
    const onReturnHomePress= () => {
        router.push("../index")
    }

    return(
        <View style={styles.container}>
               
            <Text style={styles.header}>Appointment sceduled!</Text>
            <View style={styles.detailsBox}> 
                <Text style={styles.detailsData}>Treatment type: {appointmentDetails.type}</Text>
                <Text style={styles.detailsData}>professor name: {appointmentDetails.professor}</Text>
                <Text style={styles.detailsData}>Treatmeat duration: {appointmentDetails.duration}</Text>
                <Text style={styles.detailsData}>Location: {appointmentDetails.location}</Text>
                <Text style={styles.detailsData}>At: {appointmentDetails.date}, {appointmentDetails.time}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={onAnotherAppointmentPress}>
                <Text style={styles.confirmButtonText}>Appoint to another treatment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onReturnHomePress}>
                <Text style={styles.confirmButtonText}>Return home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 16, 
    },
    detailsBox: {
        width: "80%",
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    detailsData: {
        fontSize: 18,
    },
    button: {
        backgroundColor: "#5a7ca3",
        padding: 12,
        borderRadius: 8,
        width: "80%",
        alignItems: "center",
        marginBottom: 10,
    },
    confirmButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
})