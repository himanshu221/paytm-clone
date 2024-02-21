
export const Friend = (props) => {
    return <div className="w-full h-16 flex justify-between item-center border-t-2 hover:shadow-lg hover:border-2 hover:rounded-md">
        <div className="flex items-center">
            <div className="text-lg px-3 py-1 m-2 bg-[#334155] text-white rounded-full">
                {props.firstname[0].toUpperCase()}
            </div>
            <div className="text-lg p-2">
                {props.firstname}
            </div>
            <div className="text-lg">
                {props.lastname}
            </div>
        </div>
        <div className="p-3 m-2 flex items-center justify-center">
            <button className="text-md w-[80px] p-2 shadow-lg rounded-lg bg-[#334155] hover:bg-[#19222f] focus:ring-4 focus:ring-[#5a7090] text-white">Pay</button>
        </div>
    </div>
}