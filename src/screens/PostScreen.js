import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.test}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    fontFamily: 'Montserrat-Bold'
  }
});

export default PostScreen;
