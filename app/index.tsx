import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { useAppContext } from "./context/contextProvider";
import { useEffect } from "react";

export default function App() {
  const router = useRouter();
  const { activeUser, setHeaderText} = useAppContext()

  useEffect(() => {
    setHeaderText("Main screen")
  },[]);

  const onLoginress = () => {    
    router.push("/pages/login");
  }
  const onSelectAppointmentPress = () => {
    router.push("/pages/selectAppointment");
  }

  return (
    <View style={styles.container}>
       <View style={styles.imageContainer}>
        <Image source={require("../assets/images/HebaIcon.png")} style={styles.image} />
      </View>
      <Text style={styles.header}>Welcome to Heba!</Text>
      {activeUser == null ? 
      (<TouchableOpacity style={styles.button} onPress={onLoginress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>)
      :
      (
        <View style={styles.buttonContainer}>
          <Text style={styles.header}>Hello {activeUser.name}!</Text>
            <TouchableOpacity style={styles.button} onPress={onSelectAppointmentPress}>
          <Text style={styles.buttonText}>Select appointment</Text>
        </TouchableOpacity>
      </View>)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16, 
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#3c8385",
    padding: 12,
    borderRadius: 8,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    position: "relative",
    bottom: 35,
  },
})
