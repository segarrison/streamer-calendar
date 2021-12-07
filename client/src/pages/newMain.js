import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import EventForm from '../components/EventForm'
import MainCards from '../components/MainCards';
import ExtraCalanderCard from '../components/ExtraCard';
import Auth from '../utils/auth'


const NewMain = ()=> {

    return(
        <div>
            <Navbar />
            {Auth.loggedIn()? (
            <div>
            <EventForm />
            <MainCards/>
            <ExtraCalanderCard/>
            </div>
            ):(
            <div>Join a stream from some of your favorite genres!</div>)}

        </div>
    )
}

export default NewMain;