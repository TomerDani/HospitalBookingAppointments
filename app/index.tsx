import { Text, View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Welcome to Heba!.</Text>
      <Button 
        title="Go to Login" onPress={() => router.push("/pages/login")}
        color={'red'}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
