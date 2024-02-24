import { useRef, useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/Input"
import axios from "axios"
import { backend_host } from "../config"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"

export const Signin = () => {
    const navigate = useNavigate()
    const emailInput = useRef()
    const passwordInput = useRef()

    function onClick() {
            const promise = axios.post(`${backend_host}/api/v1/user/signin`,
            {
                username: emailInput.current.value,
                password: passwordInput.current.value
            }).then((res) => {
                localStorage.setItem('username',emailInput.current.value)
                localStorage.setItem('token', res.data.token)
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

        <div className="h-screen bg-[#EEEE] flex justify-center items-center">
            <div className="h-[400px] w-[400px] flex flex-col items-center rounded-xl shadow-xl p-8 bg-white">
                <Heading label="Sign in" />
                <InputBox refer={emailInput} type="text" placeholder={"Email"}/>
                <InputBox refer={passwordInput} type="password" placeholder={"Password"}/>
                <Button label="Sign in" onClick={onClick} />
                <BottomWarning text="Don't have an account?" link="Sign up" to="/signup"/>
            </div>
            <Toaster />
        </div>
    )
}