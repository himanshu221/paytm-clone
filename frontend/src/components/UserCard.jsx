import { useEffect, useState } from "react"
import { Friend } from "./Friend"
import { backend_host } from "../config"
import { userSignInSchema } from "../../../backend/validation/user"
import axios from "axios"

export const UserCard = (props) => {
    const [users, setUsers] = useState([]) 
    const [filter, setFilter] = useState("")

    useEffect(() => {
        axios.get(`${backend_host}/api/v1/user/bulk?filter=${filter}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((resp) => {
            setUsers(resp.data)
        })
    },[filter])

    return <div className="w-[85%] sm:w-[100%] h-[650px] p-10 shadow-lg rounded-lg m-10  bg-white">
            <input className='shadow-[0_0_5px_rgb(0,0,0,0.2)] p-3 rounded-lg w-[80%] outline-none' onChange={(e) => setFilter(e.target.value)} type="text" placeholder="Search Users . . ." />
            <div className="w-full h-[520px] mt-5 mb-5 overflow-y-auto">
               {
                users.map((user,ind) => {
                    console.log(user._id)
                    return  <Friend key={ind} firstname={user.firstname} lastname={user.lastname} id={user._id} setShowTransfer={props.setShowTransfer} setTransferUser={props.setTransferUser}/>
               })}
            </div>
    </div>
}
