import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const AboutUs = () => {
    return (
        <View style={styles.container}>
            
            <Image
                source={require('../assets/images/icon.png')}
                style={styles.image}
            />

            <Text style={styles.text}>
                Hey there! 👋 I'm Anujesh Ansh, a 3rd-year college student and the mastermind behind IntelliCam. 📸
                Technology is my playground, and I thrive on building groundbreaking solutions that ignite change.
                IntelliCam is not just a project for me; it's my passion, my love letter to innovation. 💖
                This app is my canvas, where I paint dreams and bring them to life in pixels. 🎨
                As I journey through college, I'm on a relentless pursuit of knowledge, seeking out new ideas to shape the future of photography. 🚀
                So, buckle up and join me on this electrifying ride as we reshape the landscape of visual storytelling! 🌟
            </Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF', // Set background color to white
        paddingHorizontal: 20,
        paddingTop:80,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
    },
});

export default AboutUs;
