const Title = ({ text ,className}) => {
    return (
        <h2 className={`text-lg font-normal my-2${className}`}>{text}</h2>
    );
};

export default Title;
