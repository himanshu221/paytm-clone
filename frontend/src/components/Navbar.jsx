export const NavBar = ({userAuth}) => {

    return <div className="bg-[#E3F4F4] w-full fixed flex justify-between items-center shadow-md p-4 z-9999">
       <h1 className='text-2xl font-bold text-[#334155] border-2 p-2 rounded-lg border-[#334155]'>BluPay</h1>
       {
        userAuth.loggedIn ? 
            <div className="flex items-center">
                <div className='text-xl font-bold text-[#334155]'>
                    Hello, {userAuth.username}
                </div>
                <div className="text-lg px-3 py-1 m-2 bg-[#334155] text-white rounded-full">{userAuth.username[0].toUpperCase()}</div>
            </div> :  <></>
       }
    </div>
}