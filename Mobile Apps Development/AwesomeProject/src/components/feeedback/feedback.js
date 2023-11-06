import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Contacts from 'react-native-contacts';

const Feedback = () => {

    const fetchContacts = () => {
        Contacts
            .getAll()
            .then((actualData) => {
                console.log('Contacts: ', actualData);
            })
            .catch((err) => {
                console.log('Something went wrong while fetching contacts: ', err);
            });
    };

    // Mounted hook...!
    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}> Feedback Screen! </Text>
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

export default Feedback;