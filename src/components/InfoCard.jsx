const InfoCard = () => {
    return (
        <div className="flex items-center border border-gray-300 rounded-lg p-4 w-1/4">
        <div className="text-3xl text-orange-500">🔥</div>
        <div className="flex-grow mx-2">
            <h3 className="text-base font-semibold">سعرات حرارية:</h3>
            <p className="text-sm text-gray-500">1200 كالوري</p>
        </div>
    </div>
    );
};

export default InfoCard;
