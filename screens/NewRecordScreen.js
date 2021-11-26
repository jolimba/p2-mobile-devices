import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import Colors from '../constants/Colors'
import * as recordsActions from '../store/record-actions'

const NewRecordScreen = (props) => {
    const [newRecord, setNewRecord] = useState('')

    const dispatch = useDispatch()

    const newRecordChanged = (text) => {
        setNewRecord(text)
    }

    const addRecord = () => {
        const acao = recordsActions.addRecord(newRecord)
        dispatch(acao)
        setNewRecord('')
        props.navigation.goBack()
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.title}>Novo registro</Text>
                <TextInput style={styles.input} onChangeText={newRecordChanged} value={newRecord}/>
                <Button 
                    title="Save"
                    color={Colors.primary}
                    onPress={() => addRecord()}
                />
            </View>
        </ScrollView>
    )
}

export default NewRecordScreen

const styles = StyleSheet.create({
    form: {
        margin: 40
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        alignItems: 'center'
    },
    input: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 2,
        marginBottom: 12,
        paddingVertical: 12
    }
})
