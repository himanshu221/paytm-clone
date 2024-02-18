import { useRef, useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/Input"
import axios from "axios"
import { backend_host } from "../config"
import { useNavigate } from "react-router-dom"
import { PopUp } from "../components/PopUp"

export const Signin = ({setUserAuth}) => {
    const navigate = useNavigate()
    const emailInput = useRef()
    const passwordInput = useRef()  
    const [error, setError] = useState({
        errorOccured: false,
        errorMessage: ''
    })

    async function onClick() {
        try{
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
        }catch(e){
            setError({
                errorOccured: true,
                errorMessage: e.response.data.message
            })
        }
    }   

    return (

        <div className="h-screen bg-[#EEEE] flex justify-center items-center">
            {/* { error.errorOccured ? <PopUp message={error.message} clearPopUp={() => setError({errorOccured: false, errorMessage:''})} /> : <></> } */}
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