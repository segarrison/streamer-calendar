import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import EventForm from '../components/EventForm'
import Test from '../components/test';
import Test2 from '../components/test2';
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
            <Test2 num ={number}/>
            </>
            ):(
            <div>Join a stream from some of your favorite genres!</div>)}

        </div>
    )
}

export default NewMain;