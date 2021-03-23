import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QMK1 from './src/QMK1';
import Login from './src/Login';
import QMK2 from './src/QMK2';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => {
        navigation.navigate("Login")
      }}>
      <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="QMK1" component={QMK1} />
        <Stack.Screen name="QMK2" component={QMK2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;