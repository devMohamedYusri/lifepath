import { CiStethoscope } from "react-icons/ci"
import Container from "../../design/Container"
import DoctorRatingStars from "../../design/DoctorRating"
import image from '../../assets/react.svg'
import Button from "../../design/Button";
// this not the schedule this the doctor details????????????????????????????????????????????????????????
function Schedule() {
  const doctor = {
    id: 1,
    image: 'path/to/image.jpg',
    nickname: 'دكتور',
    gender: 'ذكر',
    name: 'خالد أحمد',
    specialty: { icon: 'path/to/specialty-icon.png', name: 'اسنان' },
    rating: 4
  };

  return (
    <div className="flex m-5 gap-4">
      <img src={image} alt={`${doctor.name} صورة`} className="w-1/4 h-auto rounded-md mr-4 shadow-md" />
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
      <Container>
        
      </Container>
    </div>
  )
}

export default Schedule