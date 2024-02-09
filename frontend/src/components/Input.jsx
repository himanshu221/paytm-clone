export const InputBox = ({placeholder}) => {
    return <div className='relative w-full p-4'>
        <input className='bg-[#C4DFDF] w-full border-2 border-[#334155] outline-none text-md p-2 rounded-lg' type="text" placeholder=" "/>
        <span className="input-text transition duration-500 p-1 absolute left-6 top-5 text-md text-[#334155] text-opacity-80">{placeholder}</span>
    </div>
}