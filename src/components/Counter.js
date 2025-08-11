import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Contador: {count}</Text>
      <Button title="Incrementar" onPress={increment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#d0e6f7',
    borderRadius: 5,
  },
  counterText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
