import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Register from './screens/Register'; 
import Data from './screens/Data';       

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login" component={Login} options={{ title: 'Acesso à Conta' }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'Sucesso Login' }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Novo Cadastro' }} />
        <Stack.Screen name="Data" component={Data} options={{ title: 'Dados Cadastrados' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}