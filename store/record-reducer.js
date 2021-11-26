import Record from '../model/Record';
import { ADD_RECORD } from './record-actions'

const initialState = {
    records: []
}

export default (stateInit = initialState, action) => {
    switch(action.type) {
        case ADD_RECORD:
            const record = new Record(new Date().toString(), action.dataRecord.nameRecord, action.dataRecord.phoneRecord, action.dataRecord.descriptionRecord)
            console.log(record)
            return {
                records: [record, ...stateInit.records] 
            }
        default:
            return stateInit
    }

}