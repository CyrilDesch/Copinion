import firestore from '@react-native-firebase/firestore';
import categories from '../categories';

export default async(categoryNum) => {
  
  let response = null;
  let i = 0;
  let error = null;
  while ((!response || response && response.empty) && i <= 6 && !error){
    try {
      response = await firestore().collection('posts').doc('posts').collection(categories[categoryNum].key).where("opinions_count", "in", [i, i+1]).orderBy("date").limit(1).get();
    } catch (err) {
      error = err;
    }
    i = i + 2;
  }
  if((!response || response && response.empty) && !error)
    try {
      response = await firestore().collection('posts').doc('posts').collection(categories[categoryNum].key).where("opinions_count", ">", i).orderBy("opinions_count").limit(1).get();
    } catch (err) {
      error = err;
    }

  if((!response || response && response.empty) && !error)
    response = null;
  else {
    response = response.docs[0].data();
  }
  
  return response;
}