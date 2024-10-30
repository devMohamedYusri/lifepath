import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <Link to="/post-details" className="flex items-center border border-gray-300 rounded-lg p-2 w-1/4">
            <img
                src="https://via.placeholder.com/50"
                alt="weight"
                className="w-full h-full rounded-lg ml-4"
            />
            <div className="flex-grow">
                <h3 className="text-base font-bold">الوزن الزائد:</h3>
                <p className="text-sm text-gray-500">يعتبر تغيير نمط الحياة واتباع أسلوب صحي
                            أكثر في جميع الاختيارات اليومية، هو الأفضل</p>
                <p className="text-blue-500 text-sm">...المزيد</p>
            </div>
        </Link>
    );
};

export default BlogCard;
