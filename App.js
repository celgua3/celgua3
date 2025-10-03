import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa todas las pantallas
import PantallaUno from './PantallaUno';
import PantallaDos from './PantallaDos';
import PantallaTres from './PantallaTres';

// Crea el Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PantallaUno" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PantallaUno" component={PantallaUno} />
        <Stack.Screen name="PantallaDos" component={PantallaDos} />
        <Stack.Screen name="PantallaTres" component={PantallaTres} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
