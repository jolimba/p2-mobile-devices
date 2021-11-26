export const ADD_RECORD = 'ADD_RECORD'

export const addRecord = (nameRecord) => {
    return {
        type: ADD_RECORD,
        dataRecord: {
            nameRecord: nameRecord
        }
    }
}