import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import Card from '../../components/Card';

const TextPost = ({ item }) => {
  return(
    <Card>
      <TextInput placeholder="Text" />
      <TextInput placeholder="instruction" />
    </Card>
  );
}

const styles = StyleSheet.create({
});

export default TextPost;

