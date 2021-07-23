import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Pressable, FlatList } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth';
import { Context as UserContext } from '../../context/UserContext';
import Background from '../../components/Background';
import colors from '../../colors';

const ProfilScreen = ({ navigation }) => {
  const [data, setData] = useState(null)
  const { state: { user } } = useContext(UserContext);

  useEffect(() => {
    
  }, []);
  
  
  return (
    user ?
      <Background title="Mon compte" iconRight={() => {
        return(
          <Pressable onPress={() => auth().signOut()}>
            <Icon name="log-out-outline" size={wp(9)} color="white" />
          </Pressable>
        );
      }}>
        <View style={styles.inline}>
          <Text style={styles.title}>Vos travaux</Text>
          <Text style={styles.subtitle}>Voir tout</Text>
        </View>
        <FlatList
          data={}
        />
      </Background>
    : 
      <Text>Pas connecté</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(10),
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: wp(8),
    marginLeft: wp(5),
    marginRight: wp(5),
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    color: '#03215c',
    fontSize: wp(6)
  },
  subtitle: {
    fontFamily: 'Montserrat-Bold',
    color: '#a3a3a4',
    fontSize: wp(3.5)
  }
});

export default ProfilScreen;
