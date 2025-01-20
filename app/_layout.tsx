import { Stack } from "expo-router";
import { View, Image, Text, StyleSheet } from "react-native";
import { ContextProvider } from "./context/contextProvider" 
import Login from "./pages/login";

export default function RootLayout() {
  return (
    <ContextProvider>
      <Stack
        screenOptions={{
        headerShown: true,
        header: () => (
          <View style={styles.headerContainer}>
            <Text style={styles.textStyle}>Heba</Text>
            <Image
              source={require("../assets/images/HebaIcon.png")}
              style={styles.imageStyle}
            />
          </View>
        )}}>
      </Stack>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "white",
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between", 
  },
  textStyle:{
    color: "#black",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10
  },
  imageStyle: {
    width: 40, 
    height: 40, 
    marginRight: 10
  }
})
