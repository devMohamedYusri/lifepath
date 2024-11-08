import { Link } from "react-router-dom";
import image from "../assets/react.svg"
function Chat({className}) {
    return (
        <Link to="" className={`flex my-3 items-center gap-2 p-2 bg-gray-100 rounded-sm ${className}`}>
            <img src={image} alt="sender" className='rounded-full w-10 h-10' />
            <div>
                <p className="text-md"> دكتور خالد</p>
                <p className="text-sm text-gray-500">اهلا بك هل الدواء في ...</p>
            </div>
        </Link>
    )
}

export default Chat;