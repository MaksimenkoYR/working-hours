import {combineReducers} from 'redux'
import timeInsertingReducer from './features/time-inserting-form/timeInsertingReducer'

const rootReducer = combineReducers({timeInserting: timeInsertingReducer})
export default rootReducer
