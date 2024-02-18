interface sectionHeading {
    text: string,
    color: string,
}

const SectionHeading = ({ text, color }: sectionHeading) => {
    return (
        <h2 className={`mb-6 text-3xl font-semibold ${color}`}>{text}</h2>
    );
}

export default SectionHeading;