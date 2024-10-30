const truncateDescription = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + ' ... المزيد';
    }
    return text;
};

export default truncateDescription;