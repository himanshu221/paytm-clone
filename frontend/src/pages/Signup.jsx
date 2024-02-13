import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/Input"
import { useRef } from "react"
import axios from 'axios'
import { backend_host } from "../config"
import { useNavigate } from "react-router-dom"

export const Signup = ({setUserAuth}) => {
    const navigate = useNavigate()
    const firstNameInput = useRef(null)
    const lastNameInput = useRef(null)
    const emailInput = useRef(null)
    const passwordInput = useRef(null)

    async function onClick() {
        const res = await axios.post(`${backend_host}/api/v1/user/signup`,
        {
            username: emailInput.current.value,
            firstname: firstNameInput.current.value,
            lastname: lastNameInput.current.value,
            password: passwordInput.current.value
        })
        localStorage.setItem("token", res.data.token)
        setUserAuth({
            loggedIn: true,
            username: emailInput.current.value
        })
        navigate('/')
    }
    return (
        <div className="h-screen bg-[#E3F4F4] flex justify-center items-center">
            <div className="h-[540px] w-[400px] flex flex-col items-center rounded-xl shadow-xl p-8 bg-[#C4DFDF]">
                <Heading label="Sign up" />
                <InputBox refer={firstNameInput} type="text" placeholder="First Name" />
                <InputBox refer={lastNameInput} type="text" placeholder="Last Name" />
                <InputBox refer={emailInput} type="text" placeholder="Email" />
                <InputBox refer={passwordInput} type="password" placeholder="Password" />
                <Button label="Sign up" onClick={onClick}/>
                <BottomWarning text="Already have an account?" link="Sign in" to="/signin"/>
            </div>
        </div>
    )
}