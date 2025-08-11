import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileCard({ name, bio, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    margin: 10
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center'
  }
});
