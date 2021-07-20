import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList, Modal, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../colors';
import categories from '../categories';
import DocumentPicker from 'react-native-document-picker';
import PdfThumbnail from "react-native-pdf-thumbnail";
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/Ionicons';

import Input from '../components/Input';
import Card from '../components/Card';
import Header from '../components/Header';
import FilePost from '../components/Post/FilePost';
import TextPost from '../components/Post/TextPost';
import ChoicePost from '../components/Post/ChoicePost';

const PostWorkScreen = ({ route, navigation }) => {

  const category = categories[route.params.categoryNum].key;
  const [title, setTitle] = useState('');
  const [errorTitle, setErrorTitle] = useState('');
  const [pages, setPages] = useState([]);
  const [count, setCount] = useState(0);
  const [clickedItem, setClickedItem] = useState(null);


  const handleAddPage = async(type) => {
    if(type === 'file'){
      try {
        let results;
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images, DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx],
        });
        
        if(res.type === DocumentPicker.types.pdf) {
          results = await PdfThumbnail.generateAllPages(res.uri);
          if(results.length < 10){
            results = results.map((item) => {
              return {file: item.uri, type: DocumentPicker.types.images, ratio: item.height/item.width, instruction: '', id: Math.floor(Math.random() * 10000000000)}
            });
          } else {
            throw 'Trop de pages';
          }
        } else {
          results = [{file: res.uri, type: res.type, ratio: item.height/item.width, instruction: '', id: Math.floor(Math.random() * 10000000000)}];
        }
        
        setPages([...pages, ...results]);
      } catch (err) {
        console.log(err)
      }
    }
    else if (type === 'texte') 
      setPages([...pages, {text: null, instruction: '', id: Math.floor(Math.random() * 10000000000)}])
  }
  
  return (
    <View style={styles.background}>
      <FlatList
        ListHeaderComponent={() => {
          return(
            <>
              <Header />
              <StatusBar barStyle="dark-content" backgroundColor="white" />
              <>
                <Card>
                  <Input
                    label="Titre du travail"
                    value={title}
                    onChangeText={setTitle}
                  />
                </Card>
                <Text style={styles.error}>{errorTitle}</Text>
              </>
            </>
          );
        }}
        data={pages}
        contentContainerStyle={styles.postsContainer}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          let render = null;
          
          if(item.file !== undefined)
            render = <FilePost 
                        item={item} 
                        setClickedItem={setClickedItem} 
                        close={() => {
                          const array = [...pages];
                          array.splice(index, 1);
                          setPages(array);
                        }} 
                      />
          else if (item.text !== undefined)
            render = <TextPost item={item} setClickedItem={setClickedItem} />
          return render;
        }}
        ListFooterComponent={() => {
          let render = null;
          if (count < 10)
            render = <ChoicePost category={category} callBack={handleAddPage} />
          return render;
        }}
      />
      <Modal 
        visible={clickedItem != null} 
        transparent={true}
        animationType="fade"
        hardwareAccelerated={true}
      >
        {clickedItem ?
          <ImageViewer 
            useNativeDriver={true} 
            maxOverflow={0} 
            imageUrls={[{url: clickedItem.file}]} 
            renderIndicator={() => null}
            renderHeader={() => {
              return(
                <Pressable style={styles.closeButton} onPress={() => setClickedItem(null)}>
                  <Icon name="close" size={wp(10)} color="white" />
                </Pressable>
              );
            }}
          /> 
        : null}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.appBackground,
    width: wp(100),
    height: hp(100),
    alignItems: 'center'
  },
  postsContainer: {
    width: wp(100),
    alignItems: 'center'
  },
  error: {
    fontFamily: 'Montserrat-Regular',
    fontSize: wp(3.5),
    color: 'red',
  },
  closeButton: {
    position: 'absolute',
    zIndex: 100
  },
  clickedView: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: wp(100),
    height: hp(100),
    backgroundColor: 'black',
    justifyContent: 'center',
    alignContent: 'center'
  },
  zoomView: {
    marginHorizontal: wp(5),
  },
  image: {
    width: wp(90),
    resizeMode: 'contain'
  },
});

export default PostWorkScreen;
