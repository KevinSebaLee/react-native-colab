import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Greeting({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola, {name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
