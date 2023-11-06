import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import UserIcon from "react-native-vector-icons/FontAwesome";
import LogOutIcon from "react-native-vector-icons/MaterialCommunityIcons";

const users = [
    {
        id: 1,
        employeeName: "john smith",
        title: "software engineer"
    },

    {
        id: 2,
        employeeName: "andrew greg",
        title: "software engineer"
    },

    {
        id: 3,
        employeeName: "nick anderson",
        title: "software engineer"
    },

    {
        id: 4,
        employeeName: "mishal vendy",
        title: "software engineer"
    },

    {
        id: 5,
        employeeName: "john alexander",
        title: "software engineer"
    },

    {
        id: 6,
        employeeName: "mark nick",
        title: "software engineer"
    },

    {
        id: 7,
        employeeName: "nancy bill",
        title: "software engineer"
    },

    {
        id: 8,
        employeeName: "john arnold",
        title: "software engineer"
    },

    {
        id: 9,
        employeeName: "william greg",
        title: "software engineer"
    },

    {
        id: 10,
        employeeName: "gold berg",
        title: "software engineer"
    },
];

const ContactList = () => {
    console.log(users);

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <UserIcon
                    color="white"
                    size={40}
                    name="user"
                />

                <Text style={styles.userName}>
                    shahzada ahmed
                </Text>

                <LogOutIcon
                    color="white"
                    size={40}
                    name="logout"
                />


            </View>

            <View style={styles.bottomSection}>
                <ScrollView style={{ flex: 1 }}>
                    {
                        users.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={styles.userSection}
                                >
                                    <UserIcon
                                        color="black"
                                        size={40}
                                        name="user"
                                    />

                                    <View style={styles.employeeInfo}>
                                        <Text style={styles.employeeName}>
                                            {item.employeeName}
                                        </Text>

                                        <Text style={styles.employeeTitle}>
                                            {item.title}
                                        </Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    topSection: {
        flex: 0.8,
        backgroundColor: '#1C2E46',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10
    },

    userName: {
        color: "white",
        fontFamily: "georgia",
        fontSize: 25,
        textTransform: "capitalize"
    },

    bottomSection: {
        flex: 4.2,
        backgroundColor: "white",
        paddingHorizontal: 10
    },

    userSection: {
        // backgroundColor: "yellow",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
    },

    employeeInfo: {
        paddingLeft: 10
    },

    employeeName: {
        color: "black",
        fontSize: 20,
        fontFamily: "georgia",
        textTransform: "capitalize",
    },

    employeeTitle: {
        color: "gray",
        fontSize: 17,
        fontFamily: "georgia",
        textTransform: "capitalize"
    },
});

export default ContactList;