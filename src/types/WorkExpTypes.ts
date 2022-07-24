interface CompanyType {
    name: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    location: string;
};

interface ProjectType {
    title: {
        text:string;
        githubLink: string | null;
        otherLink: string | null
    };
    description: string;
    startDate: string;
    endDate: string;
    which: string[];
    techStack: string[] | null;
}


export type { CompanyType, ProjectType };