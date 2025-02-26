import { Resource } from "./image";

export interface Route {
    indexUnique: string;
    name: string;
    URL: string;
    avatar?: Resource;
    thumbnail?: Resource;
    children?: Route[];
}









