import { LinearGradient } from "expo-linear-gradient";
import { SplashScreen } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import StatisticsHeader from '../../components/Headers/statisticsHeader';

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
        <StatisticsHeader />
        <ScrollView style={styles.DateHistory}>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateWin]}>W</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateWin]}>W</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateLoss]}>L</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateWin]}>W</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateLoss]}>L</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateWin]}>W</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateWin]}>W</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateLoss]}>L</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateWin]}>W</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateLoss]}>L</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateWin]}>W</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateWin]}>W</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateLoss]}>L</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateWin]}>W</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateLoss]}>L</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateWin]}>W</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateWin]}>W</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateLoss]}>L</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateWin]}>W</Text>
          </View>
          <View style={styles.DateContainer}>
            <Text style={styles.DateDetails}>Date:
              <Text style={styles.lightText}> [Date]</Text>
            </Text>
            <Text style={styles.DateDetails}>Score:
              <Text style={styles.lightText}> [Score]</Text>
            </Text>
            <Text style={[styles.DateDetails, styles.DateLoss]}>L</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  DateHistory: {
    marginTop: 20,
  },
  DateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0000005e',
    borderRadius: 10,
    paddingVertical: 20,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  DateDetails: {
    color: 'white',
    fontFamily: 'Nature-Regular',
    fontSize: 18,
  },
  lightText: {
    fontFamily: 'Nature-Light',
  },
  DateWin: {
    color: '#00ff26ff',
  },
  DateLoss: {
    color: '#FF0000',
  }
});
