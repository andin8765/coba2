import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HobbyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hobi Saya</Text>
      <Text style={styles.text}>1. Menyanyi</Text>
      <Text style={styles.text}>2. Membaca Buku</Text>
      <Text style={styles.text}>3. Menulis</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff69b4',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
});

export default HobbyScreen;
