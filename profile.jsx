// app/profile.js
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>Profile Mohan</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Profile;
