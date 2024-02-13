export const Button = (props) => {
    return <div className="w-full p-4 flex justify-center">
        <button className="text-lg w-4/5 p-2 shadow-lg rounded-lg bg-[#334155] hover:bg-[#19222f] focus:ring-4 focus:ring-[#5a7090] text-white" onClick={props.onClick}>{props.label}</button>
    </div>
}