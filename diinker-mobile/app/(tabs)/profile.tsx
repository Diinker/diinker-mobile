import { LinearGradient } from "expo-linear-gradient";
import { SplashScreen } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";
import ProfileHeader from "../../components/Headers/profileHeader";
const userPlaceholder = require("../../assets/images/user-round.png");
const squarePen = require("../../assets/images/square-pen.png");

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
        <ProfileHeader />
        <View style={styles.userInfoContainer}>
          <Image source={userPlaceholder} style={styles.userImage}></Image>
          <View>
            <Text style={styles.username}>[@username]</Text>
            <Text style={styles.email}>[email@domain.com]]</Text>
          </View>
          <View>
            <Image source={squarePen} style={styles.editIcon}></Image>
          </View>
        </View>
        <View style={styles.profileStatsContainer}>
          <Text style={styles.statsText}>Location: Tulsa, Oklahoma</Text>
          <Text style={styles.statsText}>Joined in 2025</Text>
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
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
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
    paddingTop: 20,
    paddingLeft: 20,
  },
  username: {
    color: "white",
    fontFamily: "Nature-Regular",
    fontSize: 18,
  },
  email: {
    color: "white",
    fontFamily: "Nature-Light",
    fontSize: 14,
  },
  editIcon: {
    width: 30,
    height: 30,
    marginLeft: 100,
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
  separator: {
    backgroundColor: "white",
    width: "85%",
    height: "2%",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
  },
  bioText: {
    color: 'white',
    fontFamily: 'Nature-Light',
    paddingHorizontal: 30,
  }
});
