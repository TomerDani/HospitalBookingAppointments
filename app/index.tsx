import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button 
        title="Go to Login" onPress={() => router.push("/pages/login")}
        color={'red'}
        />
    </View>
  );
}
