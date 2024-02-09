import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/Input"
import {SubHeading} from "../components/SubHeading"

export const Signup = () => {
    return (
        <div className="h-screen bg-[#E3F4F4] flex justify-center items-center">
            <div className="h-[540px] w-[400px] flex flex-col items-center rounded-xl shadow-xl p-8 bg-[#C4DFDF]">
                <Heading label="Sign up" />
                <InputBox placeholder={"First Name"}/>
                <InputBox placeholder={"Last Name"}/>
                <InputBox placeholder={"Email"}/>
                <InputBox placeholder={"Password"}/>
                <Button label="Sign up"/>
                <BottomWarning text="Already have an account?" link="Sign in" to="/signin"/>
            </div>
        </div>
    )
}