export const BalanceCard = ({balance}) => {
    return (
        <div className='bg-[#C4DFDF] w-64 h-48 font-bold m-10 p-8 shadow-lg rounded-lg'>
            <div className='text-2xl mb-3'>
                Balance
            </div>
            <div className="text-2xl">
              &#8377; {balance}
            </div>
        </div>
    )
}