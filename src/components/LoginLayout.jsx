import image from "@/assets/male-doctor.webp"
import lifepath from "@/assets/lifepath.png"
import { Outlet } from "react-router-dom"
function LoginLayout() {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-1/2">
                <Outlet/>
            </div>
            <div className="relative w-1/2">
                <div className="absolute top-[50%] left-[30%] z-10 ">
                    <img src={lifepath} alt="lifepath"  className="w-56 h-fit"/>
                    <p className="text-red-500 -mt-5">احجز مع اكبر اطباء متخصصين </p>
                </div>
                <img src={image} alt="doctor-image " className="w-full h-full blur-[3px]" />
            </div>
        </div>
    )
}

export default LoginLayout
