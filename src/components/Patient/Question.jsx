import { Link } from "react-router-dom"
import image from "@/assets/react.svg"

function Question({question,asker,className}) {
    return (
        <Link to="" className={`flex my-3 items-center gap-2 p-2 bg-[#B2C1FF] rounded-sm ${className} `}>
        <img src={image} alt="sender" className='rounded-full w-10 h-10' />
        <div >
            <p className={`text-lg text-gray-500 mb-4 font-bold ${className}`}> {asker}</p>
            <p className="text-md text-gray-500">{question}</p>
        </div>
    </Link>
    )
}

export default Question
