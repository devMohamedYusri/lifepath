import { Link } from "react-router-dom";
import image from '../../assets/react.svg'
import DoctorRatingStars from "../../design/DoctorRating";
import { CiStethoscope } from "react-icons/ci";
import Button from "../../design/Button";
import { MessageCircle } from "lucide-react";

function DoctorCard() {
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
        <Link to={`/doctors/${doctor.id}`} className="w-[24%] h-fit items-center p-1 border rounded-lg shadow-md hover:shadow-lg ">
            <div className="flex">
                <img src={image} alt={`${doctor.name} صورة`} className="w-20 h-20 rounded-full mr-4 shadow-md" />
                <div className="flex-1">
                    <div className="flex m-2">
                        <h3 className="text-xl">{doctor.nickname} :  </h3>
                        <p className="text-lg">{doctor.name}</p>
                    </div>
                    <div className="flex items-center">
                        <img src={'/vite.svg'} alt={`${doctor.specialty.name} أيقونة`} className="w-5 h-5 m-2" />
                        <span className="text-gray-500">{doctor.specialty.name}</span>
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
                    <div className="mt-2">
                        <span className="inline-flex center text-gray-500 ">التقييم: </span>
                        <DoctorRatingStars rating={4.5} />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-2 text-gray-700">
                    <CiStethoscope className="w-10 h-10" />
                    <p className="text-gray-950 pr-2">
                        استشاري القلب والقسطرة معهد القلب
                </p>
                </div>
            </div>
            <Button  text="ارسل استفسار لطبيبك" icon={MessageCircle}/>
        </Link>
    );
}

export default DoctorCard
