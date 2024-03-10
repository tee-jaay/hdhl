interface GeneralSettings {
    title: string
}

const FooterBottom = ({ generalSettings }: { generalSettings: GeneralSettings }) => {
    return (
        <div className="flex justify-start py-4 text-gray-200 phone:px-2">
            <div className="copyrights text-sm">
                Copyright &copy; {new Date().getFullYear()} {generalSettings?.title}. All Rights Reserved.
            </div>
        </div>
    );
}

export default FooterBottom;