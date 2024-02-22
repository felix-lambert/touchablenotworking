import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, marginTop: 15, color: "#fff" }}>
        New Architecture: <Text style={{ fontWeight: "bold" }}>Enabled</Text>
      </Text>

      <TouchableOpacity
        onPressOut={() => {
          console.log("activates here");
        }}
        onPress={() => {
          console.log("does not work here");
          navigation.navigate("Details");
        }}
      >
        <Text>Go to details</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

function DetailScreen() {
  const [increment, setIncrement] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{increment}</Text>
      <TouchableOpacity
        onPress={() => {
          setIncrement(increment + 1);
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
