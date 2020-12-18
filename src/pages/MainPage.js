import React from 'react'
import {connect} from 'react-redux'
import {setEndOfShift, setStartOfShift} from '../actionCreators'
import TimeInsertingForm from '../features/time-inserting-form/TimeInsertingForm'
import MainTemplate from './templates/MainTemplate'

const MainPage = props => {
    return (
        <MainTemplate>
            <TimeInsertingForm
                shiftStart={props.shiftStart}
                shiftEnd={props.shiftEnd}
                setEndOfShift={props.setEndOfShift}
                setStartOfShift={props.setStartOfShift}
            />
        </MainTemplate>
    )
}
const mapStateToProps = state => ({
    shiftStart: state.timeInserting.shiftStart,
    shiftEnd: state.timeInserting.shiftEnd,
})
const mapDispatchToProps = dispatch => ({
    setStartOfShift: time => dispatch(setStartOfShift(time)),
    setEndOfShift: time => dispatch(setEndOfShift(time)),
})
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
