import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.test}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    fontFamily: 'Montserrat-Black'
  }
});

export default HomeScreen;
