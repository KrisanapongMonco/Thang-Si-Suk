import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleResetPassword = () => {
    if (!email.trim()) {
      Alert.alert("Error", "กรุณากรอกอีเมลของคุณ");
      return;
    }

    // In a real app, you would call an API to handle password reset
    Alert.alert(
      "ส่งอีเมลรีเซ็ตรหัสผ่านแล้ว",
      "โปรดตรวจสอบอีเมลของคุณเพื่อดำเนินการต่อ",
      [
        {
          text: "ตกลง",
          onPress: () => router.push("/pages/Login"),
        },
      ]
    );
  };

  const goToLogin = () => {
    router.push("/pages/Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>รีเซ็ตรหัสผ่าน</Text>
      <Text style={styles.subtitle}>
        กรอกอีเมลของคุณและเราจะส่งคำแนะนำในการรีเซ็ตรหัสผ่านให้คุณ
      </Text>

      <TextInput
        style={styles.input}
        placeholder="อีเมล"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>รีเซ็ตรหัสผ่าน</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={goToLogin}>
        <Text style={styles.linkText}>กลับไปหน้าเข้าสู่ระบบ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007BFF",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkButton: {
    alignItems: "center",
    padding: 10,
  },
  linkText: {
    color: "#007BFF",
    fontSize: 16,
  },
});

export default ForgotPassword;
