import { Resource } from "./image";

export interface Data {
    indexUnique?: string;
    name?: string;
    URL?: string;
    type?: any;
    text?: string[];
    athletes?: {
        men?: Athlete[],
        women?: Athlete[]
    };
    events?: any[];
    clubs?: any[];
    thumbnail?: Resource;
    cover?: Resource;
};

export interface Athlete {
    name: string;
    country: string;
};
