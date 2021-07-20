import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CategoriesChoice from '../../components/CategoriesChoice';
import colors from '../../colors';

const HomeScreen = ({ navigation }) => {

  const handleCategoryChoice = (categoryNum) => {
    navigation.navigate('ShowWork', {categoryNum: categoryNum});
  }

  return (
    <View style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Text style={styles.title}>Quel type de travail{"\n"}pouvez-vous juger ?</Text>
      <CategoriesChoice callback={handleCategoryChoice} style={styles.categoriesContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.appBackground,
    width: wp(100),
    height: hp(100)
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    color: colors.title,
    marginLeft: wp(5),
    marginTop: wp(10),
    fontSize: wp(7)
  },
  categoriesContainer: {
    marginTop: wp(8)
  }
});

export default HomeScreen;
