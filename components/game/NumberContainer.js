import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from "react-native"
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  const { width } = useWindowDimensions()

  let isWideScreen = width > 500
  return (
    <View style={[styles.container, {
      padding: isWideScreen ? 0 : 24,
      margin: isWideScreen ? 0 : 24,
    }]}>
      <Text style={[styles.numberText, { fontSize: isWideScreen ? 86 : 144 }]}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    minWidth: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: Colors.accent500,
    fontWeight: 'bold'
  }
});
