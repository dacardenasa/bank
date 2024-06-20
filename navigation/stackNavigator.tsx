import { createStackNavigator } from "@react-navigation/stack";

import { FinancialProduct } from "@/interfaces";
import { FinancialProductDetail, FinancialProductForm, Home } from "@/screens";

import { CustomHeader } from "@/components";
import { StyleSheet } from "react-native";

export type StackNavigatorParams = {
  Home: undefined;
  FinancialProductForm: {
    payload?: FinancialProduct;
    isEditMode: boolean;
  };
  FinancialProductDetail: {
    payload: FinancialProduct;
  };
};

const Stack = createStackNavigator<StackNavigatorParams>();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleAlign: "center",
        headerTitle: CustomHeader,
        headerLeft: () => null
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="FinancialProductDetail"
        component={FinancialProductDetail}
      />
      <Stack.Screen
        name="FinancialProductForm"
        component={FinancialProductForm}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#F5F6F9"
  }
});
