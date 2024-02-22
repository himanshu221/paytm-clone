import logout from '../assets/logout.png'
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()

    function logoutfunc() {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        navigate('/signin',{
            replace: false
        })
    }
return <div className="bg-white w-full fixed flex justify-between items-center shadow-md py-4 px-9 z-9999">
       <h1 className='text-2xl font-bold text-[#334155] border-2 p-2 rounded-lg border-[#334155]'>BluPay</h1>
       {
        localStorage.getItem('username') != null ? 
            <div className="flex items-center">
                <div className='text-xl font-bold text-[#334155]'>
                    Hello, {localStorage.getItem('username')}
                </div>
                <img className="w-12 p-2 ml-2 cursor-pointer" src={logout} alt="logout" onClick={logoutfunc}/>
            </div> :  <></>
       }
    </div>
}