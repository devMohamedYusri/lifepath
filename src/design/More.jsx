import { Link } from "react-router-dom"

function More({link,className,text}) {
    return (
        <>
        <Link to={link} className={`text-[#4E70FB] underline ${className}`}>{text}</Link>
        </>
    )
}

export default More