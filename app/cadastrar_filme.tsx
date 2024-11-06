import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CadastrarFilme() {
  const navigation = useNavigation();

  const handleCadastrar = () => {
    // Implement your registration logic here
    Alert.alert('Filme Cadastrado', 'Seu filme foi cadastrado com sucesso!');
    navigation.navigate('(tabs)' as never);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      
      <Text style={styles.title}>Cadastrar Filme:</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do filme....."
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Data de lançamento (opcional)"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Gênero do filme"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Descrição/Observação (opcional)"
          placeholderTextColor="#999"
          multiline
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#003366',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f8f8f8',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#003366',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
