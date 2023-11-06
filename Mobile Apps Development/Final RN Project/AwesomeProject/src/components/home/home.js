import React, { useEffect } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';
import Contacts from "react-native-contacts";

const Home = () => {

    const fetchContacts = async () => {
        let status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)
        console.log('Permission status: ', status);

        if (status === 'denied' || status === 'never_ask_again') {
            throw Error('Permissions not granted to access Contacts')
        }
        
        Contacts.getAll()
            .then((actualData) => {
                console.log('My contacts: ', actualData);
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
        <View>
            <Text style={{ color: 'black' }}> Home! </Text>
        </View>
    );
}

export default Home;