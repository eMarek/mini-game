import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonView}>
      <Pressable
          style={({pressed}) => pressed ? [styles.buttonPressable, styles.pressed] : styles.buttonPressable}
          onPress={onPress}
          android_ripple={{ color: Colors.primary400 }}
        >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonView: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonPressable: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18
  },
  pressed: {
    opacity: 0.75
  }
});
