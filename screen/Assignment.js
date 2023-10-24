import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Assignment() {
  const [assignmentForm, setAssignmentForm] = useState({
    description: "",
    dueDate: "", // changed to string
  });

  const createAssignment = () => {
    const { description, dueDate } = assignmentForm;
    const assignment = {
      description,
      dueDate: new Date(dueDate),
    };
    console.log("Created assignment:", assignment);
    setAssignmentForm({
      description: "",
      dueDate: "",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.form}>
          <Text style={styles.title}>Create an Assignment</Text>

          <Text style={styles.subtitle}>Description</Text>
          <TextInput
            placeholder="Description"
            placeholderTextColor="#A5A5AE"
            style={styles.input}
            value={assignmentForm.description}
            onChangeText={(text) =>
              setAssignmentForm({ ...assignmentForm, description: text })
            }
          />

          <Text style={styles.subtitle}>Due Date</Text>
          <TextInput
            placeholder="Due Date"
            placeholderTextColor="#A5A5AE"
            style={styles.input}
            value={assignmentForm.dueDate}
            onChangeText={(text) =>
              setAssignmentForm({ ...assignmentForm, dueDate: text })
            }
          />

          <TouchableOpacity style={styles.btn} onPress={createAssignment}>
            <Text style={styles.btnText}>Create Assignment</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  form: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    paddingLeft: 10,
    marginTop: 5,
  },
  btn: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    marginTop: 20,
    padding: 15,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
