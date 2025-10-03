import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PantallaTres({ route }) {
  const { nombre, apellido } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>¡Inicio de Sesión Exitoso!</Text>
      <Text style={styles.name}>
        Bienvenido/a: 
        <Text style={styles.fullName}> {nombre} {apellido}</Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#ECFDF5', 
  },
  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#065F46',
    marginBottom: 20,
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    color: '#10B981',
    textAlign: 'center',
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#047857',
  }
});
