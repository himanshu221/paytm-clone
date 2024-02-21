import { Friend } from "./Friend"

export const UserCard = () => {
    return <div className="w-full h-[650px] p-10 shadow-lg rounded-lg my-10 mr-10 bg-white">
            <input className='shadow-[0_0_5px_rgb(0,0,0,0.2)] p-3 rounded-lg w-[80%] outline-none' type="text" placeholder="Search Users . . ." />
            <div className="w-full h-[520px] mt-5 mb-5 overflow-y-auto">
                <Friend firstname="Himanshu" lastname="Bhushan" />
                <Friend firstname="Himanshu" lastname="Bhushan" />
                <Friend firstname="Himanshu" lastname="Bhushan" />
                <Friend firstname="Himanshu" lastname="Bhushan" />
                <Friend firstname="Himanshu" lastname="Bhushan" />
                <Friend firstname="Himanshu" lastname="Bhushan" />
                <Friend firstname="Himanshu" lastname="Bhushan" />
                <Friend firstname="Himanshu" lastname="Bhushan" />
                <Friend firstname="Himanshu" lastname="Bhushan" />
                <Friend firstname="Himanshu" lastname="Bhushan" />
            </div>
    </div>
}
