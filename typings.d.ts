export type Experience = {
    id: string;
    title: string;
    company: string;
    startYear: num;
    startMonth: string;
    endYear?: num;
    endMonth?: string;
    descriptions: string[];
}