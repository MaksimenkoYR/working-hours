import React from 'react'
import {useForm} from 'react-hook-form'

const CalendarForm = props => {
    const {register, handleSubmit} = useForm()
    const onSubmit = data => {
        props.setCostumDate(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                year
                <input ref={register} name='year' />
                month
                <input ref={register} name='month' />
                day
                <input ref={register} name='day' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default CalendarForm
