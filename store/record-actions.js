export const ADD_RECORD = 'ADD_RECORD'

export const addRecord = (nameRecord, phoneRecord, descriptionRecord) => {
    return {
        type: ADD_RECORD,
        dataRecord: {
            nameRecord: nameRecord,
            phoneRecord: phoneRecord,
            descriptionRecord: descriptionRecord
        }
    }
}