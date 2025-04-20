const Title = ({ text ,className}) => {
    return (
        // trying to solve the name of the file 
        <h2 className={`text-lg my-2.5 ${className}`}>{text}</h2>
    );
};

export default Title;
