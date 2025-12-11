import { LinearGradient } from "expo-linear-gradient";
import { SplashScreen } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import ConnectHeader from '../../components/Headers/connectHeader';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LinearGradient
        colors={["#000000", "#0011ffff"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={StyleSheet.absoluteFill}
      >
        {/* MAIN CONTENT */}
        <ConnectHeader />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
});
