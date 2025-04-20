import { Link } from "react-router-dom";
import image from '@/assets/react.svg'

const SpecialistCard = ({ icon, specialist, className, imgclass }) => {
    return (
        <Link to={`/patient/booking/specialist/heart-disease`} className={`flex flex-col items-center justify-center w-32 h-fit border border-gray-300 rounded-lg p-3 shadow-sm  flex-shrink-0 ${className}`}>
            <img src={icon} alt={specialist} className={`${imgclass} rounded-full w-full`} />
            <p className="text-base mt-2 text-center whitespace-nowrap overflow-hidden text-ellipsis">{specialist}</p>
        </Link>
    );
};

export default SpecialistCard;