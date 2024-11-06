import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('login' as never);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.profileTitle}>Meu Perfil:</Text>

      <Image
        source={require('../../assets/profile.png')} 
        style={styles.profileImage}
      />

      <Text style={styles.name}>Lucas Vaz Lorenzetti</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Gênero Favorito: Terror</Text>
        <Text style={styles.infoText}>Lista de filmes pendentes: 0</Text>
        <Text style={styles.infoText}>Total de filmes assistidos: 100</Text>
        <Text style={styles.infoText}>Gênero mais assistido: Romance</Text>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>Sobre o Usuário:</Text>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua.
        </Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  profileTitle: {
    fontSize: 24,
    color: '#40A1FF',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  aboutContainer: {
    width: '100%',
    paddingHorizontal: 30,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  logoutButton: {
    backgroundColor: '#003366',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
