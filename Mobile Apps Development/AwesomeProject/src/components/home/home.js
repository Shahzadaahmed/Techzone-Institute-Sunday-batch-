import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
    // console.log(navigation);

    const bioData = {
        name: "John Cena",
        company: "WWE",
        champion: false,
        hobbies: ["wrestling", "gym", "boxing"]
    };

    const navigateToAbout = () => {
        if (navigation && typeof navigation == "object") {
            navigation.navigate("about", { bio: bioData });
        };
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome to home screen!
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
                    Go to about
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

export default Home;