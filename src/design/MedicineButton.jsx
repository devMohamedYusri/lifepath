function MedicineButton({icon:Icon,text,className,price,...rest}) {
    return (
        <button className={`flex gap-2 items-center justify-center p-4 bg-white -mb-5 p-x-10 rounded-full border-2 border-gray-400 w-full ${className}`} {...rest}>
            {text}
            {Icon? <Icon className="w-5 h-5" />: ""}
        </button>
    )
}

export default MedicineButton;