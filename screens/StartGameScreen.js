import { useState } from "react"
import { Alert, useWindowDimensions, StyleSheet, TextInput, View, KeyboardAvoidingView, ScrollView } from "react-native"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import MainTitle from "../components/ui/MainTitle"
import PrimaryButton from "../components/ui/PrimaryButton"
import Colors from "../constants/colors"

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('')

  const { height } = useWindowDimensions()

  const numberValueHandler = (value) => {
    setEnteredNumber(value)
  }

  const resetInputValue = () => setEnteredNumber('')

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be between 1 and 99.',
        [{ text: 'Okay', style: 'destractive', onPress: resetInputValue }]
      )
      return
    }
    onPickNumber(chosenNumber)
  }

  const marginTopDistance = height < 400 ? 50 : 180

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <MainTitle>Guess My Number</MainTitle>
          <Card style={styles.cardStyle}>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberValueHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputValue}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cardStyle: {
    marginTop: 36,
  },
  numberInput: {
    height: 50,
    width: 60,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: Colors.accent400,
    borderBottomWidth: 2,
    color: Colors.accent400,
    marginVertical: 5,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  buttonContainer: {
    flex: 1
  }
});
