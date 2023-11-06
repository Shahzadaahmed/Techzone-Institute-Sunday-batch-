import React, { useEffect } from 'react';
import { View, Text, Button, PermissionsAndroid, Platform } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const About = () => {

    const pickImageHandler = () => {
        ImagePicker
            .openCamera({
                height: 400,
                width: 400,
                cropping: false,
                includeBase64: true
            })
            .then(imageData => {
                console.log('Image Data: ', imageData);
            })
            .catch(err => {
                console.log('Err while picking image: ', err);
            });
    };

    const askForPermission = async () => {
        if (Platform.OS === 'android') {
            
            let status = await PermissionsAndroid
                .request(PermissionsAndroid.PERMISSIONS.CAMERA)
            console.log('Permission status: ', status);
        }
    };

    useEffect(() => {
        askForPermission();
    }, []);

    return (
        <View>
            <Text> About! </Text>

            <Button
                title='Select Image'
                onPress={pickImageHandler}
            />
        </View>
    );
}

export default About;