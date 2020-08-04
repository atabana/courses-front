export interface ICourse {
    id: number;
    name: string;
    date: Date;
    price: number;
    imageUrl: string;
    location?: {
        address: string
        city: string
        country: string
    };
    sessions: ISession[];
}

export interface ISession {
    id: number;
    name: string;
    level: string;
    presenter: string;
    duration: number;
    abstract: string;
    voters: string[];
}
