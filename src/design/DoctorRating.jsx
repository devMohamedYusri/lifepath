import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const DoctorRatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="items-center inline-flex">
            {hasHalfStar && (
                <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400 w-5 h-5 mr-1" />
            )}
            {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }, (_, i) => (
                <FontAwesomeIcon key={i + fullStars + (hasHalfStar ? 1 : 0)} icon={faStar} className="text-gray-300 w-5 h-5 mr-1" />
            ))}
            {Array.from({ length: fullStars }, (_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 w-5 h-5 mr-1" />
            ))}
        </div>
    );
};

export default DoctorRatingStars;