import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const DataScreen = ({ route, navigation }) => {
  const { data } = route.params || {}; 

  if (!data) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Nenhum dado de cadastro encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}> Cadastro Concluído!</Text>
      <View style={styles.dataCard}>
        
        <Text style={styles.dataLabel}>Nome Completo:</Text>
        <Text style={styles.dataValue}>{data.fullName}</Text>
        
        <Text style={styles.dataLabel}>E-mail:</Text>
        <Text style={styles.dataValue}>{data.email}</Text>
        
        <Text style={styles.dataLabel}>Telefone:</Text>
        <Text style={styles.dataValue}>{
            data.phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
        }</Text>
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Login')} 
      >
        <Text style={styles.backButtonText}>Voltar para o Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    minHeight: '100%',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 30,
  },
  dataCard: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  dataLabel: {
    fontSize: 14,
    color: '#343a40',
    marginTop: 15,
    fontWeight: 'bold',
  },
  dataValue: {
    fontSize: 18,
    color: '#007bff',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  infoText: {
    marginTop: 30,
    fontSize: 12,
    textAlign: 'center',
    color: '#6c757d',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },

  backButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DataScreen;