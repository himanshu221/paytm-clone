import { useSetRecoilState } from "recoil"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/Input"
import {SubHeading} from "../components/SubHeading"
import { firstName, lastName, password, username } from "../store/atoms/login"

export const Signup = () => {
    const setUsername = useSetRecoilState(username)
    const setFirstName = useSetRecoilState(firstName)
    const setLastName = useSetRecoilState(lastName)
    const setPassword = useSetRecoilState(password)

    return (
        <div className="h-screen bg-[#E3F4F4] flex justify-center items-center">
            <div className="h-[540px] w-[400px] flex flex-col items-center rounded-xl shadow-xl p-8 bg-[#C4DFDF]">
                <Heading label="Sign up" />
                <InputBox onChange={(e) => {
                    setFirstName(e.target.value)
                    }} placeholder={"First Name"}/>
                <InputBox onChange={(e) => {
                    setLastName(e.target.value)
                    }} placeholder={"Last Name"}/>
                <InputBox onChange={(e) => {
                    setUsername(e.target.value)
                    }} placeholder={"Email"}/>
                <InputBox onChange={(e) => {
                    setPassword(e.target.value)
                    }} placeholder={"Password"}/>
                <Button label="Sign up" onClick={}/>
                <BottomWarning text="Already have an account?" link="Sign in" to="/signin"/>
            </div>
        </div>
    )
}

function 