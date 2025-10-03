import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function PantallaDos({ route, navigation }) {
  const { user } = route.params; 
  const [passwordInput, setPasswordInput] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleLogin = () => {
    
    const dbPassword = user.contraseña; 

    if (passwordInput === dbPassword) {
     
      setErrorText('');
      
      navigation.replace('PantallaTres', { 
        nombre: user.nombre, 
        apellido: user.apellido 
      });
    } else {
      setErrorText('Contraseña incorrecta. Inténtalo de nuevo.');
      setPasswordInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, {user.usuario}</Text>
      <Text style={styles.subtitle}>Introduce tu contraseña:</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true} 
        value={passwordInput}
        onChangeText={setPasswordInput}
        autoCapitalize="none"
      />

      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}

      <View style={styles.buttonContainer}>
        <Button 
          title="Iniciar Sesión" 
          onPress={handleLogin} 
          color="#4F46E5"
          disabled={passwordInput.length === 0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1F2937',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#6B7280',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#F9FAFB',
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  error: {
    color: '#EF4444',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 14,
  }
});
