import { useEffect, useState } from "react"
import { BalanceCard } from "../components/BalanceCard"
import { UserCard } from "../components/UserCard"
import axios from 'axios'
import { backend_host } from "../config"

export const Dashboard = () => {
    const [userBalance, setUserBalance] = useState(0)

    useEffect(() => {
        axios.get(`${backend_host}/api/v1/account/balance`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setUserBalance(res.data.balance)
        })
    },[userBalance])

    return (
            <div className="h-[100%] flex flex-col sm:flex-row bg-[#EEEE] pt-20">
                <BalanceCard balance={userBalance} />
                <UserCard />
            </div>
    )
}