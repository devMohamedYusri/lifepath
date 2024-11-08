
function Label({inputId,className,text}) {
    return (
        <label htmlFor={inputId} className={`text-[#4E70FB] ${className}`}>
            {text}
        </label>
    )
}

export default Label
