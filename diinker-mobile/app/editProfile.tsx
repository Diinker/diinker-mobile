import { LinearGradient } from "expo-linear-gradient";
import { SplashScreen } from "expo-router";
import { auth } from "../FirebaseConfig";
import { Image, StyleSheet, Text, View } from "react-native";
import EditProfileHeader from "../components/Headers/editProfileHeader";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  if (!auth.currentUser) {
    console.error("No user is currently active");
    return;
  }
  const userName = auth.currentUser.email?.split("@")[0] ?? "User";
  const userEmail = auth.currentUser.email ?? "";
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LinearGradient
        colors={["#000000", "#0011ffff"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={StyleSheet.absoluteFill}
      >
        {/* MAIN CONTENT */}
        <EditProfileHeader />
        <View>
          <View style={styles.separator}></View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  userImage: {
    width: 70,
    height: 70,
    marginVertical: 5,
    marginRight: 5,
  },
  userInfoContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
  },
  username: {
    color: "white",
    fontFamily: "Nature-Regular",
    fontSize: 24,
  },
  email: {
    color: "white",
    fontFamily: "Nature-Light",
    fontSize: 14,
  },
  editIcon: {
    width: 30,
    height: 30,
    marginLeft: 135,
  },
  profileStatsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  statsText: {
    color: "white",
    fontFamily: "Nature-Light",
  },
  onlineContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  onlineStatus: {
    width: 10,
    height: 10,
    borderRadius: "100%",
    backgroundColor: "#09ff00ff",
  },
  onlineText: {
    fontFamily: "Nature-Regular",
    color: "white",
  },
  separator: {
    backgroundColor: "white",
    width: "86%",
    height: "2%",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
  },
  bioText: {
    color: "white",
    fontFamily: "Nature-Light",
    paddingHorizontal: 30,
  },
  descriptionContainer: {
    gap: 5,
  },
  descriptionText: {
    color: "white",
    fontFamily: "Nature-Light",
    paddingHorizontal: 30,
  },
});
