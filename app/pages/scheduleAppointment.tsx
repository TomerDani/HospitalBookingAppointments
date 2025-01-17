import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useRouter } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';

export default function ScheduleAppointment(params){
    //const { query } = useRouter();
    console.log("param logs");
    console.log(params);
    console.log("end param logs");

    const searchParams = useSearchParams();

    const appointmentDetails = {
        appointmentType: searchParams.get("appointmentType"),
        professor: searchParams.get("professor"),
        description: searchParams.get("description"),
        price: searchParams.get("price"),
        duration: searchParams.get("duration"),
        location: searchParams.get("location"),
        schedule: JSON.parse(searchParams.get("schedule")),
      };

    return(
        <View>
            <Text>HIIIIIIIIII</Text>
            <Text>{appointmentDetails.appointmentType}</Text>
            <Text>{appointmentDetails.professor}</Text>
            <Text>{appointmentDetails.description}</Text>
            <Text>{appointmentDetails.price}</Text>
            <Text>{appointmentDetails.duration}</Text>
            <Text>{appointmentDetails.location}</Text>
            <Text>{appointmentDetails.schedule.weekdays}</Text>
        </View>
    )
}

const styles = StyleSheet.create({


})