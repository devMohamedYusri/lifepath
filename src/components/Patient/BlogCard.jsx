import { Link } from "react-router-dom";
import truncateDescription from "../../Utility/TextEdit"
import image from '../../assets/male-doctor.webp'
const BlogCard = ({className}) => {
    const description = "يعتبر تغيير نمط الحياة واتباع أسلوب صحي أكثر في جميع الاختيارات اليومية، هو الأفضل لتحقيق الوزن المثالي والحفاظ على الصحة العامة.";
    
    return (
        <Link to="/patient/medical-advices/advice-details" className={`flex items-center border border-gray-300 rounded-lg gap-2 p-1  w-52 flex-shrink-0 ${className}`}>
            <img src={image} alt="image" className="w-1/3 h-full"/>
            <div className="flex-grow">
                <h3 className="text-base font-bold">سعرات حرارية:</h3>
                <p className="text-sm text-gray-500">{truncateDescription(description, 10)}
                <span className="text-blue-500"> ...المزيد</span>
                </p>
            </div>
        </Link>
    );
};

export default BlogCard;