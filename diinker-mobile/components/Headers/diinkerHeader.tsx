import { Text, View, StyleSheet, Image } from "react-native";
const logoutIcon = require('../../assets/images/logout.png');

export default function diinkerHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.headerName}>diinker</Text>
        <Text style={styles.headerSubtitle}>Welcome, Zack!</Text>
      </View>
      <View>
        <Image source={logoutIcon} style={styles.logoutIcon} />
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
    flexDirection: 'column'
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
  logoutIcon: {
    width: 30,
    height: 30,
    marginTop: 20,
  }
})