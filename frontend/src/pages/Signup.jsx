import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/Input"
import { useRef, useState } from "react"
import axios from 'axios'
import { backend_host } from "../config"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"

export const Signup = () => {
    const navigate = useNavigate()
    const firstNameInput = useRef(null)
    const lastNameInput = useRef(null)
    const emailInput = useRef(null)
    const passwordInput = useRef(null)

    function onClick() {
        const promise = axios.post(`${backend_host}/api/v1/user/signup`,
        {
            username: emailInput.current.value,
            firstname: firstNameInput.current.value,
            lastname: lastNameInput.current.value,
            password: passwordInput.current.value
        }).then((res) => {
            localStorage.setItem('username',emailInput.current.value)
            localStorage.setItem("token", res.data.token)
            navigate('/')
        })

        toast.promise(promise,{
              error: (err) => err.response.data.message,
            },{
              style: {
                minWidth: '250px',
                boxShadow: '0 0 5px rgba(0,0,0,0.3)'
              },
              error: {
                duration: 2000,
              },
            }
          )
    }
    return (
        <div>
            <div className="h-screen bg-[#EEEE] flex justify-center items-center">
                <div className="h-[540px] w-[400px] flex flex-col items-center rounded-xl shadow-xl p-8 bg-white">
                    <Heading label="Sign up" />
                    <InputBox refer={firstNameInput} type="text" placeholder="First Name" />
                    <InputBox refer={lastNameInput} type="text" placeholder="Last Name" />
                    <InputBox refer={emailInput} type="text" placeholder="Email" />
                    <InputBox refer={passwordInput} type="password" placeholder="Password" />
                    <Button label="Sign up" onClick={onClick}/>
                    <BottomWarning text="Already have an account?" link="Sign in" to="/signin"/>
                </div>
            </div>
            <Toaster />
        </div>
        
    )
}