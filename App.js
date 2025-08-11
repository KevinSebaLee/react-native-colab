import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileCard from './src/components/ProfileCard';
import NameInput from './src/components/NameInput';

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard
        name="Alan"
        bio="Estudiante de programación"
        image="https://via.placeholder.com/150"
      />
      <NameInput />
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
