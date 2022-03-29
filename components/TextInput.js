import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import {styles} from './TextInput_styles';

export const TextInputComponent = () => {
  const [text, onChangeText] = useState('Hello', '');

  return (
    <View style={styles.container}>
      <Text style={styles.font}>{text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};
