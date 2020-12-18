import React from 'react'
import {connect} from 'react-redux'
import {setCustomDate} from '../../actionCreators'
import CalendarForm from './CalendarForm'

const Calendar = props => {
    console.log(props)
    return (
        <div>
            <CalendarForm />
        </div>
    )
}
const mapStateToProps = state => ({
    ...state.calendar,
})

const mapDispatchToProps = dispatch => ({
    setCustomDate: date => dispatch(setCustomDate(date)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
