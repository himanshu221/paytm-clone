import { useEffect, useState } from "react"
import { BalanceCard } from "../components/BalanceCard"
import { UserCard } from "../components/UserCard"
import axios from 'axios'
import { backend_host } from "../config"
import { TransferModal } from "../components/TransferModal"

export const Dashboard = () => {
    const [userBalance, setUserBalance] = useState(0)
    const [showTranfer, setShowTransfer] = useState(false);
    const [tranferUser, setTransferUser] = useState({
        firstname: "",
        lastname: "",
        id: ""
    })

    useEffect(() => {
        axios.get(`${backend_host}/api/v1/account/balance`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setUserBalance(res.data.balance)
        })
    },[showTranfer])

    return (
            <div className="h-[100%] flex flex-col sm:flex-row bg-[#EEEE] pt-20">
                <BalanceCard balance={userBalance} />
                <UserCard setShowTransfer={setShowTransfer} setTransferUser={setTransferUser} />
                {showTranfer ? <TransferModal setShowTransfer={setShowTransfer} balance={userBalance} tranferUser={tranferUser} />: null}
            </div>
    )
}