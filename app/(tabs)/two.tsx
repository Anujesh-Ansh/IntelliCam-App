import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const FridgeView = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/InsideView.jpg')}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        width: '100%', // Ensure image takes full width of container
        height: '100%', // Ensure image takes full height of container
        resizeMode: 'cover', // Scale image uniformly to cover entire container
    },
});

export default FridgeView;
