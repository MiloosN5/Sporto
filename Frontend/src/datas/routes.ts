// data
import { fetchSportsData } from './sports';

// types
import { Route } from '../types/route';

// icons
import { FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa'

export const getPageRoutes = async (): Promise<Route[]> => {
    let sportsData: any[] = [];
    try {
        sportsData = await fetchSportsData();
        if (!Array.isArray(sportsData)) {
            console.warn('Invalid sports data format:', sportsData);
            sportsData = [];
        }
    } catch (error) {
        console.error('Error fetching sports data:', error);
    }
    return [
        'home',
        'sports',
        'news',
        'contact'
    ].map((routeName) => {
        if (routeName === 'home') {
            return {
                indexUnique: 'route-root-home',
                name: 'home',
                URL: '/'
            }
        }
        if (routeName === 'sports') {
            return {
                indexUnique: `route-root-sports`,
                name: 'sports',
                URL: '/sports',
                children: sportsData.map((sport) => ({
                    indexUnique: `route-root-sports-${sport.name}`,
                    name: sport.name,
                    URL: `sports/${sport.URL}`,
                    thumbnail: sport.thumbnail
                })),
            };
        }
        return {
            indexUnique: `route-root-${routeName}`,
            name: routeName,
            URL: `/${routeName}`
        };
    });
};

getPageRoutes()
    .then((routes) => {
        console.log(routes);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

export const exploreRoutes: Route[] = [
    'news',
    'contact',
    'sports'
].map((routeName) => {
    return {
        indexUnique: `route-explore-${routeName}`,
        name: routeName,
        URL: `/${routeName}`
    };
})

export const legalRoutes: Route[] = [
    'Terms & Conditions',
    'Privacy policy',
    'License Agreement'
].map((routeName) => {
    const formattedRouteName = routeName
        .replace(/&/g, 'and')
        .replace(/\s+/g, '_')
        .toLowerCase();
    return {
        indexUnique: `route-explore-${formattedRouteName}`,
        name: routeName,
        URL: `/${formattedRouteName}`
    };
});

export const socialRoutes: Route[] = [
    {
        indexUnique: 'route-social-instagram',
        name: 'Instagram',
        URL: 'https://www.instagram.com/',
        avatar: {
            src: FaInstagram,
            alt: ''
        }
    },
    {
        indexUnique: 'route-social-discord',
        name: 'Discord',
        URL: 'https://discord.com/',
        avatar: {
            src: FaDiscord,
            alt: ''
        }
    },
    {
        indexUnique: 'route-social-facebook',
        name: 'Facebook',
        URL: 'https://www.facebook.com/',
        avatar: {
            src: FaFacebook,
            alt: ''
        }
    }
];