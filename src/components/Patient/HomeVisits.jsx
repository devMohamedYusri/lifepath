import { useState } from "react";
import image from "@/assets/bgpharmacy.png"
import { LuPlus } from "react-icons/lu";
import Container from "@/design/Container.jsx";
import Title from "@/design/Title.jsx";
import AppointmentCard from "@/components/Patient/AppointmentCard.jsx";
function HomeVisits() {
    const [OpenAll, setOpenAll] = useState(false);
    const handleBackClick = () => {
        setOpenAll(!OpenAll)
    };
    return (
        <div className="m-4">
            <Container className="flex justify-between pl-4 items-center">
                <div className="flex my-5 items-center gap-4">
                    <img src={image} alt="" className='rounded-full pt-3 w-20 h-20' />
                    <div>
                        <p className="mb-3">امراض القلب</p>
                        <p>اليك اشهر الاطباء في هذا التخصص</p>
                    </div>
                </div>
                <div onClick={handleBackClick} className=" relative flex gap-6 px-8 cursor-pointer items-center">
                    <p className="text-[#4E70FB]">حجز موعد جديد</p>
                    <LuPlus className="text-[#BC181D] rounded-full p-1 size-10 font-extrabold" />
                </div>
            </Container>
            
            <Container className="w-full">
                <Title text="اطباء متاحين للزيارات المنزلية" className="p-2" />
                <div className="w-full flex gap-2">
                    <AppointmentCard className="w-96 flex-1" />
                    <AppointmentCard className="w-96 flex-1" />
                    <AppointmentCard className="w-96 flex-1" />
                    <AppointmentCard className="w-96 flex-1" />
                </div>
            </Container>
        </div>
    )
}

export default HomeVisits
