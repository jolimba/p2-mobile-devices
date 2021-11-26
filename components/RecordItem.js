import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const RecordItem = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onSelect}
            style={styles.recordItem}
        >
            <View
                style={styles.infoContainer}
            >
                <Text style={styles.nameRecord}>{props.nameRecord}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RecordItem

const styles = StyleSheet.create({
    recordItem:{
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    infoContainer:{
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameRecord:{
        color: 'black',
        fontSize: 18,
        marginBottom: 5

    }
})