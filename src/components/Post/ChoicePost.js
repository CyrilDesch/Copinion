import React from 'react';
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import categories from '../../categories';

const ChoicePost = ({ category, callBack }) => {
  return(
    <View style={styles.container}>
      <Pressable>
        <Icon name="add-circle" size={wp(10)} />
      </Pressable>
      {category !== categories[3].key && category !== categories[4].key
        ?
          <Pressable style={styles.selectContainer} onPress={() => callBack('file')}>
            <Text style={styles.text}>FICHIER / IMAGE</Text>
          </Pressable>
        : null
      }
      {category !== categories[0].key && category !== categories[1].key && category !== categories[2].key 
        ?
          <Pressable style={styles.selectContainer} onPress={() => callBack('texte')}>
            <Text style={styles.text}>TEXTE</Text>
          </Pressable>
        : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(100),
    paddingLeft: wp(8),
    marginTop: wp(5),
    marginBottom: wp(15)
  }, 
  selectContainer: {
    backgroundColor: 'grey',
    borderRadius: wp(5),
    justifyContent: 'center',
    marginLeft: wp(3),
    height: wp(7)
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: wp(3),
    paddingHorizontal: wp(3),
    color: 'white',
  }
});

export default ChoicePost;

