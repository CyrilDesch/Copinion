import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const ProfilScreen = ({ navigation }) => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Text style={styles.test}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    fontFamily: 'Montserrat-Bold'
  }
});

export default ProfilScreen;
