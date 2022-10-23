import { StyleSheet, Text, View, Platform } from "react-native";
import Colors from "../../constants/colors";

const MainTitle = ({ children }) => {
  return (
    <View style={styles.titleView}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  )
}

export default MainTitle

const styles = StyleSheet.create({
  titleView: {
    borderWidth: Platform.select({
      ios: 0,
      android: 3,
    }),
    borderColor: Colors.accent400,
    backgroundColor: `${Colors.accent400}99`,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%'
  },
  titleText: {
    fontFamily: 'IndieFlower',
    color: Colors.accent500,
    textAlign: 'center',
    fontSize: 32
  }
});
