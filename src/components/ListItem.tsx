import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Icon } from '../components/Icon';

export const ListItem = ({ onPress, children }: any) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={{ flex: 1 }}>
      <Text style={styles.buttonLabel}>{children}</Text>
    </View>
    <View>
      <Icon name="right-caret" color="#3b3b3b" />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 12,
    marginVertical: 8,
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 16,
  },
});
