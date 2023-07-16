export interface Jobs {
    jobs: SingleJob[],
    jobsLike: SingleJob[],
    jobsFilter: SingleJob[],
    jobsSelected: SingleJob[],
    jobSelect: SingleJob | null
}

export interface SingleJob {
    id: string,
    name: string
    professionaldegree: boolean,
    description: string,
    type: string,
    status?: boolean
    date: string,
    selected: boolean,
    favorite: boolean
}

