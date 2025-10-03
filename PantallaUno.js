import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://kcgsxcijychjwwdhappz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZ3N4Y2lqeWNoand3ZGhhcHB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2NDEwMzIsImV4cCI6MjA3NDIxNzAzMn0.B3Yh5rL_-wesCvwPqCE-HUpJVK4To-husXk1lgP4DX8';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function PantallaUno({ navigation }) {
  const usuarioPredefinido = 'celgua3'; 
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('Buscando usuario predefinido...');

  useEffect(() => {
    let intervalId;

    const buscarUsuario = async () => {
     
      try {
        const { data, error } = await supabase
          .from('Login') 
          .select('usuario, contraseña, nombre, apellido')
          .eq('usuario', usuarioPredefinido)
          .single();
        
        if (data) {
          
          setMessage('Usuario encontrado. Redirigiendo...');
          clearInterval(intervalId); 
          setLoading(false);
         
          navigation.replace('PantallaDos', { user: data });
          
        } else if (error && error.code !== 'PGRST116') {
          
          console.error('Error de Supabase (no es "no encontrado"):', error.message);
          setMessage('Error de conexión. Reintentando la búsqueda...');
         
        } else {
         
          setMessage(`Usuario '${usuarioPredefinido}' no encontrado.`);
          
        }

      } catch (err) {
        console.error('Error buscando usuario (catch):', err);
        setMessage('Error crítico de red. Reintentando la búsqueda...');
      }
    };

   
    buscarUsuario(); 
    
    
    intervalId = setInterval(buscarUsuario, 500); 

    
    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  if (!loading) {
    
    return null; 
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#4F46E5" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  text: {
    marginTop: 15,
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
