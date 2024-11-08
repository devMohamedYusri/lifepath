import { Link } from "react-router-dom";
import truncateDescription from "../../Utility/TextEdit"
const BlogCard = () => {
    const description = "يعتبر تغيير نمط الحياة واتباع أسلوب صحي أكثر في جميع الاختيارات اليومية، هو الأفضل لتحقيق الوزن المثالي والحفاظ على الصحة العامة.";
    
    return (
        <Link to="/blog-details" className="flex items-center border border-gray-300 rounded-lg p-4 w-72 flex-shrink-0">
            <div className="text-3xl text-orange-500">🔥</div>
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
