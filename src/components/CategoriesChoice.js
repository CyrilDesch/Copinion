import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import categories from '../categories';

const CategoriesChoice = ({style, callback }) => {
  return(
    <FlatList
      style={style}
      data={categories}
      keyExtractor={(item) => item.key}
      numColumns={3}
      renderItem={({item, index}) =>
        <Pressable style={styles.categorieContainer} onPress={() => callback(index)}>
          <View style={styles.icon}></View>
          <Text style={styles.title}>{item.name.toUpperCase()}</Text>
        </Pressable>
      }
    />
  );
}

const styles = StyleSheet.create({
  categorieContainer: {
    marginLeft: wp(5),
    backgroundColor: 'white',
    borderRadius: wp(3),
    width: wp(26.66),
    height: wp(34),
    paddingTop: wp(5),
    marginBottom: wp(5),
    elevation: 2,
    alignItems: 'center'
  },
  icon: {
    width: wp(15),
    height: wp(15),
    backgroundColor: 'red'
  },
  title: {
    padding: wp(3),
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: wp(3),
  }
});

export default CategoriesChoice;