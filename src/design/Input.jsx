
function Input({type,id,holder,className,...rest}) {
    return (
        <input type={type} id={id} className={`border-2 border-[#4E70FB] m-1 rounded-xl w-full p-2 placeholder-gray-300 ${className}`} placeholder={holder} {...rest} />
    )
}

export default Input
