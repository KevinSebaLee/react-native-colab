import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function NameInput() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text>Ingresa tu nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe aquí"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text>Hola, {name ? name : '...'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    borderColor: '#999',
    borderWidth: 1,
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
});
