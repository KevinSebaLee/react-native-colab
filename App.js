import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileCard from './src/components/ProfileCard';

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard
        name="Alan"
        bio="Estudiante de programación"
        image="https://via.placeholder.com/150"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});
