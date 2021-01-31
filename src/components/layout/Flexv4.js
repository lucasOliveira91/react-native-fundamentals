import React from 'react'
import { View, StyleSheet } from "react-native"


export default () => (
    <View style={style.flexV1}>
        <View style={style.v1}/>
        <View style={style.v2}/>
    </View>
)

const style = StyleSheet.create({
    flexV1: {
        flex: 1,
        width: 100,
        backgroundColor: "#000"
    },

    v1: {
        flex: 1,
        backgroundColor: '#ff801a'
    },

    v2: {
        flex: 1,
        backgroundColor: '#dd22c1'
    }
})