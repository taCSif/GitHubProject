import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const VirtualClass = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handlePress = () => {
    console.log('Submit button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Create Virtual Class</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Enter date:</Text>
        <TextInput
          style={styles.input}
          placeholder='e.g. 5/10/2023'
          onChangeText={text => setDate(text)}
        />

        <Text style={styles.label}>Enter time:</Text>
        <TextInput
          style={styles.input}
          placeholder='e.g. 11:59'
          onChangeText={text => setTime(text)}
        />
      </View>

      <SubmitButton onPress={handlePress} />
    </SafeAreaView>
  );
};

const SubmitButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBar: {
    backgroundColor: '#007AFF',
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginVertical: 20,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VirtualClass;
