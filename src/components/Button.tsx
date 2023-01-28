import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Button = ({ onPress, children, style }: any) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.buttonLabel}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: '#E36414',
    marginBottom: 8,
    borderRadius: 12,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});
