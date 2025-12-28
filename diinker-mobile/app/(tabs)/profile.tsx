import { LinearGradient } from "expo-linear-gradient";
import { SplashScreen, router } from "expo-router";
import { auth } from "../../FirebaseConfig";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import ProfileHeader from "../../components/Headers/profileHeader";
import { ActiveTargetMap } from "../../node_modules/@firebase/firestore/dist/firestore/test/unit/specs/spec_builder.d";
const zack = require("../../assets/images/zack.jpeg");
const squarePen = require("../../assets/images/square-pen.png");

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  if (!auth.currentUser) {
    console.error("No user is currently active");
    return;
  }
  const userName = auth.currentUser.email?.split("@")[0] ?? "User";
  const userEmail = auth.currentUser.email ?? "";
  const editProfile = () => {
    router.push("/editProfile");
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LinearGradient
        colors={["#000000", "#0011ffff"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={StyleSheet.absoluteFill}
      >
        {/* MAIN CONTENT */}
        <ProfileHeader />
        <View style={styles.userInfoContainer}>
          <Image source={zack} style={styles.userImage}></Image>
          <View>
            <Text style={styles.username}>@{userName}</Text>
            <Text style={styles.email}>{userEmail}</Text>
          </View>
          <Pressable onPress={editProfile}>
            <Image source={squarePen} style={styles.editIcon}></Image>
          </Pressable>
        </View>
        <View style={styles.profileStatsContainer}>
          <Text style={styles.statsText}>
            <Text style={styles.onlineText}>Home Center:</Text> {"\n"}[Name]
          </Text>
          <Text style={styles.statsText}>
            <Text style={styles.onlineText}>DUPR Rating</Text> {"\n"}[Rating]
          </Text>
          <View style={styles.onlineContainer}>
            <View style={styles.onlineStatus}></View>
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>
        <View>
          <View style={styles.separator}></View>
        </View>
        <View>
          <Text style={styles.bioText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.
          </Text>
        </View>
        <View>
          <View style={styles.separator}></View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            <Text style={styles.onlineText}>Player Location:</Text> [Location]
          </Text>
          <Text style={styles.descriptionText}>
            <Text style={styles.onlineText}>Travel Range:</Text> [Range]
          </Text>
          <Text style={styles.descriptionText}>
            <Text style={styles.onlineText}>Availability:</Text> [Availability]
          </Text>
        </View>
        <View>
          <View style={styles.separator}></View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            <Text style={styles.onlineText}>Game Style:</Text> [Competetive,
            Casual, League Play]
          </Text>
          <Text style={styles.descriptionText}>
            <Text style={styles.onlineText}>Play Style:</Text> [Power, Control,
            Hybrid]
          </Text>
          <Text style={styles.descriptionText}>
            <Text style={styles.onlineText}>Hand:</Text> [Left Handed, Right
            Handed]
          </Text>
        </View>
        <View>
          <View style={styles.separator}></View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  userImage: {
    width: 60,
    height: 60,
    marginVertical: 10,
    marginRight: 5,
    borderRadius: '100%',
  },
  userInfoContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 30,
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
