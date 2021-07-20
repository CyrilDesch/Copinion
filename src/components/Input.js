import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input = ({ label, value, onChangeText, secureTextEntry, disable, onSubmit, keyboardType, autoCapitalize }) => {
  return(
    <>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.inputContainer}>
        <Icon style={styles.icon} name="title" size={wp(6)} color="black" />
        <TextInput
          editable={!disable}
          style={[styles.textInput, disable ? styles.disable : null]} 
          onChangeText={onChangeText}
          value={value}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onSubmitEditing={onSubmit}
        />
      </View>
    </>
  );
}

Input.defaultProps = {
  style: {},
  label: 'default',
  value: 'Give a state text',
  secureTextEntry: false,
  onChangeText: null,
  disable: false,
  onSubmit: null, 
  keyboardType: "default",
  autoCapitalize: "none"
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: wp(3.5),
    marginTop: wp(5),
    marginLeft: wp(5),
    color: '#494949',
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: wp(0.2),
    borderColor: '#c3c3cb',
    marginTop: wp(1),
    marginBottom: wp(6),
    marginLeft: wp(4),
    marginRight: wp(4),
    height: wp(10)
  },
  icon: {
    paddingTop: wp(2),
  },
  textInput: {
    padding: 0,
    fontFamily: 'Montserrat-Medium',
    fontSize: wp(4.5),
    width: wp(65),
    paddingLeft: wp(2),
  },
  disable: {
    backgroundColor: '#d0d3db',
  }
});

export default Input;

