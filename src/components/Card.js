import React from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../colors';

const Card = ({ children }) => {
  return(
    <View style={styles.card} children={children}/>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.inputBackground,
    margin: wp(5),
    marginBottom: wp(3),
    borderRadius: wp(5),
    padding: wp(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 8,
  }
});

export default Card;

