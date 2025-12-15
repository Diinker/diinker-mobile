import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { auth } from '../../FirebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
const arrowIcon = require("../../assets/images/arrow-left.png");

export default function Login() {
  const goBack = () => {
    router.replace("/landing");
  };
  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      if (user) {
        router.replace('/(tabs)')
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert(
        "Sign in Failed",
        error.message
      )
    }
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LinearGradient
        colors={["#000000", "#0011ffff"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.arrowContainer}>
        <Pressable onPress={goBack} style={styles.arrowButton}>
          <Image source={arrowIcon} style={styles.arrowIcon} />
          <Text style={styles.arrowText}>Go back</Text>
        </Pressable>
      </View>
      <Text style={styles.headerText}>Welcome Back</Text>
      <Text style={styles.headerSubtitle}>
        Let&apos;s pick up where you left off...
      </Text>
      <View style={styles.loginContainer}>
        <View style={styles.loginFields}>
          <View style={styles.fieldWrapper}>
            <Text style={styles.loginParam}>Your email address</Text>
            <TextInput
              style={styles.textInput}
              placeholder="email@example.com"
              autoCapitalize="none"
              placeholderTextColor={"#ffffff6a"}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.fieldWrapper}>
            <Text style={styles.loginParam}>Your password</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="***********"
              placeholderTextColor={"#ffffff6a"}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.fieldWrapper}>
            <Pressable style={styles.loginButton} onPress={handleLogin}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Log in</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  arrowContainer: {
    zIndex: 10,
    position: "absolute",
    top: 70,
    left: 30,
  },
  arrowButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    width: 25,
    height: 25,
  },
  arrowText: {
    fontFamily: "Nature-Regular",
    color: "white",
    fontSize: 22,
    marginLeft: 8,
  },
  headerText: {
    color: "white",
    position: "absolute",
    fontFamily: "Nature-Regular",
    top: 145,
    fontSize: 44,
    zIndex: 10,
  },
  headerSubtitle: {
    color: "white",
    position: "absolute",
    fontFamily: "Nature-Light",
    top: 200,
    fontSize: 20,
  },
  loginContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: "center",
  },
  loginFields: {
    paddingTop: 40,
    width: "100%",
  },
  fieldWrapper: {
    alignSelf: "center",
    width: "80%",
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: "rgba(110, 110, 110, 0.35)",
    width: "100%",
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
    color: "white",
  },
  loginParam: {
    fontFamily: "Nature-Regular",
    color: "white",
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: 'black',
    fontFamily: 'Nature-Regular',
    fontSize: 16,
  },
});
