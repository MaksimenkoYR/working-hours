export const SHIFT_START = 'SHIFT_START'
export const setStartOfShift = time => ({
    type: SHIFT_START,
    payload: {time},
})
export const SHIFT_END = 'SHIFT_END'
export const setEndOfShift = time => ({
    type: SHIFT_END,
    payload: {time},
})

export const CUSTOM_DATE = 'CUSTOM_DATE'
export const setCustomDate = date => ({
    type: CUSTOM_DATE,
    payload: {date},
})
