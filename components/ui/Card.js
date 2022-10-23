import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({children, style}) => {
  return (
    <View style={[styles.cardContainer, style]}>{children}</View>
  )
}

export default Card

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary800,
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  }
});
