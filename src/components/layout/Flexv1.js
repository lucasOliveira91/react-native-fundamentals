import React from 'react'

import { View, StyleSheet } from "react-native"
import Quadrado from "./Quadrado"


export default () => (
    <View style={style.flexV1}>
        <Quadrado color='#ff801a'></Quadrado>
        <Quadrado color='#50d1f6'></Quadrado>
        <Quadrado color='#dd22c1'></Quadrado>
        <Quadrado color='#8312ed'></Quadrado>
        <Quadrado color='#36c9a7'></Quadrado>
    </View>
)

const style = StyleSheet.create({
    flexV1: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#000"
    }
})