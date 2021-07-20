import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TextInput, Button, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import getWork from '../helpers/getWork';
import storage from '@react-native-firebase/storage';
import categories from '../categories';
import colors from '../colors';

const ShowWorkScreen = ({ route, navigation }) => {

  const [data, setData] = useState(null);
  const categoryNum = route.params.categoryNum;

  useEffect(() => {
    const getData = async () => {
      let resp = await getWork(categoryNum);
      resp.evaluation = await Promise.all(resp.evaluation.map(async(item) => {
        const image = await storage().ref(categories[categoryNum].key + '/' + item.image).getDownloadURL();
        return {...item, image: image}
      }));
      setData(resp);
    }
    getData();
  }, []);

  if(!data){
    return(
      <View>
        <Text>En attente de données</Text>
      </View>
    );
  }

  return (
    <View style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <FlatList
        data={data.evaluation}
        keyExtractor={(item) => item.instruction}
        ListHeaderComponent={() => {
          return(
            <Text style={styles.title}>Titre du travail:{"\n"}{data.title}</Text>
          );
        }}
        ListFooterComponent={() => {
          return(
            <Button
              buttonStyle={styles.button}
              title="Envoyer" 
              onPress={() => {
                console.log('send');
                navigation.navigate('Home');
              }}
            />
          );
        }}
        renderItem={({ item, index }) => {
          return(
            <>
              <Text>Page {index + 1}/{data.evaluation.length}</Text>              
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text>instruction:</Text>
              <Text>{item.instruction}</Text>
              <Text>Votre opinion détaillé:</Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={styles.input}
              />
            </>
          );
        }}
      />
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
  image: {
    width: wp(40),
    height: wp(40),
    resizeMode: 'contain'
  },
  input: {
    backgroundColor: colors.inputBackground
  },
  button: {
    height: wp(50)
  }
});

export default ShowWorkScreen;
