interface HeadingProps {
    text: string,
}
const SectionHeading = ({ headingProps }: { headingProps: HeadingProps }) => {
    return (
        <h4 className="capitalize font-medium">{headingProps?.text}</h4>
    );
}

export default SectionHeading;