import { BookText, Clock } from 'lucide-react';
import image from '@/assets/react.svg'
import Button from '@/design/Button.jsx';
const VisitCard = ({ className }) => {
    return (
        <div className={`flex bg-white rounded-xl border-2 border-gray-200 p-4 flex-shrink-0 items-center justify-between ${className}`} dir="rtl">
            <div className="flex gap-2">
                <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src={image}
                            alt="Doctor placeholder"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-md font-semibold">دكتور: علي محمد نصر</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span className="text-gray-600">أمراض القلب</span>
                    </div>

                    <div className="mt-1 flex items-center gap-2 text-gray-600">
                        <Clock className="w-5 h-5" />
                        <div>
                            <div>الموعد: الثلاثاء 16 أبريل 24</div>
                            <div>الساعة 10:00 صباحاً</div>

                        </div>
                    </div>
                    <div className="mt-1 flex gap-2 text-gray-600">
                        <BookText className="w-5 h-5" />
                        <div className="flex gap-2">
                            <div>النوع: اوفلاين</div>
                            <div>المكان :افتراضي</div>
                        </div>
                    </div>
                </div>

            </div>

            <p className="text-lg">الحالة : </p>
            <div>
            <Button text="تم الحضور" className={"w-fit p-5 rounded-md bg-[#B2C1FF] border-none hover:bg-[#B2C1FF] text-black cursor-default"} />
            </div>

            <div>
                <Button text="تقييم الزيارة" className={"w-fit p-10 px-20 rounded-md"} />
            </div>
        </div>
    );
};

export default VisitCard;