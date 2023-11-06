import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LearningFlex = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.innerBox1}>
                    <Text style={styles.text}> 1 </Text>
                </View>

                <View style={styles.innerBox2}>
                    <Text style={styles.text}> 2 </Text>
                </View>

                <View style={styles.innerBox3}>
                    <Text style={styles.text}> 3 </Text>
                </View>
            </View>

            <View style={styles.box2}>
                <View style={styles.innerBox1}>
                    <Text style={styles.text}> 4 </Text>
                </View>

                <View style={styles.innerBox2}>
                    <Text style={styles.text}> 5 </Text>
                </View>

                <View style={styles.innerBox3}>
                    <Text style={styles.text}> 6 </Text>
                </View>
            </View>

            <View style={styles.box3}>
                <View style={styles.innerBox1}>
                    <Text style={styles.text}> 7 </Text>
                </View>

                <View style={styles.innerBox2}>
                    <Text style={styles.text}> 8 </Text>
                </View>

                <View style={styles.innerBox3}>
                    <Text style={styles.text}> 9 </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow"
    },

    box1: {
        backgroundColor: "blue",
        flex: 1,
        display: "flex",
        flexDirection: "row",
        paddingVertical: 5
    },

    box2: {
        backgroundColor: "green",
        flex: 2,
        display: "flex",
        flexDirection: "row",
        paddingVertical: 5
    },

    box3: {
        backgroundColor: "red",
        flex: 1,
        display: "flex",
        flexDirection: "row",
        paddingVertical: 5
    },

    innerBox1: {
        backgroundColor: "silver",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginHorizontal: 5
    },

    innerBox2: {
        backgroundColor: "gold",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginHorizontal: 5
    },

    innerBox3: {
        backgroundColor: "lightgreen",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginHorizontal: 5
    },

    text: {
        color: "black",
        fontSize: 25
    }
});

export default LearningFlex;