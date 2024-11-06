import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const filmes = [
  {
    id: 1,
    title: 'Titanic',
    image: require('../../assets/titanic.png'),
    description: 'Um grande filme sobre amor e tragédia.'
  },
  {
    id: 2,
    title: 'Avatar',
    image: require('../../assets/avatar.png'),
    description: 'Um épico filme de ficção científica.'
  },
  {
    id: 3,
    title: 'Titanic Reloaded',
    image: require('../../assets/titanic.png'),
    description: 'Uma nova perspectiva sobre a história do Titanic.'
  },
  {
    id: 4,
    title: 'Avatar 2: O Caminho da Água',
    image: require('../../assets/avatar.png'),
    description: 'Explorando os oceanos de Pandora.'
  }
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Selecione Filmes para Adicionar à sua Lista</Text>
      <ScrollView>
        {filmes.map(filme => (
          <View key={filme.id} style={styles.movieCard}>
            <Image source={filme.image} style={styles.movieImage} />
            <View style={styles.movieInfo}>
              <Text style={styles.movieTitle}>{filme.title}</Text>
              <Text style={styles.movieDescription}>{filme.description}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Adicionar à Lista</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#003366',
  },
  movieCard: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  movieImage: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  movieInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
  },
  movieDescription: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#40A1FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
