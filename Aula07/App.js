import React, { useState, useEffect, useCallback } from 'react';
import {SafeAreaView, SectionList, Text, View, StyleSheet, TextInput, Dimensions } from 'react-native';

const PRODUTOS = [
  {
    title: 'Eletrônicos',
    data: [
      { id: '1', nome: 'Notebook Gamer', preco: 'R$ 5500,00' },
      { id: '2', nome: 'Smartphone XYZ', preco: 'R$ 2500,00' },
      { id: '3', nome: 'Smart TV 50"', preco: 'R$ 2200,00' },
    ],
  },
  {
    title: 'Roupas',
    data: [
      { id: '4', nome: 'Camiseta Básica', preco: 'R$ 80,00' },
      { id: '5', nome: 'Calça Jeans Slim', preco: 'R$ 150,00' },
      { id: '6', nome: 'Jaqueta Corta-Vento', preco: 'R$ 200,00' },
    ],
  },
  {
    title: 'Alimentos',
    data: [
      { id: '7', nome: 'Café Gourmet', preco: 'R$ 35,00' },
      { id: '8', nome: 'Azeite Extra Virgem', preco: 'R$ 45,00' },
    ],
  },
];

const { width } = Dimensions.get('window');

export default function App() {
  
  const [busca, setBusca] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState(PRODUTOS);

  useEffect(() => {
    if (busca === '') {
      setDadosFiltrados(PRODUTOS);
      return;
    }

    const buscaLowerCase = busca.toLowerCase();

    const filtrados = PRODUTOS.map(section => {
      const dataFiltrada = section.data.filter(item =>
        item.nome.toLowerCase().includes(buscaLowerCase)
      );
      
      return {
        ...section,
        data: dataFiltrada,
      };
    })
    .filter(section => section.data.length > 0); 

    setDadosFiltrados(filtrados);

  }, [busca]);

  const renderItem = useCallback(({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemNome}>{item.nome}</Text>
      <Text style={styles.itemPreco}>{item.preco}</Text>
    </View>
  ), []);

  const renderSectionHeader = useCallback(({ section: { title } }) => (
    <Text style={styles.header}>{title}</Text>
  ), []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Filtrar por nome do produto..."
        value={busca}
        onChangeText={setBusca}
      />
      
      <SectionList
        sections={dadosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        initialNumToRender={10}
        windowSize={10}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto encontrado.</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
    width: width * 0.95,
    alignSelf: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemNome: {
    fontSize: 16,
  },
  itemPreco: {
    fontSize: 16,
    color: '#006400',
    fontWeight: '500',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: 'gray',
  }
});
