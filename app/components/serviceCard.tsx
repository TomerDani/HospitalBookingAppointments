import React, { useState } from "react"
import { Text, View, Button, StyleSheet, FlatList, TouchableOpacity } from "react-native";


export const ServiceCard  = ({service, serviceSelected}) => {
    const renderProfessors = ({ item }) => {
        return (
          <View style={styles.professorContainer}>
            <Text style={styles.professorName}>Professor: {item.name}</Text>
            <Text style={styles.schedule}>
              Available on: {item.schedule.weekdays.join(", ")}
            </Text>
            <Text style={styles.schedule}>
              Time Range: {item.schedule.timeRange.start} -{" "}
              {item.schedule.timeRange.end}
            </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => serviceSelected(service, item.name)}>
          <Text style={styles.buttonText}>Book Appointment</Text>
        </TouchableOpacity>
          </View>
        );
      };
    
      return (
        <View style={styles.card}>
          <Text style={styles.title}>{service.type}</Text>
          <Text style={styles.description}>{service.description}</Text>
          <Text style={styles.details}>Price: ${service.price}</Text>
          <Text style={styles.details}>Duration: {service.duration}</Text>
          <Text style={styles.details}>Location: {service.location}</Text>
          <FlatList
            data={service.professors}
            keyExtractor={(item) => item.name}
            renderItem={renderProfessors}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: "#f8f8f8",
      borderRadius: 10,
      padding: 16,
      marginVertical: 10,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      color: "#666",
      marginBottom: 8,
    },
    details: {
      fontSize: 14,
      marginBottom: 4,
    },
    professorContainer: {
      marginTop: 12,
      padding: 8,
      backgroundColor: "#e8e8e8",
      borderRadius: 8,
    },
    professorName: {
      fontSize: 16,
      fontWeight: "bold",
    },
    schedule: {
      fontSize: 14,
      color: "#444",
    },
    button: {
        backgroundColor: "#3c8385",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10
      },
      buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
  });
  
  export default ServiceCard;