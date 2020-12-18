import React from 'react'
import {useForm} from 'react-hook-form'

const TimeInsertingForm = props => {
    console.log(props)
    const {register, handleSubmit} = useForm()
    const onSubmit = data => {
        console.log(props)
        console.log(data)
        if (props.shiftStart === null) {
            props.setStartOfShift(data.time)
        } else {
            props.setEndOfShift(data.time)
        }
    }
    return (
        <div>
            {props.shiftStart === null && <p>start of working shift</p>}
            {props.shiftStart !== null && props.shiftEnd === null && <p>end of working shift</p>}
            {props.shiftStart !== null && props.shiftEnd !== null && <p>day is end</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input ref={register} name='time' placeholder='00:00'></input>
                <input type='submit' />
            </form>
        </div>
    )
}

export default TimeInsertingForm
