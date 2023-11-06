import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const About = ({ navigation, route }) => {
    // console.log(navigation);

    // Note: Handeling parameters..!
    const params = route.params;
    console.log('Parameters: ', params);

    const navigateToAbout = () => {
        if (navigation && typeof navigation == "object") {
            navigation.goBack();
        };
    };

    // Mounted hook...!
    useEffect(() => {
        if (params && typeof params == "object") {

            if (params.bio.champion) Alert.alert('John is champion!');
            else Alert.alert('John is not a champion!');
        };
    }, [params]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome to about screen!
            </Text>

            <Text style={styles.text}>
                Developer: {params ? params.bio.name : "NA"}
            </Text>

            <TouchableOpacity
                style={styles.btn}
                onPress={navigateToAbout}
            >
                <Text
                    style={{
                        color: "white",
                        fontSize: 20
                    }}
                >
                    Go back
                </Text>
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
    },

    btn: {
        backgroundColor: "blue",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 20
    },

    text: {
        fontSize: 30
    }
});

export default About;