import {SHIFT_END, SHIFT_START} from '../../actionCreators'

const initialstate = {
    shiftStart: null,
    shiftEnd: null,
}

const timeInsertingReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SHIFT_START:
            return {shiftSart: action.payload.time, shiftEnd: null}
        case SHIFT_END:
            return {shiftSart: null, shiftEnd: action.payload.time}

        default:
            return state
    }
}

export default timeInsertingReducer
