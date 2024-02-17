interface publishDate {
    color: string,
    dateMDY: string
}
const PublishMonthDateYear = ({ dateMDY, color }: publishDate) => {
    return (
        <div className="date flex items-center space-x-1">
            <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 ${color}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </span>
            <span className={color}>
                {dateMDY}
            </span>
        </div>
    );
}

export default PublishMonthDateYear;