import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const [showFriends, setShowFriends] = useState(false);

  const friends = [
    { id: '1318', nama: 'FADLLIKAL AZHIIM S', kelas: 'S1-SI-A-P-SM5-20241' },
    { id: '1534', nama: 'ZAKIYA AULIAA', kelas: 'S1-SI-B-P-SM5-20241' },
    { id: '1927', nama: 'Mukhamad Rizki Saputra', kelas: 'S1-SI-A-P-SM5-20241' },
    { id: '1506', nama: 'SEKAR INDRYANI PUTERI', kelas: 'S1-SI-B-P-SM5-20241' },
    { id: '1533', nama: 'IRHAM FADILLAH', kelas: 'S1-SI-B-P-SM5-20241' },
    { id: '1536', nama: 'RIFKI FAUZI', kelas: 'S1-SI-B-P-SM5-20241' },
    { id: '1462', nama: 'TONI ILHAM HERMAWAN', kelas: 'S1-SI-B-P-SM5-20241' },
    { id: '1338', nama: 'M FIRMANSYAH', kelas: 'S1-SI-A-P-SM5-20241' },
    { id: '1437', nama: 'NOVIAN FADHILAH', kelas: 'S1-SI-B-P-SM5-20241' },
    { id: '1323', nama: 'RIFDAH NAASYIAH', kelas: 'S1-SI-A-P-SM5-20241' },
  ];

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <Image
        source={require('../../assets/images/aku.jpeg')}
        style={styles.profileImage}
      />
      <Text style={styles.header}>Informasi Data Diri</Text>
      <Text style={styles.text}>Nama: Triandini Dimasputri</Text>
      <Text style={styles.text}>NIM: 222505070</Text>
      <Text style={styles.text}>Alamat: Dusun Dustan</Text>

      {/* Button to toggle friends list */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowFriends(!showFriends)}
      >
        <Text style={styles.buttonText}>
          {showFriends ? 'Sembunyikan Rekan Saya' : 'Lihat Rekan Saya'}
        </Text>
      </TouchableOpacity>

      {/* Friends List */}
      {showFriends && (
        <View style={styles.friendsList}>
          <Text style={styles.listHeader}>Berikut adalah 10 orang kawan saya di Prodi SI secara random:</Text>
          <FlatList
            data={friends}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.friendItem}>
                <Text style={styles.friendName}>{item.nama}</Text>
                <Text style={styles.friendClass}>{item.kelas}</Text>
              </View>
            )}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#ff69b4',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
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
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#ff69b4',
    fontWeight: 'bold',
  },
  friendsList: {
    marginTop: 20,
    width: '100%',
  },
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  friendItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  friendName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff69b4',
  },
  friendClass: {
    fontSize: 14,
    color: '#555',
  },
});

export default ProfileScreen;
