import React, { useState } from 'react';
import { StatusBar, Platform, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ModalScreen() {
  const [expiryDate, setExpiryDate] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽 Item Name</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {/* Expiry Date Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>📅 Expiry Date</Text>
        <TextInput
          style={[styles.input, styles.textInput]}
          placeholder="Enter expiry date"
          placeholderTextColor="#fff"
          value={expiryDate}
          onChangeText={text => setExpiryDate(text)}
        />
      </View>

      {/* Description Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>📝 Description</Text>
        <TextInput
          style={[styles.input, styles.textInput, styles.descriptionInput]}
          placeholder="Enter description"
          placeholderTextColor="#fff"
          multiline
          value={description}
          onChangeText={text => setDescription(text)}
        />
      </View>

      <Pressable style={styles.buttonNext}>
        <Text>
          <Icon name="arrow-right" size={20} color="black" />
        </Text>
      </Pressable>

      {/* Use a light status bar on iOS to account for the black space above the Details */}
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 5, // Left align the label
  },
  textInput: {
    color: '#fff', // Text color
    padding: 10, // Padding for text input
  },
  buttonNext: {
    padding: 20,
    backgroundColor: '#ffdb30',
    borderRadius: 50,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ffdb30',
    borderWidth: 2,
    borderRadius: 5,
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top', // Set text alignment to top for multiline input
  },
});
