// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import ImgIcon from "./src/images/profile-icon.jpg"
// import ImagePicker from "react-native-image-crop-picker";

// const App = () => {

//   // States...!
//   const [pickedImg, setPickedImg] = useState(null);

//   // Gallery handler...!
//   const selectImgFromGallery = () => {
//     ImagePicker
//       .openPicker({
//         height: 300,
//         width: 300,
//         cropping: true,
//         includeBase64: true
//       })
//       .then(success => {
//         console.log(success);
//         success && setPickedImg(success.path);
//       })
//       .catch(err => console.log('SOmething went wron while picking image: ', err));
//   };

//   useEffect(() => {
//     if (pickedImg != null) {
//       console.log(pickedImg);
//     }
//   }, [pickedImg]);

//   return (
//     <View style={styles.container}>
//       <Image
//         // source={pickedImg != null ? pickedImg : ImgIcon}
//         source={{ uri: pickedImg }}
//         // source={{ uri : "file:///storage/emulated/0/Android/data/com.testingproject/files/Pictures/693a69fe-83a1-46d4-af66-1f1a34dd81d2.jpg" }}
//         style={styles.profileImg}
//       />
//       <Text>
//         Profile
//       </Text>

//       <TouchableOpacity
//         onPress={selectImgFromGallery}
//       >
//         <Text> Select Img from Gallery </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },

//   profileImg: {
//     height: 60,
//     width: 60
//   }
// });

// export default App;


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';

const Home = () => <Text> Home </Text>
const About = () => <Text> About </Text>

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="about" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;