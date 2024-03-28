import { View, Text ,SafeAreaView , StyleSheet } from 'react-native'
import React from 'react'
import SigninScreen from './src/register/SigninScreen'
import Looptest from './src/looptest/looptest'
const App = () => {
  return (
    <SafeAreaView >
      {/* <SigninScreen /> */}
      <Looptest />
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
})

export default App