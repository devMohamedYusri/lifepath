import Container from "../../design/Container"
import Title from "../../design/title"
import image from '../../assets/react.svg'
import DoctorCard from './DoctorCard'
import { FaArrowLeftLong } from "react-icons/fa6"
import { useState } from "react"
import SpecialistCard from "./SpecialistCard"

function Specialist() {
    const [OpenAll, setOpenAll] = useState(false);
    const handleBackClick = () => {
        setOpenAll(!OpenAll)
    };

    return (
        <div>
            <div className="h-full mb-10">
                <Container className={"m-4"}>
                    <div className="flex justify-between pl-4 items-center">
                        <div className="flex my-5 items-center gap-4">
                            <img src={image} alt="" className='rounded-full pt-3 w-20 h-20' />
                            <div>
                                <p className="mb-3">امراض القلب</p>
                                <p>اليك اشهر الاطباء في هذا التخصص</p>
                            </div>
                        </div>
                        <div onClick={handleBackClick} className=" relative flex gap-6 px-8 cursor-pointer">
                            <p className="text-[#4E70FB]">
                                البحث عن تخصص جديد
                            </p>
                            <FaArrowLeftLong
                                onClick={() => document.querySelector('.specialist-cards').scrollLeft -= 100}
                                className="text-[#4E70FB] border-2 border-[#4E70FB] rounded-full p-1 size-8 font-extrabold"
                            />
                            {OpenAll && (
                                <div className="absolute top-full left-0 mt-2 w-[1000px] bg-blue-300 shadow-lg rounded-md py-2 flex flex-wrap gap-5 p-10">
                                    <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2 flex-1 bg-white w-fit" imgclass="w-16 h-16 " />
                                    <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2 flex-1 bg-white w-fit" imgclass="w-16 h-16 " />
                                    <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2 flex-1 bg-white w-fit" imgclass="w-16 h-16 " />
                                    <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2 flex-1 bg-white w-fit" imgclass="w-16 h-16 " />
                                    <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2 flex-1 bg-white w-fit" imgclass="w-16 h-16 " />
                                    <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2 flex-1 bg-white w-fit" imgclass="w-16 h-16 " />
                                    <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2 flex-1 bg-white w-fit" imgclass="w-16 h-16 " />
                                    <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2 flex-1 bg-white w-fit" imgclass="w-16 h-16 " />
                                    <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2 flex-1 bg-white w-fit" imgclass="w-16 h-16 " />
                                    <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2 flex-1 bg-white w-fit" imgclass="w-16 h-16 " /> 
                                    <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2 flex-1 bg-white w-fit" imgclass="w-16 h-16 " />
                                    <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2 flex-1 bg-white w-fit" imgclass="w-16 h-16 " />
                                    <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2 flex-1 bg-white w-fit" imgclass="w-16 h-16 " />
                                </div>
                            )}
                        </div>
                    </div>
                </Container>

                <Container className={"m-4 p-3 overflow-hidden"}>
                    <div className="flex gap-1 mb-5">
                        <Title text="اشهر الاطباء" />
                    </div>
                    <div className="flex gap-3.5 flex-wrap appointments-cards justify-center">
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Specialist
