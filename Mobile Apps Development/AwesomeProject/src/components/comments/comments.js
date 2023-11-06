import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const Comments = () => {

    const [selectedImg, setSelectedImg] = useState(null);

    const selectImageFromCam = async () => {
        try {
            let response = await ImagePicker
                .openCamera({
                    height: 400,
                    width: 300,
                    includeBase64: true
                });
            console.log(response);

            if (response) {
                setSelectedImg(response.path);
            }
        }

        catch (error) {
            console.log('Somthing went wrong while picking image from camera: ', error);
        };
    };

    return (
        <View style={styles.container}>
            {
                selectedImg ?
                    <Image
                        source={{ uri: selectedImg }}
                        style={{
                            height: 300,
                            width: 300
                        }}
                    />
                    : null
            }

            <Text style={styles.header}> Learning Camera in RN! </Text>

            <TouchableOpacity
                style={styles.btn}
                onPress={selectImageFromCam}
            >
                <Text style={styles.btnText}> Select Image </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },

    header: {
        color: "blue",
        fontSize: 30,
        paddingBottom: 10
    },

    btn: {
        borderRadius: 10,
        backgroundColor: 'lightblue',
        width: '100%',
        padding: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    btnText: {
        color: "blue",
        fontSize: 16
    }
});

export default Comments;