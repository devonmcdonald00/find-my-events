import React, {useState} from 'react'
import { FormControl, Input, Button, Typography } from '@material-ui/core';
import './index.css'

export default function EventForm() {

    const [success, setSuccess] = useState(0);

    const submitEvent = async (e) => {
        const eventName = e.target[0]['value']
        const eventType = e.target[1]['value']
        const eventLocation = e.target[2]['value']
        const eventDate = e.target[3]['value']
        const eventTime = e.target[4]['value']

        const data = JSON.stringify({
            'eventName' : eventName,
            "type" : eventType,
            "location" : eventLocation,
            "date" : eventDate,
            "time" : eventTime,
        });

        await fetch("http://localhost:3001/event_posts/", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip, deflate, br',
            },
            body: data
        })

        setSuccess(1)

    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <form className='event-form-container' onSubmit={submitEvent}>
                <Typography class='event-form-label'>Event Form</Typography>
                <Input id="event-name" placeholder='Event name' className='event-input'/>
                <Input id="event-type" placeholder='Event type' className='event-input'/>
                <Input id="event-location" placeholder='Event location' className='event-input'/>
                <Input id="event-date" placeholder='Event date' className='event-input'/>
                <Input id="event-time" placeholder='Event time' className='event-input'/>
                <Button type='submit' className='event-submit' variant='contained' style={{backgroundColor: 'rgb(26, 43, 43)', color: 'white', width: 'fit-content', margin: 'auto', marginTop: 20}}>
                    Submit
                </Button>
            </form>
            {
                success &&
                <div className='success-message' onClick={e => setSuccess(0)}>
                    <p>Success!</p>
                </div>
            }
        </div>
    )
}
