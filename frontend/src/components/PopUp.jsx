import { useEffect } from "react"

export const PopUp = (props) => {
    console.log("inside popup")
    useEffect(() => {
        console.log("inside useEffect")
        const id = setTimeout(() =>{
            console.log("inside")
            props.clearPopUp()
        },3000)

        return clearTimeout(id)
    },[])

    return <div className="fixed z-1000 top-20 w-92 h-92 bg-red rounded-lg shadow-md">
        Hey {props.message}
    </div>

}