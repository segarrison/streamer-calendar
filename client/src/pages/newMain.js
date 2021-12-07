import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import EventForm from '../components/EventForm'
import Test from '../components/test';
import Auth from '../utils/auth'


const NewMain = ()=> {

const { render, number } = Test();

    return(
        <div>
            <Navbar />
            {Auth.loggedIn()? (
            <>
            <EventForm />
            {render}
            <div>{number}</div>
            </>
            ):(
            <div>login</div>)}

        </div>
    )
}

export default NewMain;