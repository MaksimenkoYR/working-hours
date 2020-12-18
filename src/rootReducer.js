import {combineReducers} from 'redux'
import calendarReducer from './features/calendar/calendarReducer'
import timeInsertingReducer from './features/time-inserting-form/timeInsertingReducer'

const rootReducer = combineReducers({
    timeInserting: timeInsertingReducer,
    calendar: calendarReducer,
})
export default rootReducer
