export const InputBox = (props) => {
    return <div className='relative w-full p-4 z-10'>
        <input className='bg-white w-full border-2 border-[#334155] outline-none text-md p-2 rounded-lg' ref={props.refer} type={props.type} placeholder=" "/>
        <span className="input-text transition duration-500 p-1 absolute left-6 top-5 text-md text-[#334155] text-opacity-80">{props.placeholder}</span>
    </div>
}