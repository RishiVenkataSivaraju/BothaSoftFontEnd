import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AWS from '../config/awsConfig';
import { Button, Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [imageUri, setImageUri] = useState('');
    const [userData, setUserData] = useState(null);
    const [awssrc, setAwsSrc] = useState('');
    const number = 6666;

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
                    setImageUri(response.data.photosrc || '');
                }
            } catch (error) {
                console.log("Error fetching user details:", error);
            }
        };

        fetchData();

        return () => {
            setUserData(null);
        };
    }, []);

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
            "photosrc": awssrc
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
        // const s3 = new AWS.S3();
        // const fileUri = imageUri; // Replace with the actual path to your image file

        //   const params = {
        //     Bucket: 'YOUR_S3_BUCKET_NAME',
        //     Key: 'your_image_name.jpg', // Replace 'your_image_name.jpg' with a unique name for your image
        //     Body: fileUri,
        //     ACL: 'public-read',
        //     ContentType: 'image/jpeg', // Adjust the content type as per your image type
        //   };

        // try {
        //     const response = await s3.upload(params).promise();
        //     console.log('Upload successful:', response.Location);
        //     setAwsSrc(response.Location);
        // } catch (error) {
        //     console.log('Error uploading image:', error);
        // }

    };
    const navigation = useNavigation();
    const navigatetohome = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Button title="Go To Home" onPress={navigatetohome} />
                <Text style={styles.title}>Profile</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                editable={!userData}
                onChangeText={text => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                editable={!userData}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Mobile"
                keyboardType='numeric'
                value={mobile}
                editable={!userData}
                onChangeText={text => setMobile(text)}
            />
            <View style={{ flexDirection: 'row' }}>
                {imageUri ? (
                    <View style={[styles.photoPlaceholder, { marginRight: 'auto' }]}>
                        <Image
                            source={{ uri: imageUri }}
                            style={styles.image}
                        />
                    </View>
                ) : (
                    <TouchableOpacity style={[styles.uploadButton, { opacity: userData ? 0 : 1 }]}>
                        <Button title="Choose Photo" onPress={handleChoosePhoto} />
                    </TouchableOpacity>
                )}
            </View>

            <TouchableOpacity
                style={[styles.button, { opacity: userData ? 0 : 1 }]}
                onPress={handleSave}
                disabled={userData}
            >
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
        width: 120,
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
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
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

export default ProfileScreen;