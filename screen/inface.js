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
          <View style={{ height: 400 }} />
          <Text style={styles.t}>Live Classes, educator access, assessments, discussions, and progress tracking for interactive online learning.</Text>
          <TouchableOpacity style={styles.btn} onPress={navigateToSignUp}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={navigateToSignIn}>
            <Text style={styles.btnText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  form: {
    padding: 20,
  },
  t: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationStyle: 'double',
  },
  btn: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    marginTop: 20,
    padding: 15,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
