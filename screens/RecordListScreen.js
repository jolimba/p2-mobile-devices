import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import RecordItem from '../components/RecordItem'

const RecordListScreen = (props) => {
    const records = useSelector(stateInit => stateInit.records.records)
    console.log(records)
    return (
        <FlatList 
            data={records}
            keyExtractor={record => record.id}
            renderItem={record => (
                <RecordItem
                    nameRecord={record.item.nameRecord}
                    onSelect={() => props.navigation.navigate('DetailRecord', {
                        nameRecord: record.item.nameRecord,
                        id: record.item.id,
                        descriptionRecord: record.item.descriptionRecord,
                        phoneRecord: record.item.phoneRecord
                    })}
                />
            )}
        />
    )
}

export default RecordListScreen

const styles = StyleSheet.create({})
