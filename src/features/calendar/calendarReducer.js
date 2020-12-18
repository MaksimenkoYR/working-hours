import {CUSTOM_DATE} from '../../actionCreators'

const getDaysInMonthCount = (month, year) => new Date(year, month, 0).getDate()
const currentDay = new Date().getDate()
const currentMonth = new Date().getMonth()
const currentYear = new Date().getFullYear()
function Month(year = currentYear, month = currentMonth, day = currentDay) {
    this.year = year
    this.month = month + 1
    this.day = day
    this.monthDays = new Array(getDaysInMonthCount(month + 1, year, 0))
        .fill(1)
        .map((item, index) => index + 1)
}

const initialState = new Month()

function calendarReducer(state = initialState, {type, payload}) {
    switch (type) {
        case CUSTOM_DATE:
            return new Month(payload.year, payload.month, payload.day)

        default:
            return state
    }
}

export default calendarReducer
