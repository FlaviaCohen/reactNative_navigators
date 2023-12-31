import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

//const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const App = () => {
  const { Navigator, Screen } = BottomTab; /* Drawer */

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            /* drawerActiveBackgroundColor: "#f0e1ff",
            drawerActiveTintColor: "#3c0a6b",
            drawerStyle: { backgroundColor: "#ccc" }, */
            headerStyle: {
              backgroundColor: "#3c0a6b",
            },
            headerTintColor: "white",
            tabBarActiveTintColor: "#3c0a6b",
          }}
        >
          <Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
              /*  headerStyle: { backgroundColor: "#3c0a6b" },
              headerTintColor: "white",
              drawerLabel: "Welcome Screen",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ), */
            }}
          />
          <Screen
            name="User"
            component={UserScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
              /*  drawerIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ), */
            }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
