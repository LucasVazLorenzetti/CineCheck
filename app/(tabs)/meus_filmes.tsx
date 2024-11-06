import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MeusFilmes() {
  const navigation = useNavigation();

  const filmes = [
    {
      id: 1,
      title: 'TITANIC',
      image: require('../../assets/titanic.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2, 
      title: 'AVATAR',
      image: require('../../assets/avatar.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      title: 'AVATAR Reloaded',
      image: require('../../assets/avatar.png'), 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 4,
      title: 'AVATAR 2: O Caminho da Água',
      image: require('../../assets/avatar.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  const handleCadastrarFilme = () => {
    navigation.navigate('cadastrar_filme' as never);
  };

  const handleFilmeAssistido = (titulo: string) => {
    Alert.alert('Filme Assistido', `Você marcou "${titulo}" como assistido.`);
    // Implement additional logic here
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      
      <Text style={styles.title}>Meus Filmes</Text>
      
      <TouchableOpacity style={styles.addButton} onPress={handleCadastrarFilme}>
        <Text style={styles.addButtonText}>Cadastrar um Novo Filme</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        {filmes.map(filme => (
          <View key={filme.id} style={styles.movieCard}>
            <Image source={filme.image} style={styles.movieImage} />
            <View style={styles.movieInfo}>
              <Text style={styles.movieTitle}>{filme.title}</Text>
              <Text style={styles.movieDescription} numberOfLines={3}>
                {filme.description}
              </Text>
              <TouchableOpacity 
                style={styles.watchButton} 
                onPress={() => handleFilmeAssistido(filme.title)}
              >
                <Text style={styles.watchButtonText}>Filme Assistido</Text>
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
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#003366',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#003366',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
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
  watchButton: {
    backgroundColor: '#003366',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  watchButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});
