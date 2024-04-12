// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import { launchImageLibrary } from 'react-native-image-picker';

// const App = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [imageUri, setImageUri] = useState('');
//   const [userData, setUserData] = useState(null);

//   const number = 6666;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/profile/mobile/${number}`);
//         if (response.data === '') {
//           console.log("User Does Not Exist!");
//         } else {
//           console.log(response.data);
//           setUserData(response.data);
//           setName(response.data.name ? `Name: ${response.data.name}` : '');
//           setEmail(response.data.email ? `Email: ${response.data.email}` : '');
//           setMobile(response.data.mobile ? `Mobile: ${response.data.mobile}` : '');
//           setImageUri(response.data.photosrc || '');
//         }
//       } catch (error) {
//         console.log("Error fetching user details:", error);
//       }
//     };

//     fetchData();

//     return () => {
//       setUserData(null);
//     };
//   }, []);

//   const handleChoosePhoto = () => {
//     const options = {
//       mediaType: 'photo',
//       quality: 1,
//     };

//     launchImageLibrary(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorCode);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         setImageUri(response.assets[0].uri);
//         console.log(response.assets[0].uri);
//       }
//     });
//   };

//   const handleSave = async () => {
//     const data = {
//       "name": name,
//       "mobile": mobile,
//       "email": email,
//       "photosrc": imageUri
//     };
//     try {
//       const response = await axios.post("http://localhost:8080/api/user/profile", data);
//       console.log(response.data);
//       console.log('Name:', name);
//       console.log('Mobile:', mobile);
//       console.log('Photo Source:', imageUri);
//     } catch (error) {
//       console.log("Error saving profile:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.navigation}>
//         <Button title="Go To Home" onPress={() => { }} />
//         <Text style={styles.title}>Profile</Text>
//       </View>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         editable={!userData}
//         onChangeText={text => setName(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         editable={!userData}
//         onChangeText={text => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile"
//         keyboardType='numeric'
//         value={mobile}
//         editable={!userData}
//         onChangeText={text => setMobile(text)}
//       />
//       <View style={{ flexDirection: 'row' }}>
//         {imageUri ? (
//           <View style={[styles.photoPlaceholder, { marginRight: 'auto' }]}>
//             <Image
//               source={{ uri: imageUri }}
//               style={styles.image}
//             />
//           </View>
//         ) : (
//           <TouchableOpacity style={[styles.uploadButton, { opacity: userData ? 0 : 1 }]}>
//             <Button title="Choose Photo" onPress={handleChoosePhoto} />
//           </TouchableOpacity>
//         )}
//       </View>

//       <TouchableOpacity
//         style={[styles.button, { opacity: userData ? 0 : 1 }]}
//         onPress={handleSave}
//         disabled={userData}
//       >
//         <Text style={styles.buttonText}>Save</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   navigation: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   input: {
//     height: 50,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     padding: 10,
//   },
//   uploadButton: {
//     height: 60,
//     width: 120,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderStyle: 'dashed',
//     marginBottom: 20,
//     marginRight: 20,
//     alignItems: 'center',
//   },
//   photoPlaceholder: {
//     height: 120,
//     width: 120,
//     borderWidth: 1,
//     borderColor: 'black',
//     marginBottom: 30,
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default App;
// import * as React from 'react';
// import { Button, View,StyleSheet, Text, Image, TextInput,  } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <View style={styles.container}>
//         <View style={styles.img}>
//           <Image style={styles.noti}  source={require('./assets/icons/notification.png')}/>
         
//           <Image style={styles.male}  source={require('./assets/icons/male.png')}/>
        
