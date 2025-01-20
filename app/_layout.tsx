import { Stack } from "expo-router";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ContextProvider, useAppContext } from "./context/contextProvider" 
import { useRouter } from "expo-router";

const AppLayout = () => {
  const router = useRouter();
  const { headerText } = useAppContext();

  const routeToHome = () => {
    router.push("/");
  }

  return (
      <Stack
        screenOptions={{
        headerShown: true,
        header: () => (
          <View style={styles.headerContainer}>
            <Text style={styles.textStyle}>Heba - {headerText}</Text>
            <TouchableOpacity onPress={routeToHome}>
              <Image
                source={require("../assets/images/HebaIcon.png")}
                style={styles.imageStyle}
              />
            </TouchableOpacity>   
          </View>
        )}}>
      </Stack>
  );
}

const RootLayout = () => (
  <ContextProvider>
    <AppLayout />
  </ContextProvider>
);

export default RootLayout;

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
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10
  },
  imageStyle: {
    width: 40, 
    height: 40, 
    marginRight: 10
  }
})
