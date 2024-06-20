import React, { ReactElement, ReactNode } from "react";
import { View } from "react-native";
import {
  render,
  RenderAPI,
  RenderOptions
} from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackNavigatorParams } from "@/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type AllStacks = StackNavigatorParams;
type AllStackParams = StackNavigatorParams[keyof StackNavigatorParams];

interface MockedNavigatorProps<P> {
  ComponentWithProps?: (...params: any) => JSX.Element;
  component: (...params: any) => JSX.Element;
  params?: P | Record<string, never>;
  nextRouteName?: keyof AllStacks;
}

// https://testing-library.com/docs/react-native-testing-library/setup
export const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const customRender = (
  ui: React.ReactElement<React.ComponentProps<any>, any>,
  options?: RenderOptions
): RenderAPI =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options
  });

const Stack = createStackNavigator<
  AllStacks & {
    MockedScreen: AllStackParams;
  }
>();

const MockViewComponent = React.memo(() => <View>Mock view</View>);

// https://callstack.github.io/react-native-testing-library/docs/react-navigation
const MockedNavigator = <P extends AllStackParams>({
  ComponentWithProps,
  component,
  params = {},
  nextRouteName
}: MockedNavigatorProps<P>): ReactElement<
  MockedNavigatorProps<P>,
  typeof NavigationContainer
> => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false
        }}
      >
        {component && (
          <Stack.Screen
            name="MockedScreen"
            component={component}
            initialParams={params}
          />
        )}
        {ComponentWithProps && (
          <Stack.Screen name="MockedScreen">
            {(props: any) => <ComponentWithProps {...props} {...params} />}
          </Stack.Screen>
        )}
        {nextRouteName && (
          <Stack.Screen name={nextRouteName} component={MockViewComponent} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render, MockedNavigator };
