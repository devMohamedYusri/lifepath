function Button({ icon: Icon, text, className, children, ...rest }) {
    return (
        <button
            className={`mt-2 w-full py-1 border-2 border-[#4E70FB] text-[#4E70FB] rounded-lg 
        flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors 
        md:w-auto md:px-6 md:py-3 md:text-lg 
        sm:w-[80%] sm:py-2 sm:px-4 sm:text-sm
        xs:w-[90%] xs:py-1.5 xs:px-3 xs:text-xs xs:gap-1.5
        ${className}`}
            {...rest}
        >
            {Icon ? <Icon className="w-5 h-5 text-red-600 sm:w-4 sm:h-4 xs:w-3 xs:h-3" /> : ""}
            <span>{text}</span>
            {children}
        </button>
    );
}

export default Button;

