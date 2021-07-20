import React from 'react';
import { View, Text, StyleSheet, StatusBar, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CategoriesChoice from '../../components/CategoriesChoice';
import auth from '@react-native-firebase/auth';
import colors from '../../colors';

const PostScreen = ({ navigation }) => {

  const handleCategoryChoice = (categoryNum) => {
    navigation.navigate('PostWork', { categoryNum: categoryNum });
  }

  return (
    !auth().currentUser.isAnonymous ? 
      <View style={styles.background}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Text style={styles.title}>Quel type de travail{"\n"}voulez-vous poster ?</Text>
        <CategoriesChoice callback={handleCategoryChoice} style={styles.categoriesContainer} />
      </View>
    :
      <View>
        <Pressable onPress={() => navigation.navigate()}>
          <Text>Veuillez-vous connecter pour poster</Text>
        </Pressable>
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

export default PostScreen;
