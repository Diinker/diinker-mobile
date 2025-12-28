import { router } from "expo-router";
import { Text, View, StyleSheet, Image, Alert, Pressable } from "react-native";
const megaphoneIcon = require('../../assets/images/megaphone.png');
const logoutIcon = require('../../assets/images/logout.png');
const leftArrow = require('../../assets/images/arrow-left.png');

export default function diinkerHeader() {
  // Logout handler function
  const handleLogout = () => {
    Alert.alert(
      "Confirmation Required",
      "Are you sure you want to log out?",
      [
        {
          text: 'No',
          style: "cancel"
        },
        {
          text: "Yes",
          style: "cancel",
          onPress: () => {
            router.replace('/login')
          },
        }
      ],
      { cancelable: true }
    )
  }

  const goBack = () => {
    router.replace("/profile");
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <Pressable onPress={goBack}>
          <Image source={leftArrow} style={styles.backArrow}></Image>
        </Pressable>
        <View>
          <Text style={styles.headerName}>Edit Profile</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => Alert.alert("Notifications Triggered", "No new notifications at this time")}>
          <Image source={megaphoneIcon} style={styles.logoutIcon}></Image>
        </Pressable>
        <Pressable onPress={handleLogout}>
          <Image source={logoutIcon} style={styles.logoutIcon} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  textContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  headerName: {
    fontFamily: 'Nature-Regular',
    fontSize: 36,
    color: 'white',
  },
  headerSubtitle: {
    fontFamily: 'Nature-Light',
    fontSize: 16,
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  logoutIcon: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
  backArrow: {
    width: 40,
    height: 40,
  }
})