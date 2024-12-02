import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tentang Saya</Text>
      <Text style={styles.text}>Saya adalah seorang mahasiswi yang memiliki minat di bidang teknologi dan kreatif.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
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

export default AboutScreen;
