import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login';
import Cadastrar from './cadastrar';
import CadastrarFilme from './cadastrar_filme';
import TabLayout from './(tabs)/_layout';

const Stack = createNativeStackNavigator();

export default function AppLayout() {
  return (
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen 
          name="login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="cadastrar" 
          component={Cadastrar} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="cadastrar_filme" 
          component={CadastrarFilme} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="(tabs)" 
          component={TabLayout} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
  );
}
