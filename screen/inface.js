import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Inface({ navigation }) {
  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.form}>
          <Text style={styles.title}>Live Classes, educator access, assessments, discussions, and progress tracking for interactive online learning.</Text>
          <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={navigateToSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.signInButton]} onPress={navigateToSignIn}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#153944',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  form: {
    padding: 20,
  },
  title: {
    color: '#f8fcfd',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Cochin', // This is an example. Replace with the font you want.
  },
  button: {
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 30, // Added this
    marginRight: 30, // Added this
  },
  signUpButton: {
    backgroundColor: '#eff4d9',
  },
  signInButton: {
    backgroundColor: '#f4ecd9',
  },
  buttonText: {
    color: '#153944',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
