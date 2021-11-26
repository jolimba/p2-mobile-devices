import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import Colors from '../constants/Colors'
import * as recordsActions from '../store/record-actions'

const NewRecordScreen = (props) => {
    const [newRecordName, setNewRecordName] = useState('')
    const [newRecordPhone, setNewRecordPhone] = useState('')
    const [newRecordDescription, setNewRecordDescription] = useState('')

    const dispatch = useDispatch()

    const addRecord = () => {
        const acao = recordsActions.addRecord(newRecord)
        dispatch(acao)
        cleanState()
        props.navigation.goBack()
    }

    const cleanState = () => {
        setNewRecordName('')
        setNewRecordPhone('')
        setNewRecordDescription('')
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.title}>Novo registro</Text>
                <TextInput style={styles.input} onChangeText={setNewRecordName} value={newRecordName} placeholder="Name"/>
                <TextInput style={styles.input} onChangeText={setNewRecordPhone} value={newRecordPhone} placeholder="Phone Number"/>
                <TextInput style={styles.input} onChangeText={setNewRecordDescription} value={newRecordDescription} placeholder="Description"/>
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
