import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const DoctorRatingStars = ({ rating }) => {
    // Round the rating to the nearest 0.5 increment
    const roundedRating = Math.round(rating * 2) / 2;
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;

    return (
        <div className="items-center inline-flex">
            {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }, (_, i) => (
                <FontAwesomeIcon key={i + fullStars + (hasHalfStar ? 1 : 0)} icon={faStar} className="text-gray-300 w-5 h-5 mr-1" />
            ))}
            {hasHalfStar && (
                <div className="relative w-5 h-5 mr-1">
                    <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400 absolute left-0 top-0 w-full h-full" />
                    <FontAwesomeIcon icon={faStarHalf} className="text-gray-300 absolute left-0 top-0 w-full h-full transform scale-x-[-1]" />
                </div>
            )}
            {Array.from({ length: fullStars }, (_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 w-5 h-5 mr-1" />
            ))}
        </div>
    );
};

export default DoctorRatingStars;
