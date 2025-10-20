import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = ({ route }) => {
  const { email } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Login bem-sucedido!</Text>
      <Text style={styles.message}>
        Seja bem-vindo(a), <Text style={styles.emailText}>{email || 'Usuário'}</Text>!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f7', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1a4f78', 
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  emailText: {
    fontWeight: 'bold',
    color: '#007bff', 
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  }
});

export default WelcomeScreen;