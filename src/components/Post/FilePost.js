import React from 'react';
import { TextInput, Pressable, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'

import Card from '../../components/Card';

const FilePost = ({ item, setClickedItem, close }) => {
  
  return(
    <Card>
      <Pressable onPress={close}>
        <Icon name="close" size={wp(8)} color="black" />
      </Pressable>
      <Pressable onPress={() => setClickedItem(item)}>
        <Image source={{ uri: item.file }} style={[styles.image, { height: item.ratio * wp(80) }]} />
      </Pressable>
      <TextInput style={styles.textInput} placeholder='instruction' />
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    width: wp(80),
    resizeMode: 'contain'
  },
  textInput: {
    width: wp(50)
  }
});

export default FilePost;

