import Container from "@/design/Container.jsx"
import image from '@/assets/bgpharmacy.png'
import { MdKeyboardArrowDown } from "react-icons/md"
import Title from "@/design/Title.jsx"
import Medicine from "@/design/Medicine.jsx"
import { useState } from "react"
import SpecialistCard from "./SpecialistCard"
function Pharmacy() {
    const [OpenAll, setOpenAll] = useState(false);
    const handleBackClick = () => {
        setOpenAll(!OpenAll)
    };
    return (
        <div className="flex flex-col gap-3 m-4">
            <Container className="relative w-full pb-[22%] pt-0 overflow-hidden">
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className="absolute inset-0 bg-cover bg-center filter blur-sm"
                ></div>

                <Title text="خدمة 24 ساعة في أي مكان داخل مصر.." className="relative z-10 text-black font-extrabold text-xl p-5 pb-0 pt-10" />
                
                <div className="relative">
                    <button onClick={handleBackClick} className="relative z-10 flex justify-between border-2
                        border-gray-200 rounded-full w-full mt-4 items-center pr-4 bg-white">
                        <span className="font-normal text-xl text-black"> الصيدليات متاحة 24 ساعة</span>
                        <button className="border-r-2 border-gray-200 h-full w-fit p-3 rounded-full text-black">
                            <MdKeyboardArrowDown className="size-8 border-2 border-gray-200 rounded-sm" />
                        </button>
                    </button>
                    {OpenAll && (
                        <div className="mt-2 w-full bg-blue-300 shadow-lg rounded-md py-2 flex flex-wrap gap-5 p-10 z-100">
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
            </Container>
            <Container className="py-1">
                <Title text="الاكثر طلبا في الموقع " className="mx-4" />
                <div className="flex w-full overflow-hidden gap-2 p-8">
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>
                <Medicine text="299 ج.م"/>

                </div>
            </Container>

        </div>
    )
}

export default Pharmacy
