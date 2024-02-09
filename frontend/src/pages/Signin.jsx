import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/Input"

export const Signin = () => {
    return (
        <div className="h-screen bg-[#E3F4F4] flex justify-center items-center">
            <div className="h-[400px] w-[400px] flex flex-col items-center rounded-xl shadow-xl p-8 bg-[#C4DFDF]">
                <Heading label="Sign in" />
                <InputBox placeholder={"Email"}/>
                <InputBox placeholder={"Password"}/>
                <Button label="Sign in"/>
                <BottomWarning text="Don't have an account?" link="Sign up" to="/signup"/>
            </div>
        </div>
    )
}