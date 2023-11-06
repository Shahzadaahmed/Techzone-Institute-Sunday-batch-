import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Other = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}> Other Screen! </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    header: {
        color: "blue",
        fontSize: 30
    }
});

export default Other;