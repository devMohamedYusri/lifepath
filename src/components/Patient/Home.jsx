import Container from "@/design/Container.jsx";
import Title from "@/design/Title.jsx";
import SpecialistCard from "@/components/Patient/SpecialistCard.jsx"; 
import blood from "@/assets/react.svg"; 
import More from "@/design/More.jsx";
import Arrow from "@/design/Arrow.jsx";
import Calendar from "@/components/Patient/Calendar.jsx"; 
import Day from "@/design/Day.jsx";
import AppointmentCard from "@/components/Patient/AppointmentCard.jsx"; 
import InfoCard from "@/components/Patient/InfoCard.jsx"; 
import BlogCard from "@/components/Patient/BlogCard.jsx"; 
import PopularDoctor from "@/components/Patient/PopularDoctor.jsx"; 
function Home() {
    return (
        <div className="h-full flex mb-10">
            <div className="w-3/4">
                <Container className={"m-2 p-3 overflow-hidden"}>
                    <div className="flex gap-3 justify-between">
                        <div className="flex gap-6 mb-5">
                            <Title text="التخصصات والاطباء" />
                            <More text="عرض المزيد" />
                        </div>
                        <div className="flex gap-4">
                            <Arrow onClick={() => document.querySelector('.specialist-cards').scrollLeft -= 100} />
                            <Arrow isBack={true} onClick={() => document.querySelector('.specialist-cards').scrollLeft += 100} />
                        </div>
                    </div>
                    <div className="flex gap-4 overflow-hidden specialist-cards">
                        <SpecialistCard icon={blood} specialist={"طبيب الاطفال"} />
                        <SpecialistCard icon={blood} specialist={"طبيب الاطفال"} />
                        <SpecialistCard icon={blood} specialist={"طبيب الاطفال"} />
                        <SpecialistCard icon={blood} specialist={"طبيب الاطفال"} />
                        <SpecialistCard icon={blood} specialist={"طبيب الاطفال"} />
                        <SpecialistCard icon={blood} specialist={"طبيب الاطفال"} />
                        <SpecialistCard icon={blood} specialist={"طبيب الاطفال"} />
                        <SpecialistCard icon={blood} specialist={"طبيب الاطفال"} />
                    </div>
                </Container>

                <Container className={"m-2 p-3 overflow-hidden"}>
                    <div className="flex gap-3 justify-between">
                        <div className="flex gap-6 mb-5">
                            <Title text="جدول المواعيد" />
                            <More text="23 ابريل" />
                        </div>
                        <div className="flex gap-4">
                            <Arrow onClick={() => document.querySelector('.appointments-cards').scrollLeft -= 100} />
                            <Arrow isBack={true} onClick={() => document.querySelector('.appointments-cards').scrollLeft += 100} />
                        </div>
                    </div>
                    <div className="flex gap-5 overflow-hidden date-cards justify-center mb-4 pb-2">
                        <Day day="السبت" date="22" />
                        <Day day="السبت" date="22" />
                        <Day day="السبت" date="22" />
                        <Day day="السبت" date="22" />
                        <Day day="السبت" date="22" />
                        <Day day="السبت" date="22" />
                        <Day day="السبت" date="22" />
                        <Day day="السبت" date="22" />
                        <Day day="السبت" date="22" />
                        <Day day="السبت" date="22" />
                    </div>
                    <div className="flex gap-2 overflow-hidden appointments-cards">
                        <AppointmentCard className="w-1/3"/>
                        <AppointmentCard className="w-1/3"/>
                        <AppointmentCard className="w-1/3"/>
                        <AppointmentCard className="w-1/3"/>
                        <AppointmentCard className="w-1/3"/>
                        <AppointmentCard className="w-1/3"/>
                        <AppointmentCard className="w-1/3"/>
                    </div>
                </Container>
                
            <Container className={"m-2 p-3 overflow-hidden"}>
                    <div className="flex gap-3 justify-between">
                        <div className="flex gap-6 mb-5">
                            <Title text="نتائج تحاليل سابقة" />
                            <More text="عرض  اخر الاحصائيات" />
                        </div>
                    </div>
                    <div className="flex gap-6 overflow-hidden specialist-cards justify-center">
                    <InfoCard/>
                    <InfoCard />
                    <InfoCard />
                    <InfoCard />
                    </div>
                </Container>
                <Container className={"m-2 p-3 overflow-hidden"}>
                    <div className="flex gap-3 justify-between">
                        <div className="flex gap-6 mb-5">
                            <Title text="معلومات طبية تهمك!" />
                            <More text="عرض المزيد" />
                        </div>
                        <div className="flex gap-4">
                            <Arrow onClick={() => document.querySelector('.articles-cards').scrollLeft -= 100} />
                            <Arrow isBack={true} onClick={() => document.querySelector('.articles-cards').scrollLeft += 100} />
                        </div>
                    </div>
                    <div className="flex gap-2 overflow-hidden articles-cards">
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                    </div>
                </Container>

            </div>
            <div className="w-1/4 center ">
                <Calendar />
                <Container className={"mt-3 p-3 overflow-hidden rounded-3xl w-[98%]"}>
                    <div className="flex gap-3 justify-between py-3">
                        <div className="flex gap-6 mb-5">
                            <Title text="اشهر الاطباء  " />
                            <More text="استكشاف المزيد" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 overflow-hidden specialist-cards">
                        <PopularDoctor/>
                        <PopularDoctor/>
                        <PopularDoctor/>
                        <PopularDoctor/>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Home;