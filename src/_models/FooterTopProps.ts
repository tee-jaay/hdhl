import GeneralSettingsProps from "./GeneralSettingsProps";
import PageProps from "./PageProps";
import TagProps from "./TagProps";

export default interface FooterTopProps {
    pages: PageProps[];
    tags: TagProps[];
    generalSettings: GeneralSettingsProps;
}