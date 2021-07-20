import React from 'react';
import { View, StyleSheet, Text, Pressable } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return(
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={wp(6)} />
      </Pressable>
      <Text style={styles.title}>Nouveau travail</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: wp(4),
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: wp(8),
    paddingLeft: wp(4),
    paddingBottom: wp(1)
  }
});

export default Header;