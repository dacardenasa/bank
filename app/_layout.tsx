import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "@/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Toast from "react-native-toast-message";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <QueryClientProvider client={queryClient}>
        <StackNavigator />
        <Toast />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
