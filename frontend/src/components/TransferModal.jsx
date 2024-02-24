import axios from "axios"
import { Button } from "./Button"
import { Heading } from "./Heading"
import { backend_host } from "../config"
import { useRef } from "react"
import toast, { Toaster } from "react-hot-toast"

export const TransferModal = (props) => {
    const inputRef = useRef()
    const overlay = useRef()

    function handleModalClose(e) {
        if(e.target == overlay.current)
            props.setShowTransfer(false)
    }
    function handleClick() {
        const promise = axios.post(`${backend_host}/api/v1/account/transfer`,{
            amount: parseInt(inputRef.current.value),
            to: props.tranferUser.id
        },{
            headers : {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
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
        props.setShowTransfer(false)
    }
    return <div ref={overlay} onClick={handleModalClose} className="fixed z-10 flex justify-center items-center w-[100%] h-[100%] top-0 right-0 left-0 bottom-0 bg-black/50">
        <div className="h-[400px] w-[350px] bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col items-center mb-4 justify-center">
                <Heading label={"Send Money"}/>
            </div>
            <div>
                <div className="w-[80%] flex items-center">
                    <div className="text-xl pl-3 py-4 text-[#334155]">
                        To :
                    </div>
                    <div className="text-xl px-2 text-[#334155]">
                        {props.tranferUser.firstname}
                    </div>
                    <div className="text-xl text-[#334155]">
                        {props.tranferUser.lastname}
                    </div>
                </div>
            </div>
            <div className="text-xl py-2 px-4 text-[#334155]">
                Balance :  &#8377; {props.balance} 
            </div>
            <div className="my-3">
                <div className='relative w-full p-4 z-10'>
                    <input ref={inputRef} className='bg-white w-full border-2 border-[#334155] outline-none text-md p-2 rounded-lg' type="number" min="0" placeholder=" "/>
                    <span className="input-text transition duration-500 p-1 absolute left-6 top-5 text-md text-[#334155] text-opacity-80">Amount (&#8377;)</span>
                </div>
                <Button label="Initiate Transfer" onClick={handleClick} />
            </div>
        </div>
        <Toaster />
    </div>
}