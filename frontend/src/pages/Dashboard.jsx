import { Navigate, useNavigate } from "react-router-dom"

export const Dashboard = ({loggedIn}) => {
    return (
            loggedIn ?  <div className="h-screen bg-[#E3F4F4] flex justify-center items-center">
           
            </div>
            : <Navigate to={'/signin'}/>
    )
}