import Container from "../../design/Container"
import Title from "../../design/title"
import image from '../../assets/react.svg'
import { BsSend } from "react-icons/bs"
import { MdKeyboardArrowDown } from "react-icons/md"
import SpecialistCard from "./SpecialistCard"
import { useState } from "react"
import { Link } from "react-router-dom"
import QuestionAnswer from "./QuestionAnswer"
import Question from "./Question"
import Answer from "./Answer"


function Questions() {
  const [OpenAll, setOpenAll] = useState(false);
  const handleBackClick = () => {
    setOpenAll(!OpenAll)
  };

  return (
    <div className="m-4" >
      <Container className=" p-4">
        <Title text="اكتب سؤالك وسيقوم احد الاطباء بالرد علية " className="p-3 font-extrabold text-xl" />
        <form className="sticky bottom-0 w-full flex justify-between rounded-md p-3 bg-[#B2C1FF] gap-3 ">
          <img src={image} alt="sender" className="w-20 h-20" />
          <input
            type="text"
            placeholder="اكتب سؤالك"
            className="outline-none h-full w-full rounded-md bg-blue-100 p-6 border-2 border-gray-200"
          />
          <button type="submit">
            <BsSend className="w-10 h-10 transform -scale-x-100 text-red-600" />
          </button>

        </form>
        <button onClick={handleBackClick} className=" flex justify-between border-2 border-[#4E70FB] rounded-xl w-full mt-4 items-center pr-4" >
          <span className="font-bold text-xl text-[#4E70FB]">اختر التخصص</span>
          <button className="border-r-2 border-[#4E70FB] h-full w-fit p-3 rounded-xl text-[#4E70FB]">
            <MdKeyboardArrowDown className="size-8 border-2 border-[#4E70FB] rounded-sm" /></button>
        </button>
        <div className="relative">
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
      </Container>
      <div className="flex gap-5 py-3 w-full">
        <Container className="w-4/6 p-2 py-8">
          <Title text=" اسئلتك قام الاطباء بالاجابة عليها " />
          <div className="w-full ">
            <Container className="flex flex-col gap-1 justify-center">
              <Question
                question="طفل يعاني من الكحة والسخونة بشكل متكرر"
                asker="محمود محمد"
                className="m-0 p-0 gap-0" />
              <Answer
                response="يجب زيارة طبيب الامراض النفسية ليحدد خطة العلاج حسب درجة حدة الاعراض ، من الممكن ان تكون الجلسات النفسية كافية ،
                  و من الممكن ان يحتاج المريض الي علاج دوائي بالاضافة الى الجلسات النفسية "
              doctor="د.امل علي"
                specialist="دكتور اطفال" className="m-0 p-0 gap-0" />
                   <Answer
                response="يجب زيارة طبيب الامراض النفسية ليحدد خطة العلاج حسب درجة حدة الاعراض ، من الممكن ان تكون الجلسات النفسية كافية ،
                  و من الممكن ان يحتاج المريض الي علاج دوائي بالاضافة الى الجلسات النفسية "
              doctor="د.امل علي"
                specialist="دكتور اطفال" className="m-0 p-0 gap-0" />
                   <Answer
                response="يجب زيارة طبيب الامراض النفسية ليحدد خطة العلاج حسب درجة حدة الاعراض ، من الممكن ان تكون الجلسات النفسية كافية ،
                  و من الممكن ان يحتاج المريض الي علاج دوائي بالاضافة الى الجلسات النفسية "
              doctor="د.امل علي"
                specialist="دكتور اطفال" className="m-0 p-0 gap-0" />
                   <Answer
                response="يجب زيارة طبيب الامراض النفسية ليحدد خطة العلاج حسب درجة حدة الاعراض ، من الممكن ان تكون الجلسات النفسية كافية ،
                  و من الممكن ان يحتاج المريض الي علاج دوائي بالاضافة الى الجلسات النفسية "
              doctor="د.امل علي"
                specialist="دكتور اطفال" className="m-0 p-0 gap-0" />
            </Container>
          </div>

        </Container>
        <Container className="w-2/6 p-3">
          <div className="w-full flex justify-between items-center">
            <Title text=" اسئلة قام الاطباء بالاجابة عنها :" />
            <Link to="/patient/questions/more-questions" className="text-blue-500 font-bold">
              المزيد
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <QuestionAnswer
              question="طفل يعاني من الكحة والسخونة بشكل متكرر"
              response="يجب زيارة طبيب الامراض النفسية ليحدد خطة العلاج حسب درجة حدة الاعراض ، من الممكن ان تكون الجلسات النفسية كافية ،
                  و من الممكن ان يحتاج المريض الي علاج دوائي بالاضافة الى الجلسات النفسية "
              doctor="د.امل علي"
              specialist="دكتور اطفال"
              asker="محمود محمد"
              className="m-0 p-0 gap-0" />
            <QuestionAnswer
              question="طفل يعاني من الكحة والسخونة بشكل متكرر"
              response="يجب زيارة طبيب الامراض النفسية ليحدد خطة العلاج حسب درجة حدة الاعراض ، من الممكن ان تكون الجلسات النفسية كافية ،
                  و من الممكن ان يحتاج المريض الي علاج دوائي بالاضافة الى الجلسات النفسية "
              doctor="د.امل علي"
              specialist="دكتور اطفال"
              asker="محمود محمد"
              className="m-0 p-0 gap-0" />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Questions
