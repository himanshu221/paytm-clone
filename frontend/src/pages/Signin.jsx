import { useRef } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/Input"
import axios from "axios"
import { backend_host } from "../config"
import { useNavigate } from "react-router-dom"

export const Signin = ({setUserAuth}) => {
    const navigate = useNavigate()
    const emailInput = useRef()
    const passwordInput = useRef()  

    async function onClick() {
        const res = await axios.post(`${backend_host}/api/v1/user/signin`,
        {
            username: emailInput.current.value,
            password: passwordInput.current.value
        })
        localStorage.setItem('token', res.data.token)
        setUserAuth({
            loggedIn: true,
            username: emailInput.current.value
        })
        navigate('/')
    }   

    return (
        <div className="h-screen bg-[#E3F4F4] flex justify-center items-center">
            <div className="h-[400px] w-[400px] flex flex-col items-center rounded-xl shadow-xl p-8 bg-[#C4DFDF]">
                <Heading label="Sign in" />
                <InputBox refer={emailInput} type="text" placeholder={"Email"}/>
                <InputBox refer={passwordInput} type="password" placeholder={"Password"}/>
                <Button label="Sign in" onClick={onClick} />
                <BottomWarning text="Don't have an account?" link="Sign up" to="/signup"/>
            </div>
        </div>
    )
}