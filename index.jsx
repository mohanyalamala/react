// app/index.js
import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Link href="/profile" style={{ color: 'blue' }}>Go to Profile</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HomeScreen;
