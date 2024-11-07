import Container from "../design/Container"
import Title from "../design/title"
import image from '../assets/react.svg'
import VisitCard from "./VisitCard"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { Link } from "react-router-dom"

function PreviousVisits() {
    return (
        <div>
            <div className="h-full m-2">
                <Container className={"m-4"}>
                    <div className="flex justify-between pl-4 items-center">
                        <div className="flex my-5 items-center gap-4">
                            <img src={image} alt="" className='rounded-full pt-3 w-20 h-20' />
                            <div>
                                <p>مواعيدك السابقة</p>
                            </div>
                        </div>
                        <Link  to="/patient/booking" className=" relative flex gap-2 px-8 cursor-pointer items-center">
                            <p className="text-[#4E70FB]">حجز موعد جديد</p>
                            <AiOutlinePlusCircle className="text-red-600 rounded-full p-1 size-10 font-extrabold"/>
                        </Link>
                    </div>
                </Container>

                <Container className={"m-4 p-3 overflow-hidden"}>
                    <div className="flex gap-1 mb-5">
                        <Title text="اشهر الاطباء" />
                    </div>
                    <div className="flex flex-col gap-3.5 flex-wrap appointments-cards justify-center">
                        <VisitCard className="w-full"/>
                        <VisitCard className="w-full"/>
                        <VisitCard className="w-full"/>
                        <VisitCard className="w-full"/>
                        <VisitCard className="w-full"/>
                        <VisitCard className="w-full"/>
                        <VisitCard className="w-full"/>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default PreviousVisits
