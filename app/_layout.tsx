import { Stack } from "expo-router";
import { ContextProvider } from "./context/contextProvider" 

export default function RootLayout() {
  return (
    <ContextProvider>
      <Stack
        screenOptions={{
        headerShown: false, // Hides the header for all screens
        }}>\
        <Stack.Screen name="login" />
      </Stack>
    </ContextProvider>
  );
}