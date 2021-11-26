import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import Colors from '../constants/Colors'

const DetailRecordScreen = ({route}) => {
    const {nameRecord, phoneRecord, descriptionRecord} = route.params
    console.log(route)
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Details: </Text>
            <View style={styles.container}>
                <Text style={styles.text}>Name: {nameRecord}</Text>
                <Text style={styles.text}>Phone: {phoneRecord}</Text>
                <Text style={styles.text}>Description: {descriptionRecord}</Text>
            </View>
        </View>

    )
}

export default DetailRecordScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        height: 120,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    form: {
        margin: 40
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
