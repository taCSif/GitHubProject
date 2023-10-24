import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Example() {
  const [examForm, setExamForm] = useState({
    duration: '',
    description: '',
    questions: '',
  });

  const handleCreateExam = () => {
    // Perform exam creation logic
    // Example implementation:
    const { duration, description, questions } = examForm;
    const exam = {
      duration,
      description,
      questions: questions.split('\n'),
    };
    // Perform any additional actions with the created exam
    console.log('Created exam:', exam);
    // Reset the form
    setExamForm({
      duration: '',
      description: '',
      questions: '',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.form}>
          <Text style={styles.title}>Create an Exam</Text>

          <Text style={styles.subtitle}>Exam Duration (in minutes)</Text>
          <TextInput
            placeholder="Duration"
            placeholderTextColor="#A5A5AE"
            style={styles.input}
            value={examForm.duration}
            onChangeText={(text) =>
              setExamForm({ ...examForm, duration: text })
            }
          />

          <Text style={styles.subtitle}>Description</Text>
          <TextInput
            placeholder="Description"
            placeholderTextColor="#A5A5AE"
            style={styles.input}
            value={examForm.description}
            onChangeText={(text) =>
              setExamForm({ ...examForm, description: text })
            }
          />

          <Text style={styles.subtitle}>Questions (one question per line)</Text>
          <TextInput
            placeholder="Questions"
            placeholderTextColor="#A5A5AE"
            style={[styles.input, styles.multilineInput]}
            multiline
            value={examForm.questions}
            onChangeText={(text) =>
              setExamForm({ ...examForm, questions: text })
            }
          />

          <TouchableOpacity style={styles.btn} onPress={handleCreateExam}>
            <Text style={styles.btnText}>Create Exam</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    paddingLeft: 10,
    marginTop: 5,
  },
  multilineInput: {
    height: 100,
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
