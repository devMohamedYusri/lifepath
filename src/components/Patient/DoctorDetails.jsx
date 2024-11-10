import Container from "../../design/Container"
import DoctorRatingStars from "../../design/DoctorRating"
import image from '../../assets/react.svg'
import Button from "../../design/Button";
import RatingCard from "./RatingCard";
import AvailableDate from "./AvailableDate";
import Title from "../../design/title";
import DoctorCard from "./DoctorCard";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import FullRating from "./FullRating";
import { BsSend } from "react-icons/bs";
function DoctorDetails() {
  const [moreRates, setMoreRates] = useState(true);
  const doctor = {
    id: 1,
    image: 'path/to/image.jpg',
    nickname: 'دكتور',
    gender: 'ذكر',
    name: 'خالد أحمد',
    specialty: { icon: 'path/to/specialty-icon.png', name: 'اسنان' },
    rating: 4
  };
  const toggleRating = () => {
    setMoreRates(!moreRates)
  }
  return (
    <div className="flex flex-col m-5 gap-4">
      <div className="flex">
        <img src={image} alt={`${doctor.name} صورة`} className="w-1/4 h-auto rounded-md mx-4 shadow-md" />
        <Container className="w-full">

          <div className="relative flex h-fit items-center p-5 border rounded-lg shadow-md hover:shadow-lg ">
            <div className="flex w-fit flex-shrink-0">
              <div className="flex-1">
                <div className="flex m-2">
                  <h3 className="text-3xl">{doctor.nickname} :  </h3>
                  <p className="text-3xl">{doctor.name}</p>
                </div>
                <div className="flex items-center">
                  <img src={'/vite.svg'} alt={`${doctor.specialty.name} أيقونة`} className="w-20 h-20 m-2" />
                  <span className="text-gray-500 text-lg">{doctor.specialty.name}</span>
                </div>
                <div className="mt-2">
                  <span className="inline-flex center text-gray-500 ">التقييم: </span>
                  <DoctorRatingStars rating={4.5} />
                </div>
                <div className="flex items-center gap-2">
                  <span>المكان: </span>
                  <span className="text-gray-500">الدقي</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>الكشف: </span>
                  <span className="text-gray-500">400جنية</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>مدة الانتظار: </span>
                  <span className="text-gray-500">43 دقيقة</span>
                </div>

              </div>
            </div>
            <div className="absolute -top-5 left-6">
              <Button text="تفاصيل وعنوان العيادة" className="bg-[#4E70FB] text-white w-fit p-7 hover:text-[#4E70FB]" />
            </div>
            <div className="relative w-full h-[200px] bg-[#B2C1FF] -mb-10 mt-10 rounded-xl">
              <div className="absolute top-3 -right-5 w-10 h-40 bg-[#4E70FB] rounded-3xl">
              </div>
              <div className="text-white p-10">
                <p className="text-xl p-4">معلومات هامة عن الطبيب</p>
                <div>
                  استشاري القلب و القسطرة معهد القلب اخصائي القلب والأوعية الدموية ،خبير القسطرة التداخلية ،عضو الجمعية المصرية للقلب ..
                  تخصص أمراض قلب بالغين وأطفال
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </Container>
      </div>
      {
        moreRates ? <>
          <Container className="w-full flex relative ">
            <Container className="w-4/6 p-2 py-8">
              <Title text="المواعيد المتاحة" />
              <div className="flex ">
                <Container className="flex flex-wrap justify-center">
                  <AvailableDate day="السبت" className="bg-[#4E70FB]" />
                  <AvailableDate day="السبت" className="bg-[#4E70FB]" />
                  <AvailableDate day="السبت" className="bg-[#4E70FB]" />
                  <AvailableDate day="السبت" className="bg-[#4E70FB]" />
                  <AvailableDate day="السبت" className="bg-[#4E70FB]" />
                  <AvailableDate day="السبت" className="bg-[#4E70FB]" />
                  <AvailableDate day="السبت" className="bg-[#4E70FB]" />
                </Container>
              </div>

            </Container>
            <Container className="w-2/6 p-3">
              <div className="w-full flex justify-between items-center">
                <Title text="أحدث التقييمات :" />
                <button onClick={toggleRating} className="text-blue-500 underline">
                  المزيد
                </button>
              </div>
              <div>
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
              </div>
            </Container>
            <button className="absolute border-2 border-red-500 p-3 px-48 text-center bg-white -bottom-8 left-96 rounded-lg">
              مراسلة الطبيب
            </button>
          </Container>

          <Container className="w-full">
            <Title text="أطباء نفس تخصص الطبيب" className="p-2" />
            <div className="w-full flex">
              <div className="w-5/6 flex gap-2">
                <DoctorCard className="flex-1" />
                <DoctorCard className="flex-1" />
                <DoctorCard className="flex-1" />
              </div>
              <Link to="/patient/booking/specialist/heart-disease" className="w-1/6 text-center flex flex-col gap-2 text-blue-600 justify-center items-center">
                <p >المزيد</p>
                <FiArrowLeftCircle className="w-12 h-12 text-center mx-auto" />
              </Link>
            </div>
          </Container>
        </> :
          <Container className="w-full h-full flex relative  ">
            <Container className="w-5/6 p-2 py-8 ">
              <Title text=" التقييمات" />
              <Container className="flex flex-col min-h-0 overflow-y-auto max-h-[50vh] overflow-x-hidden p-0"

              >
                <div className="flex-1 overflow-y-auto p-4 pb-0"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  <FullRating />
                  <FullRating />
                  <FullRating />
                  <FullRating />
                  <FullRating />
                  <FullRating />
                  <FullRating />
                </div>
                <form className="sticky bottom-0 w-full flex justify-between rounded-md p-3 gap-3 bg-[#B2C1FF] ">
                  <img src={image} alt="sender" className="w-20 h-20" />
                  <input
                    type="text"
                    placeholder="اكتب تعليقا"
                    className="outline-none h-full w-full rounded-md bg-blue-50 p-6 border-2 border-gray-200"
                  />
                  <button type="submit">
                    <BsSend className="w-10 h-10 transform -scale-x-100" />
                  </button>
                </form>
              </Container>

            </Container>
            <Container className="w-2/6 p-3 h-full ">
              <div className="w-full h-full flex flex-col justify-between items-center text-blue-500">
                <Title text=" التقييم العام للطبيب " className="text-3xl" />
                <DoctorRatingStars rating={2.2} />
                <button onClick={toggleRating} className="w-1/6 text-center flex flex-col gap-2 text-blue-600 justify-center items-center">
                  <p className="w-32 text-center mt-32 ">العودة للسابق</p>
                  <FiArrowLeftCircle className="w-12 h-12 text-center mx-auto" />
                </button>
              </div>
            </Container>
            <button className="absolute border-2 border-red-500 p-3 px-48 text-center bg-white -bottom-8 left-96 rounded-lg">
              مراسلة الطبيب
            </button>
          </Container>
      }
    </div>
  )
}

export default DoctorDetails