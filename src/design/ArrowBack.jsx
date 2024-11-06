import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

function Arrow({ isBack=false ,...rest}) {
    return (
        <>
            <button {...rest}>
            {isBack ? <IoIosArrowBack className="text-[#4E70FB] border-2 border-[#4E70FB] rounded-md size-5 font-extrabold" />
                : <IoIosArrowForward className="text-[#4E70FB] border-2 border-[#4E70FB] rounded-md size-5 font-extrabold"/>}
            </button>
        </>
    )
}

export default Arrow
