import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default props => {
    const lado = 50
    return (
            <View style={{
                height: lado,
                width: lado,
                backgroundColor: props.color || '#000'
            }}>

            </View>

        )
}