//         </View>
//         <View style={styles.search}>
//         <Image style={styles.srchicon} source={require('./assets/icons/serach.png')}/> 
//         <TextInput style={styles.inp} editable multiline numberOfLines={2} maxLength={40} placeholder='search' maxFontSizeMultiplier={50}/>
//       </View>
//       <View style={styles.boxes1}>
//         <View style={styles.paper1}>
//           <Text style={styles.te1}>paper2</Text>
//         </View>
//         <View style={styles.paper2}>
//         <Text style={styles.te1}>paper1</Text>
//         </View>
//       </View>
//       <View style={styles.boxes}>
//         <View style={styles.paper}>
//         <Text style={styles.te1}>paper4</Text>
//         </View>
//         <View style={styles.pape}>
//         <Text style={styles.te1}>paper3</Text>
//         </View>
//       </View>
//       </View>  
//       <View style={styles.com}>
//         <TextInput style={styles.textin} editable  numberOfLines={2} defaultValue='write comment'  maxFontSizeMultiplier={50}>
//         <Image style={styles.comin} source={require('./assets/icons/comments1.jpg')}/>
//         </TextInput>
//         </View> 
//     </View>
//   );
// }
//  function Profile (){
//   return(
//     <View style={styles.proco}> 
//           <Text>am profile page</Text>
//     </View>
//   );
//  }
// function Payments({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title=" Am payments page Go back to profile" />
//     </View>
//   );
// }
 
// function Contact({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title=" Am Contacts page Go back to profile" />
//     </View>
//   );
// }
// function Logout({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title=" am in Log out page Go back to profile" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Profile"  component={HomeScreen} />
//         <Drawer.Screen name="Payments" component={Payments} />
//         <Drawer.Screen name="Contact and Support" component={Contact} />
//         <Drawer.Screen name="Logout" component={Logout} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
// const styles = StyleSheet.create({
//   container:{
//      backgroundColor: '#fff',
//     justifyContent: 'center',
//   },
//   img:{
//     marginTop:300,
//     flexDirection:"row",
//     width:"100%"
//   },

//   noti:{
//     marginTop:120,
//     height:40,
//     width:40,
//     marginLeft:220
//   },
//   search:{
//     height:40,
//     marginLeft:60,
//     marginTop:10,
//     width:"50%",
//     borderColor:"black",
//    borderWidth:1,
//    borderRadius:10,
//     flexDirection:"row",
//   },
// male:{
//   marginTop:110,
// height:70,
// width:70,
// marginLeft:29
// },
//   inp:{
//     marginLeft:50,
//     alignContent:"center",
//     height:50,
//     width:"90%",
    
//     },
//     srchicon:{
//       marginTop:10,
//       height:25,
//       width:25,
//       marginLeft:20
//     },
//     boxes1:{
//       marginTop:50,
//       marginLeft:30,
//       flexDirection:"row-reverse",
//       justifyContent:"space-between"
//     },
//     paper1:{
//       marginTop:29,
//       alignItems:"center",
//       justifyContent:"center",
//       height:150,
//       width:150,
//       marginLeft:25,
//       borderColor:"black",
//       borderWidth:1
//      },
//      paper2:{
//       alignItems:"center",
//       justifyContent:"center",
//       marginTop:29,
//       marginLeft:29,
//       height:150,
//       width:150,
//       borderColor:"black",
//       borderWidth:1
//      },
//      boxes:{
//       marginTop:20,
//       marginLeft:30,
//       flexDirection:"row-reverse",
//       justifyContent:"space-between",
      
//     },
//    paper:{
//     alignItems:"center",
//     justifyContent:"center",
//     marginTop:20,
//     borderColor:"black",
//       borderWidth:1,
//     height:150,
//     width:150,
    
//    },
//    pape:{
//     alignItems:"center",
//     justifyContent:"center",
//     marginTop:20,
//     marginLeft:29,
//     height:150,
//     width:150,
//     borderColor:"black",
//     borderWidth:1
//    },
//   te1:{
//     fontSize:20,
//     color:"black", 
//   },
//   textin:{
//     height:100,
//     marginLeft:50,
//     fontSize:20,
//     color:"black", 
//   marginEnd:1
//   },
//   com:{
//     height:500,
//    marginBottom:10,
//     marginTop:70,

    
//   },
//   comin:{
//     height:50,
//     width:50,
    
//   },
//   circle:{
//     backgroundColor:"red",
//     flex:1
//   },
//   proco:{
//     justifyContent:"center",
//     alignItems:"center"
//   }
//   });
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
