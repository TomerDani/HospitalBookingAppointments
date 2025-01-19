import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button } from "react-native";
import { useRouter } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ScheduleAppointment(params){

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
    
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const [startDate, endDate] = dateRange; 

    //for testing
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) setDate(selectedDate);
      };

      const handleTimeChange = (event, selectedTime) => {
        setShowTimePicker(false);
        if (selectedTime) setTime(selectedTime);
      };


    return(
        <View style={styles.container}>
            <Text style={styles.header}>Schedule an appointment</Text>
            <Text style={styles.dataTitle}>Treatment type: {appointmentDetails.appointmentType}</Text>
            <Text style={styles.dataTitle}>Professor name: {appointmentDetails.professor}</Text>
            
            <Text style={styles.displayDatetimeText}>
                Selected date: {`${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1)
                .toString()
                .padStart(2, "0")}-${date.getFullYear()}`}
            </Text>
                        
            <TouchableOpacity style={styles.button} onPress={() => {setShowDatePicker(true)}}>
                <Text style={styles.buttonText}>Pick a Date</Text>
            </TouchableOpacity>
                <Text style={styles.displayDatetimeText}>
                Selected time: {`${time.getHours().toString().padStart(2, "0")}:${time
                .getMinutes()
                .toString()
                .padStart(2, "0")}`}
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => {setShowTimePicker(true)}}>
                <Text style={styles.buttonText}>Pick a Time</Text>
            </TouchableOpacity>

            {showDatePicker && <DateTimePicker
                value={date}
                mode="date"
                display="default"
                minimumDate={new Date(2025, 0, 1)}
                maximumDate={new Date(2025, 11, 11)}
                onChange={handleDateChange}
            />}
            {showTimePicker && (
            <DateTimePicker
                value={time}
                mode="time"
                display="default"
                onChange={handleTimeChange}
            />)}

            {/* <Text>HIIIIIIIIII</Text>
            <Text>{appointmentDetails.appointmentType}</Text>
            <Text>{appointmentDetails.professor}</Text>
            <Text>{appointmentDetails.description}</Text>
            <Text>{appointmentDetails.price}</Text>
            <Text>{appointmentDetails.duration}</Text>
            <Text>{appointmentDetails.location}</Text>
            <Text>{appointmentDetails.schedule.weekdays}</Text> */}
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
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16, 
    },
    dataTitle: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 12, 
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
        fontWeight: "bold",
      },
      displayDatetimeText: {
        fontSize: 16,
        marginBottom: 0,
        color: "#333",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        backgroundColor: "#fff",
        textAlign: "center",
        width: "60%",
      },
      button: {
        backgroundColor: "#5a7ca3",
        padding: 12,
        borderRadius: 8,
        marginVertical: 8,
        width: "60%",
        alignItems: "center",
      },
      buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
      },  
})