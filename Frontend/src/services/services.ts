import { fetchSportsData } from "../datas/sports";
import { getPageRoutes, exploreRoutes, legalRoutes, socialRoutes} from "../datas/routes";
import { heroData } from "../datas/hero";

export const sportsLoader = async () => {
    try {
        const sportsData = await fetchSportsData();
        return { sportsData };
    } catch (error) {
        throw new Response('Failed to load sports data', { status: 500 });
    }
};

export const heroLoader = async () => {
    try {
        return { heroData };
    } catch (error) {
        throw new Response('Failed to load hero data', { status: 500 });
    }
};

export const routesLoader = async () => {
    try {
        const pageRoutes = await getPageRoutes();
        return {pageRoutes, exploreRoutes, legalRoutes, socialRoutes } ;
    } catch (error) {
        console.error("Error loading routes:", error);
        throw new Response('Failed to load routes', { status: 500 });
    }
}


