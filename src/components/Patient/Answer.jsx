import { Link } from "react-router-dom"
import image from "../../assets/react.svg"

function Answer({ doctor, specialist, response,className }) {
    return (
        <Link to="" className={`my-3 p-4 bg-[#F4F4F4] rounded-sm ${className}`}>
            <div className="flex">
                <img src={image} alt="sender" className='rounded-full w-10 h-10 self-start' />
                <p className="text-lg flex flex-col text-gray-500 font-bold">
                    <span>{doctor}</span>
                    <span>{specialist}</span>
                </p>
            </div>
                <p className="text-md text-gray-500">{response}</p>
        </Link>
    )
}

export default Answer
