import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const DetailRecordScreen = (props) => {
    const records = useSelector(stateInit => stateInit.records.records)
    return (
        <FlatList 
            data={records}
            keyExtractor={record => record.id}
            renderItem={record => <Text>{JSON.stringify(record)}</Text>}
        />
    )
}

export default DetailRecordScreen

const styles = StyleSheet.create({})
