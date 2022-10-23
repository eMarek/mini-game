import { Image, StyleSheet, Text, View, Dimensions, useWindowDimensions, ScrollView, Platform } from "react-native"
import MainTitle from "../components/ui/MainTitle"
import PrimaryButton from "../components/ui/PrimaryButton"
import Colors from "../constants/colors"

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions()

  let imageSize = 300
  if (width < 400) {
    imageSize = 200
  }
  if (height < 500) {
    imageSize = 140
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }


  return (
    <ScrollView style={styles.screen}>
      <View style={[styles.rootContainer, {height: width > 500 ? 'auto' : height }]}>
        <MainTitle>Game over</MainTitle>
        <View style={[styles.medalImage, imageStyle]}>
          <Image style={styles.image} source={require('../assets/images/medal.jpg')} />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  medalImage: {
    borderColor: Colors.primary500,
    borderWidth: 3,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'IndieFlower',
    fontSize: 36,
    textAlign: 'center',
    marginVertical: 16
  },
  highlight: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'System',
    fontWeight: 'bold',
    fontSize: 44,
    color: Colors.primary500
  }
});
