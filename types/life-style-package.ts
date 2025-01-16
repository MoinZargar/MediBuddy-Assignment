export interface PackageProps {
    title: string;
    value: string;
    imgSrc: string;
}

export interface LifestylePackageSectionType {
    id: string;
    title: string;
    props: PackageProps[];
}
