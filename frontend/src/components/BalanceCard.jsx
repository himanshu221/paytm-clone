export const BalanceCard = ({balance}) => {
    return (
        <div className='bg-[#334155] w-64 h-48 font-bold ml-10 mt-10 p-8 shadow-lg rounded-lg'>
            <div className='text-2xl mb-3 text-white'>
                Balance
            </div>
            <div className="text-2xl text-white">
              &#8377; {balance}
            </div>
        </div>
    )
}