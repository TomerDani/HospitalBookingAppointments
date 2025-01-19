import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { useRouter } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ScheduleAppointment(){

    const router = useRouter();
    const searchParams = useSearchParams();

    const appointmentDetails = {
        type: searchParams.get("type"),
        professor: searchParams.get("professor"),
        description: searchParams.get("description"),
        price: searchParams.get("price"),
        duration: searchParams.get("duration"),
        location: searchParams.get("location"),
        schedule: JSON.parse(searchParams.get("schedule")),
    };

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    useEffect(() => {
        setDate(new Date());
        setTime(new Date());
    }, []);

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) setDate(selectedDate);
    };

    const handleTimeChange = (event, selectedTime) => {
        setShowTimePicker(false);
        if (selectedTime) setTime(selectedTime);
    };

    const onConfirm = () => {
        const appointment = {
            date: `${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${date.getFullYear()}`,
            time: `${time.getHours().toString().padStart(2, "0")}:${time
            .getMinutes()
            .toString()
            .padStart(2, "0")}`,
            type: searchParams.get("type"),
            professor: searchParams.get("professor"),
            description: searchParams.get("description"),
            price: searchParams.get("price"),
            duration: searchParams.get("duration"),
            location: searchParams.get("location"),
        };

        router.push({
            pathname: "/pages/summeriseAppointment",
            params: appointment
        });
    }


    return(
        <View style={styles.container}>
            <Text style={styles.header}>Schedule an appointment</Text>
            <Text style={styles.dataTitle}>Treatment type: {appointmentDetails.type}</Text>
            <Text style={styles.dataTitle}>Professor name: {appointmentDetails.professor}</Text>
                        
            <TouchableOpacity style={styles.displayDatetimeButton} onPress={() => {setShowDatePicker(true)}}>
            <Text style={styles.displayDatetimeButtonText}>
                Selected date: {`${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1)
                .toString()
                .padStart(2, "0")}-${date.getFullYear()}`}
            </Text>
            </TouchableOpacity>  

            <TouchableOpacity style={styles.displayDatetimeButton} onPress={() => {setShowTimePicker(true)}}>
            <Text style={styles.displayDatetimeButtonText}>
                Selected time: {`${time.getHours().toString().padStart(2, "0")}:${time
                .getMinutes()
                .toString()
                .padStart(2, "0")}`}
            </Text>
            </TouchableOpacity>

            {showDatePicker && <DateTimePicker
                value={date}
                mode="date"
                display="default"
                minimumDate={new Date()}
                onChange={handleDateChange}
            />}
            {showTimePicker && (
            <DateTimePicker
                value={time}
                mode="time"
                display="default"
                onChange={handleTimeChange}
                minimumDate={new Date()}
            />)}

            <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
                <Text style={styles.confirmButtonText}>Confirm</Text>
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
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16, 
    },
    dataTitle: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 12, 
    },
    displayDatetimeButton: {
        marginBottom: 7,
        padding: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        backgroundColor: "#789bc2",
        alignItems: "center",
        justifyContent: "center",
        width: "60%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 5, 
    },
    displayDatetimeButtonText: {
        color: "#fff", // Text color to contrast with button
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
    confirmButton: {
        backgroundColor: "#5a7ca3",
        padding: 12,
        borderRadius: 8,
        width: "60%",
        alignItems: "center",
        marginTop: 20,
    },
    confirmButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    }, 
})