import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Text, Pressable, View, StyleSheet, Image } from "react-native";

export default function LandingPage() {
  const routeToLogin = () => {
    router.replace("/login");
  };
  const routeToRegister = () => {
    router.replace("/register");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LinearGradient
        colors={["#000000", "#0011ffff"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={StyleSheet.absoluteFill}
      />
      <View>
        <View style={styles.loginContainer}>
          <View style={styles.diinkerHeader}>
            <Text style={styles.loginHeader}>diinker</Text>
          </View>
          <Text style={styles.loginSubtitle}>tech-powered pickleball</Text>
          <View style={styles.buttonsContainer}>
            <Pressable
              onPress={routeToRegister}
              style={[styles.actionButtons, styles.registerButton]}
            >
              <Text style={styles.buttonText}>New here? Create an account</Text>
            </Pressable>
            <Pressable
              onPress={routeToLogin}
              style={[styles.actionButtons, styles.loginButton]}
            >
              <Text style={styles.buttonText}>Log in to your account</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  diinkerHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  loginHeader: {
    fontFamily: "Nature-Regular",
    color: "white",
    fontSize: 80,
  },
  loginSubtitle: {
    fontFamily: "Nature-Light",
    color: "white",
    fontSize: 20,
  },
  buttonsContainer: {
    gap: 15,
    marginTop: 20,
  },
  actionButtons: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 30,
  },
  registerButton: {
    paddingHorizontal: 50,
  },
  loginButton: {
    paddingHorizontal: 75,
  },
  buttonText: {
    fontFamily: "Nature-Regular",
    color: "black",
  },
});
