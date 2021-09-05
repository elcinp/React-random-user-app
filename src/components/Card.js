import React,{useState,useEffect}  from 'react'
import axios from "axios"
import './Card.css'
import email from "../assets/email.svg"
import location from "../assets/location.svg"
import phone from "../assets/phone.svg"

const Card = () => {

    const [user,setUser] = useState("")

    const initialUser = () => {

        axios.get('https://randomuser.me/api/')
            .then(function (response) {
                setUser(response.data.results[0])
                console.log(response.data.results[0]);
            });
    }
    useEffect(() => {
        initialUser();
    }, [])

    

    return(
        <div className="container">

            <div className="card">
                <div className="box">
                    <img id="pic" src={user?.picture?.medium} alt="vesikalık" />
                    <p>{user?.name?.title} {user?.name?.first} {user?.name?.last}</p>
                </div>

                <div className="box">
                    <img className="logo" src={email} alt="email" /> 
                    <p>{user.email}</p>
                </div>

                <div className="box">
                    <img className="logo" src={phone} alt="phone" />
                    <p>{user.phone}</p>
                </div>

                <div className="box">
                    <img className="logo" src={location} alt="location" />
                    <p>{user.location?.city}</p>
                </div>

                <div>
                    <p>Age : {user.dob?.age} </p>
                    <p>Register Date : {user.registered?.date}</p>
                </div>

            </div>

            
            <button onClick={initialUser}>Random User</button>
            
            
        </div>    

            

        
    )
}

export default Card