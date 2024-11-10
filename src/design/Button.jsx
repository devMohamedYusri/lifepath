
function Button({ icon: Icon ,text,className,children,...rest}) {
    return (
        <button className={`mt-2 w-full py-2 border-2 border-[#4E70FB] text-[#4E70FB] rounded-lg 
        flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors ${className}`} {...rest}>
            {Icon? <Icon className="w-5 h-5 text-red-600" />: ""}
            <span>{text}</span>
            {children}
        </button>
    );
}

export default Button;
