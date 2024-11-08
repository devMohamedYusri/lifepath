import { Link } from 'react-router-dom';
import image from '../../assets/react.svg';
import DoctorRatingStars from '../../design/DoctorRating';
const PopularDoctor = () => {
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
        <Link to={`/doctors/${doctor.id}`} className="flex w-full h-fit items-center p-1 border rounded-lg shadow-md hover:shadow-lg">
            <img src={image} alt={`${doctor.name} صورة`} className="w-20 h-20 rounded-full mr-4 shadow-md" />
            <div className="flex-1">
                <div className="flex m-2">
                <h3 className="text-xl font-semibold">{doctor.nickname} :  </h3>
                <p className="text-lg">{doctor.name}</p>
                </div>
                <div className="flex items-center">
                    <img src={'/vite.svg'} alt={`${doctor.specialty.name} أيقونة`} className="w-5 h-5 m-1"/>
                    <span className="text-gray-500">{doctor.specialty.name}</span>
                </div>
                <div className="mt-2">
                    <span className="inline-flex center text-gray-500 ">التقييم: </span>
                    <DoctorRatingStars rating={4.5}/>
                </div>
            </div>
        </Link>
    );
};

export default PopularDoctor; 