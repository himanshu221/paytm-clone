import { Link } from "react-router-dom"

export const PageNotFound = () => {
    return <div className="h-screen bg-white flex flex-col justify-center items-center">
        <div className="text-2xl font-bold text-[#334155]">Oops!! Page Not Found</div>
        <Link className='text-xl underline cursor-pointer font-bold text-[#334155]' to={'/'}>Home</Link>
    </div>
}