// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import { Button, Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import { launchImageLibrary } from 'react-native-image-picker';
// const App = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [imageUri, setImageUri] = useState('');
//   const [userData, setUserData] = useState(null);

//   let number = 123;

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
//         }
//       } catch (error) {
//         console.log("Error fetching user details:", error);
//       }
//     };

//     fetchData();

//     // Cleanup function to avoid memory leaks
//     return () => {
//       setUserData(null);
//     };
//   }, []); // Depend on number to rerun the effect if number changes


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
//         editable={userData ? false : true}
//         onChangeText={text => setName(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         editable={userData ? false : true}
//         onChangeText={text => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile"
//         keyboardType='numeric'
//         value={mobile}
//         editable={userData ? false : true}
//         onChangeText={text => setMobile(text)}
//       />
//       <View style={{ flex: 1, flexDirection: 'row' }}>
//         <TouchableOpacity style={styles.uploadButton} >
//           <Button title="Choose Photo" onPress={handleChoosePhoto} />
//         </TouchableOpacity>
//         <View style={styles.photoPlaceholder}>
//           {imageUri && (
//             <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} />
//           )}
//         </View>
//       </View>

//      <TouchableOpacity style={[styles.button, { opacity: userData ? 0.5 : 1 }]}
//         onPress={userData ? null : handleSave} 
//         disabled={userData ? true : false} >
//         <Text style={styles.buttonText}>Save</Text>
//       </TouchableOpacity>
//     </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   navigation: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
//     padding: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     padding: 10,
//     marginVertical: 5,
//     width: '80%',
//   },
//   uploadButton: {
//     marginRight: 10,
//   },
//   photoPlaceholder: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// button: {
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
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Button, Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [userData, setUserData] = useState(null);

  let number = 123;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/profile/mobile/${number}`);
        if (response.data === '') {
          console.log("User Does Not Exist!");
        } else {
          console.log(response.data);
          setUserData(response.data);
          setName(response.data.name ? `Name: ${response.data.name}` : '');
          setEmail(response.data.email ? `Email: ${response.data.email}` : '');
          setMobile(response.data.mobile ? `Mobile: ${response.data.mobile}` : '');
        }
      } catch (error) {
        console.log("Error fetching user details:", error);
      }
    };

    fetchData();

    // Cleanup function to avoid memory leaks
    return () => {
      setUserData(null);
    };
  }, []); // Depend on number to rerun the effect if number changes


  const handleChoosePhoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setImageUri(response.assets[0].uri);
        console.log(response.assets[0].uri);
      }
    });
  };

  const handleSave = async () => {
    const data = {
      "name": name,
      "mobile": mobile,
      "email": email,
      "photosrc": imageUri
    };
    try {
      const response = await axios.post("http://localhost:8080/api/user/profile", data);
      console.log(response.data);
      console.log('Name:', name);
      console.log('Mobile:', mobile);
      console.log('Photo Source:', imageUri);
    } catch (error) {
      console.log("Error saving profile:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Button title="Go To Home" onPress={() => { }} />
        <Text style={styles.title}>Profile</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        editable={userData ? false : true}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        editable={userData ? false : true}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile"
        keyboardType='numeric'
        value={mobile}
        editable={userData ? false : true}
        onChangeText={text => setMobile(text)}
      />
        <View style={{flex: 1,flexDirection: 'row'}}>
      <TouchableOpacity style={styles.uploadButton}>
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      </TouchableOpacity>
      <View style={styles.photoPlaceholder}>
      {imageUri && (
        <Image source={imageUri} />
      )}
        </View>
      </View>
     
     <TouchableOpacity style={[styles.button, { opacity: userData ? 0.5 : 1 }]}
        onPress={userData ? null : handleSave} 
        disabled={userData ? true : false} >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    borderWidth: 1,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  uploadButton: {
    height: 60,
    width: 80,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dashed',
    marginBottom: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  photoPlaceholder: {
    height: 120,
    width: 120,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,
    marginLeft: 20,
    alignItems: 'center',
  },
button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default App;