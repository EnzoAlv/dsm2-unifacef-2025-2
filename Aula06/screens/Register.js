import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handlePhoneChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    if (numericText.length <= 11) {
      setPhone(numericText);
    }
  };

  const handleRegister = () => {
    const newErrors = {};
    let isValid = true;

    if (!fullName.trim() || fullName.split(' ').length < 2) {
      newErrors.fullName = 'O nome completo é obrigatório.';
      isValid = false;
    }

    if (!email.trim() || !isValidEmail(email)) {
      newErrors.email = 'Insira um formato de e-mail válido.';
      isValid = false;
    }

    if (password.length < 6) {
      newErrors.password = 'A senha deve ter no mínimo 6 caracteres.';
      isValid = false;
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = 'A senha e a confirmação devem ser iguais.';
      isValid = false;
    }

    if (phone.length < 10) {
      newErrors.phone = 'O telefone deve ter DDD + número (mínimo 10 dígitos).';
      isValid = false;
    }

    setErrors(newErrors);
    if (isValid) {
      const userData = {
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone, 
      };
      navigation.navigate('Data', { data: userData });
    }
  };

  const ErrorMessage = ({ message }) => (
    message ? <Text style={styles.errorText}>{message}</Text> : null
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 20}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Criar Conta</Text>
        <TextInput
          style={[styles.input, errors.fullName && styles.inputError]}
          placeholder="Nome Completo"
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
        />
        <ErrorMessage message={errors.fullName} />

        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <ErrorMessage message={errors.email} />
        <TextInput
          style={[styles.input, errors.password && styles.inputError]}
          placeholder="Senha (mín. 6 caracteres)"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <ErrorMessage message={errors.password} />
        <TextInput
          style={[styles.input, errors.confirmPassword && styles.inputError]}
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
        <ErrorMessage message={errors.confirmPassword} />
        <TextInput
          style={[styles.input, errors.phone && styles.inputError]}
          placeholder="Telefone (DDD + Número)"
          value={phone}
          onChangeText={handlePhoneChange} 
          keyboardType="numeric" 
          maxLength={11}
        />
        <ErrorMessage message={errors.phone} />
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#1a4f78',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 5,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  inputError: {
    borderColor: '#dc3545',
  },
  errorText: {
    color: '#dc3545', 
    marginBottom: 15,
    fontSize: 12,
    paddingLeft: 5,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;