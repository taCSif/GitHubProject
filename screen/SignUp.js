import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignUp({ navigation }) {
  const navigateToDashboardScreen = () => {
    console.log("anything");
    navigation.navigate("DashboardScreen");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={{ height: 100 }} />

        <View style={styles.form}>
          <Text style={styles.title}>Create a new account</Text>

          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#A5A5AE"
            style={styles.input}
          />

          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#A5A5AE"
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#A5A5AE"
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={navigateToDashboardScreen}
          >
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableOpacity>

          <Text style={styles.formFooter}>
            Already have an account?{" "}
            <Text style={{ textDecorationLine: "underline" }}>Sign in</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  form: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 29,
    fontWeight: "700",
    color: "#242424",
    textAlign: "center",
    marginBottom: 12,
  },
  input: {
    height: 44,
    backgroundColor: "#EFF1F5",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    marginBottom: 12,
  },
  btn: {
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007AFF",
    marginTop: 24,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "600",
    color: "white",
  },
  formFooter: {
    marginTop: 16,
    fontSize: 13,
    fontWeight: "500",
    color: "#454545",
    textAlign: "center",
  },
});
