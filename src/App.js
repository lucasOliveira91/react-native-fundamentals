import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Mega from './components/mega/Mega'

export default () => (
  <SafeAreaView style={style.App}>
    <Mega qtdNumeros={5} />
  </SafeAreaView>
)

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
})