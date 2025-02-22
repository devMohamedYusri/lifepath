import Arrow from "@/design/Arrow"
import Container from "@/design/Container"
import More from "@/design/more"
import Title from "@/design/title"
import image from '@/assets/react.svg'
import SpecialistCard from "./SpecialistCard"
import DoctorCard from './DoctorCard'

function Booking() {
    return (
            <div className="h-full">
                <Container className={"m-2"}>
                    <div className="flex justify-between pl-4">
                        <div className="flex my-2 items-center gap-4">
                            <img src={image} alt="" className='rounded-full pt-3 w-20 h-20' />
                            <div>
                                <p>مرحبا،علي!</p>
                                <p>مرحبا،علي!
                                    هل تريد حجز موعد؟؟ كيف يمكننا مساعدتك</p>
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="flex gap-4">
                                <Arrow onClick={() => document.querySelector('.specialist-cards').scrollLeft -= 100} />
                                <Arrow isBack={true} onClick={() => document.querySelector('.specialist-cards').scrollLeft += 100} />
                            </div>
                        </div>
                    </div>
                    <Container className={"m-4 p-3"}>
                        <div className="flex gap-3 justify-between">
                            <div className="flex gap-6 mb-5">
                                <Title text="التخصصات والاطباء" />
                                <More text="عرض المزيد" />
                            </div>
                        </div>
                        <div className="flex gap-4 overflow-hidden specialist-cards">
                            <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2" imgclass="w-full h-full bg-blue-400" />
                            <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2" imgclass="w-full h-full bg-blue-400" />
                            <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2" imgclass="w-full h-full bg-blue-400" />
                            <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2" imgclass="w-full h-full bg-blue-400" />
                            <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2" imgclass="w-full h-full bg-blue-400" />
                            <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2" imgclass="w-full h-full bg-blue-400" />
                            <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2" imgclass="w-full h-full bg-blue-400" />
                            <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2" imgclass="w-full h-full bg-blue-400" />
                            <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2" imgclass="w-full h-full bg-blue-400" />
                            <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2" imgclass="w-full h-full bg-blue-400" />
                            <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2" imgclass="w-full h-full bg-blue-400" />
                            <SpecialistCard icon={image} specialist={"طبيب الاطفال"} className="p-2" imgclass="w-full h-full bg-blue-400" />

                        </div>
                    </Container>
                </Container>

                <Container className={"m-4 p-3 overflow-hidden"}>
                    <div className="flex gap-1 mb-5">
                        <Title text="اشهر الاطباء" />
                    </div>
                    <div className="flex gap-3 flex-wrap appointments-cards justify-center">
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>  
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                        <DoctorCard/>
                    </div>
                </Container>
            </div>
    )
}

export default Booking
